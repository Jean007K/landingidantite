'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import PasswordField from '@/components/PasswordField';
import { isTaxSignupError, publicSignupError } from '@/lib/publicError';
import { looksCompleteTaxID, taxErrorMessage, validateTaxID } from '@/lib/taxid';
import { API_URL, DASH_LOGIN_URL, TURNSTILE_SITE_KEY } from '@/lib/urls';

type CountryOption = { code: string; tax_id_label: string; tax_id_placeholder: string };
type CodeLabel = { code: string; label: string };
type OptionsPayload = { countries: CountryOption[]; industries: CodeLabel[]; sizes: CodeLabel[] };

const FREE_MAIL = new Set([
  'gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.es', 'outlook.com', 'live.com',
  'msn.com', 'yahoo.com', 'yahoo.es', 'ymail.com', 'icloud.com', 'me.com', 'aol.com',
  'protonmail.com', 'proton.me', 'gmx.com', 'mail.com', 'zoho.com', 'yandex.com',
  'tutanota.com', 'mailinator.com',
]);

const inputClass =
  'block h-9 w-full rounded-lg border-0 px-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary';

const invalidInputClass =
  'block h-9 w-full rounded-lg border-0 px-3 text-sm text-gray-900 ring-1 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500';

type FormState = {
  contact_name: string;
  email: string;
  legal_name: string;
  commercial_name: string;
  country_code: string;
  tax_id: string;
  industry: string;
  phone: string;
  website: string;
  company_size: string;
  password: string;
  password_confirm: string;
  accepted_terms: boolean;
};

const emptyForm: FormState = {
  contact_name: '',
  email: '',
  legal_name: '',
  commercial_name: '',
  country_code: 'CL',
  tax_id: '',
  industry: '',
  phone: '',
  website: '',
  company_size: '',
  password: '',
  password_confirm: '',
  accepted_terms: false,
};

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
    };
  }
}

function isFreeMail(email: string) {
  const at = email.toLowerCase().trim().lastIndexOf('@');
  if (at < 0) return false;
  return FREE_MAIL.has(email.toLowerCase().trim().slice(at + 1));
}

function passwordIssues(password: string, email: string, t: (k: string) => string) {
  if (password.length < 10) return t('errPasswordLen');
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) return t('errPasswordComplexity');
  if (email && password.toLowerCase() === email.toLowerCase()) return t('errPasswordEmail');
  return '';
}

export default function RegisterForm() {
  const t = useTranslations('registerPage');
  const locale = useLocale();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [options, setOptions] = useState<OptionsPayload | null>(null);
  const [optionsError, setOptionsError] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [taxError, setTaxError] = useState('');
  const [taxTouched, setTaxTouched] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [busy, setBusy] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const countryNames = useMemo(() => {
    try {
      return new Intl.DisplayNames([locale], { type: 'region' });
    } catch {
      return new Intl.DisplayNames(['es'], { type: 'region' });
    }
  }, [locale]);

  const sortedCountries = useMemo(() => {
    const list = options?.countries ?? [];
    return [...list].sort((a, b) => {
      const na = countryNames.of(a.code) || a.code;
      const nb = countryNames.of(b.code) || b.code;
      return na.localeCompare(nb, locale);
    });
  }, [options, countryNames, locale]);

  const selectedCountry = sortedCountries.find((c) => c.code === form.country_code) || options?.countries.find((c) => c.code === form.country_code);

  const taxHint = useMemo(() => {
    const example = selectedCountry?.tax_id_placeholder || (form.country_code === 'CL' ? '12.345.678-5' : 'ABC123');
    const label = selectedCountry?.tax_id_label || t('taxId');
    if (form.country_code === 'CL') return t('taxHintCL', { example });
    return t('taxHint', { label, example });
  }, [form.country_code, selectedCountry, t]);

  const set = (patch: Partial<FormState>) => setForm((prev) => ({ ...prev, ...patch }));

  const checkTax = (country: string, value: string, showEmpty = false) => {
    const code = validateTaxID(country, value);
    if (code === 'required' && !showEmpty) {
      setTaxError('');
      return code;
    }
    setTaxError(taxErrorMessage(code, t));
    return code;
  };

  useEffect(() => {
    let cancelled = false;
    setOptionsError('');
    fetch(`${API_URL}/v2/public/signup/options?locale=${encodeURIComponent(locale)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('options');
        return res.json() as Promise<OptionsPayload>;
      })
      .then((data) => {
        if (!cancelled) setOptions(data);
      })
      .catch(() => {
        if (!cancelled) setOptionsError(t('errOptions'));
      });
    return () => {
      cancelled = true;
    };
  }, [locale, t]);

  const renderTurnstile = useCallback(() => {
    if (!TURNSTILE_SITE_KEY || !widgetRef.current || !window.turnstile) return;
    if (widgetId.current) {
      window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    }
    widgetId.current = window.turnstile.render(widgetRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token: string) => setTurnstileToken(token),
      'expired-callback': () => setTurnstileToken(''),
      'error-callback': () => setTurnstileToken(''),
    });
  }, []);

  useEffect(() => {
    if (step !== 2 || !TURNSTILE_SITE_KEY) return;
    if (window.turnstile) {
      renderTurnstile();
      return;
    }
    const existing = document.querySelector('script[data-emverax-turnstile]');
    if (existing) {
      existing.addEventListener('load', renderTurnstile);
      return () => existing.removeEventListener('load', renderTurnstile);
    }
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.dataset.emveraxTurnstile = '1';
    script.addEventListener('load', renderTurnstile);
    document.head.appendChild(script);
    return () => script.removeEventListener('load', renderTurnstile);
  }, [step, renderTurnstile]);

  const validateStep1 = () => {
    if (form.contact_name.trim().length < 2) return t('errContact');
    if (!form.email.includes('@')) return t('errEmail');
    if (isFreeMail(form.email)) return t('errFreeMail');
    if (form.legal_name.trim().length < 2) return t('errLegal');
    if (form.commercial_name.trim().length < 2) return t('errCommercial');
    if (!form.country_code) return t('errCountry');
    const taxCode = checkTax(form.country_code, form.tax_id, true);
    setTaxTouched(true);
    if (taxCode !== 'ok') return taxErrorMessage(taxCode, t);
    if (!form.industry) return t('errIndustry');
    if (!form.company_size) return t('errSize');
    const digits = (form.phone.match(/\d/g) || []).length;
    if (digits < 8) return t('errPhone');
    return '';
  };

  const goStep2 = (e: FormEvent) => {
    e.preventDefault();
    const err = validateStep1();
    if (err) {
      setFieldError(err);
      return;
    }
    setFieldError('');
    setTaxError('');
    setStep(2);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const step1 = validateStep1();
    if (step1) {
      setFieldError(step1);
      setStep(1);
      return;
    }
    const pwd = passwordIssues(form.password, form.email, t);
    setPasswordError(pwd);
    if (pwd) {
      setFieldError(pwd);
      return;
    }
    if (form.password !== form.password_confirm) {
      setConfirmError(t('errPasswordMatch'));
      setFieldError(t('errPasswordMatch'));
      return;
    }
    setConfirmError('');
    if (!form.accepted_terms) {
      setFieldError(t('errTerms'));
      return;
    }
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setFieldError(t('errCaptcha'));
      return;
    }
    setBusy(true);
    setFieldError('');
    try {
      const res = await fetch(`${API_URL}/v2/public/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          contact_name: form.contact_name.trim(),
          email: form.email.trim(),
          legal_name: form.legal_name.trim(),
          commercial_name: form.commercial_name.trim(),
          country_code: form.country_code,
          tax_id: form.tax_id.trim(),
          industry: form.industry,
          phone: form.phone.trim(),
          website: form.website.trim(),
          company_size: form.company_size,
          password: form.password,
          accepted_terms: true,
          turnstile_token: turnstileToken,
        }),
      });
      const raw = await res.text();
      let data: { message?: string; error?: unknown; login_url?: string } = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = { message: raw };
      }
      if (!res.ok) {
        const rawMsg = typeof data.message === 'string' && data.message
          ? data.message
          : typeof data.error === 'string' && data.error
            ? data.error
            : raw || t('errGeneric');
        const msg = publicSignupError(rawMsg, t);
        if (isTaxSignupError(rawMsg) || isTaxSignupError(msg)) {
          setTaxTouched(true);
          setTaxError(msg);
          setFieldError(msg);
          setStep(1);
        } else {
          setFieldError(msg);
        }
        if (window.turnstile) window.turnstile.reset(widgetId.current || undefined);
        setTurnstileToken('');
        return;
      }
      const login = typeof data.login_url === 'string' && data.login_url ? data.login_url : DASH_LOGIN_URL;
      const sep = login.includes('?') ? '&' : '?';
      window.location.assign(`${login}${sep}registered=1`);
    } catch {
      setFieldError(t('errNetwork'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto w-full">
      <ol className="mb-4 grid grid-cols-2 gap-2 text-sm" aria-label={t('stepsLabel')}>
        <li className={`rounded-lg px-3 py-1.5 ring-1 ${step === 1 ? 'bg-primary text-white ring-primary' : 'bg-white text-gray-700 ring-gray-200'}`}>
          <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">{t('step')} 1 · </span>
          {t('stepCompany')}
        </li>
        <li className={`rounded-lg px-3 py-1.5 ring-1 ${step === 2 ? 'bg-primary text-white ring-primary' : 'bg-white text-gray-700 ring-gray-200'}`}>
          <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">{t('step')} 2 · </span>
          {t('stepPassword')}
        </li>
      </ol>

      {optionsError && (
        <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-800" role="alert">
          {optionsError}
        </p>
      )}
      {fieldError && (
        <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-800" role="alert">
          {fieldError}
        </p>
      )}

      {step === 1 ? (
        <form className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2" onSubmit={goStep2} noValidate>
          <Field label={t('contactName')} htmlFor="contact_name">
            <input id="contact_name" className={inputClass} autoComplete="name" required value={form.contact_name} onChange={(e) => set({ contact_name: e.target.value })} />
          </Field>
          <Field label={t('email')} htmlFor="email">
            <input id="email" type="email" className={inputClass} autoComplete="email" required title={t('emailHint')} value={form.email} onChange={(e) => set({ email: e.target.value })} placeholder="nombre@empresa.com" />
          </Field>
          <Field label={t('legalName')} htmlFor="legal_name">
            <input id="legal_name" className={inputClass} autoComplete="organization" required value={form.legal_name} onChange={(e) => set({ legal_name: e.target.value })} />
          </Field>
          <Field label={t('commercialName')} htmlFor="commercial_name">
            <input id="commercial_name" className={inputClass} required value={form.commercial_name} onChange={(e) => set({ commercial_name: e.target.value })} />
          </Field>
          <Field label={t('country')} htmlFor="country_code">
            <select
              id="country_code"
              className={inputClass}
              required
              value={form.country_code}
              onChange={(e) => {
                set({ country_code: e.target.value, tax_id: '' });
                setTaxError('');
                setTaxTouched(false);
              }}
            >
              {sortedCountries.map((c) => (
                <option key={c.code} value={c.code}>
                  {countryNames.of(c.code) || c.code}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label={selectedCountry?.tax_id_label || t('taxId')}
            htmlFor="tax_id"
            hint={taxHint}
            error={taxTouched ? taxError : ''}
          >
            <input
              id="tax_id"
              className={taxTouched && taxError ? invalidInputClass : inputClass}
              required
              aria-invalid={taxTouched && Boolean(taxError)}
              aria-describedby="tax_id_hint"
              value={form.tax_id}
              onChange={(e) => {
                const value = e.target.value;
                set({ tax_id: value });
                if (taxTouched || looksCompleteTaxID(form.country_code, value)) {
                  checkTax(form.country_code, value);
                } else {
                  setTaxError('');
                }
              }}
              onBlur={() => {
                setTaxTouched(true);
                checkTax(form.country_code, form.tax_id, true);
              }}
              placeholder={selectedCountry?.tax_id_placeholder || ''}
            />
          </Field>
          <Field label={t('industry')} htmlFor="industry">
            <select id="industry" className={inputClass} required value={form.industry} onChange={(e) => set({ industry: e.target.value })}>
              <option value="">{t('selectPlaceholder')}</option>
              {(options?.industries ?? []).map((i) => (
                <option key={i.code} value={i.code}>{i.label}</option>
              ))}
            </select>
          </Field>
          <Field label={t('phone')} htmlFor="phone">
            <input id="phone" type="tel" className={inputClass} autoComplete="tel" required value={form.phone} onChange={(e) => set({ phone: e.target.value })} placeholder="+56 9 1234 5678" />
          </Field>
          <Field label={t('website')} htmlFor="website" optional>
            <input id="website" type="text" className={inputClass} autoComplete="url" value={form.website} onChange={(e) => set({ website: e.target.value })} placeholder="https://" />
          </Field>
          <Field label={t('companySize')} htmlFor="company_size">
            <select id="company_size" className={inputClass} required value={form.company_size} onChange={(e) => set({ company_size: e.target.value })}>
              <option value="">{t('selectPlaceholder')}</option>
              {(options?.sizes ?? []).map((s) => (
                <option key={s.code} value={s.code}>{s.label}</option>
              ))}
            </select>
          </Field>
          <button type="submit" className="sm:col-span-2 h-10 w-full rounded-lg bg-primary px-3.5 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            {t('continue')}
          </button>
        </form>
      ) : (
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2" onSubmit={submit} noValidate>
          <p className="sm:col-span-2 text-sm text-gray-600">{t('passwordIntro')}</p>
          <Field label={t('password')} htmlFor="password" hint={t('passwordHint')} error={passwordError}>
            <PasswordField
              id="password"
              invalid={Boolean(passwordError)}
              value={form.password}
              onChange={(value) => {
                set({ password: value });
                setPasswordError(value ? passwordIssues(value, form.email, t) : '');
                if (form.password_confirm) {
                  setConfirmError(value !== form.password_confirm ? t('errPasswordMatch') : '');
                }
              }}
              required
              revealLabel={t('showPassword')}
              hideLabel={t('hidePassword')}
            />
          </Field>
          <Field label={t('passwordConfirm')} htmlFor="password_confirm" error={confirmError}>
            <PasswordField
              id="password_confirm"
              invalid={Boolean(confirmError)}
              value={form.password_confirm}
              onChange={(value) => {
                set({ password_confirm: value });
                setConfirmError(value && value !== form.password ? t('errPasswordMatch') : '');
              }}
              required
              revealLabel={t('showPassword')}
              hideLabel={t('hidePassword')}
            />
          </Field>
          <label className="sm:col-span-2 flex items-start gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              checked={form.accepted_terms}
              onChange={(e) => set({ accepted_terms: e.target.checked })}
            />
            <span>
              {t('termsPrefix')}{' '}
              <Link href="/privacy" className="font-semibold text-primary hover:underline">{t('privacyLink')}</Link>
              {t('termsJoin')}
              <Link href="/terms" className="font-semibold text-primary hover:underline">{t('termsLink')}</Link>.
            </span>
          </label>
          {TURNSTILE_SITE_KEY ? <div ref={widgetRef} className="sm:col-span-2 min-h-[65px]" /> : null}
          <div className="sm:col-span-2 flex gap-3">
            <button type="button" onClick={() => { setFieldError(''); setStep(1); }} className="h-10 flex-1 rounded-lg px-3.5 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {t('back')}
            </button>
            <button type="submit" disabled={busy} className="h-10 flex-[2] rounded-lg bg-primary px-3.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60">
              {busy ? t('submitting') : t('submit')}
            </button>
          </div>
        </form>
      )}

      <p className="mt-4 text-center text-sm text-gray-600">
        {t('hasAccount')}{' '}
        <a href={DASH_LOGIN_URL} className="font-semibold text-primary hover:underline">{t('signIn')}</a>
      </p>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  const t = useTranslations('registerPage');
  return (
    <div className="min-w-0">
      <label htmlFor={htmlFor} className="block text-xs font-semibold leading-5 text-gray-900">
        {label}
        {optional ? <span className="ml-1 font-normal text-gray-500">({t('optional')})</span> : null}
      </label>
      <div className="mt-1">{children}</div>
      {hint ? <p id={`${htmlFor}_hint`} className="mt-1 line-clamp-1 text-[11px] leading-4 text-gray-500">{hint}</p> : null}
      {error ? <p className="mt-1 text-xs text-red-700" role="alert">{error}</p> : null}
    </div>
  );
}
