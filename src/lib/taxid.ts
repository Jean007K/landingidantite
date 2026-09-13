const UNICODE_DASHES = /[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g;

function normalizeDashes(raw: string) {
  return raw.replace(UNICODE_DASHES, '-');
}

function normalizeTaxID(country: string, raw: string) {
  const code = country.toUpperCase().trim();
  let s = normalizeDashes(raw.toUpperCase().trim().replace(/\s+/g, ''));
  if (code === 'CL') return s.replace(/\./g, '');
  return s.replace(/[^A-Z0-9]/g, '');
}

function chileParts(raw: string): { body: string; dv: string } | null {
  let s = normalizeDashes(raw.toUpperCase().replace(/[.\s]/g, ''));
  let body = '';
  let dv = '';
  const dash = s.lastIndexOf('-');
  if (dash > 0) {
    body = s.slice(0, dash);
    dv = s.slice(dash + 1);
  } else if (s.length >= 2) {
    body = s.slice(0, -1);
    dv = s.slice(-1);
  } else {
    return null;
  }
  if (body.length < 7 || body.length > 8 || dv.length !== 1) return null;
  if (!/^\d+$/.test(body)) return null;
  return { body, dv };
}

function chileExpectedDV(body: string) {
  if (!/^\d{7,8}$/.test(body)) return '';
  let sum = 0;
  let multi = 2;
  for (let i = body.length - 1; i >= 0; i -= 1) {
    sum += Number(body[i]) * multi;
    multi += 1;
    if (multi > 7) multi = 2;
  }
  const rest = 11 - (sum % 11);
  if (rest === 11) return '0';
  if (rest === 10) return 'K';
  return String(rest);
}

function formatChileBody(body: string) {
  const groups: string[] = [];
  for (let i = body.length; i > 0; i -= 3) {
    groups.unshift(body.slice(Math.max(0, i - 3), i));
  }
  return groups.join('.');
}

function validChileRUT(raw: string) {
  const parts = chileParts(raw);
  if (!parts) return false;
  return parts.dv === chileExpectedDV(parts.body);
}

export function formatChileRUT(raw: string) {
  const parts = chileParts(raw);
  if (!parts) return raw.trim();
  return `${formatChileBody(parts.body)}-${parts.dv}`;
}

export function looksCompleteTaxID(country: string, raw: string) {
  const code = country.toUpperCase().trim();
  const s = normalizeDashes(raw.toUpperCase().replace(/[.\s]/g, ''));
  if (!s) return false;
  if (code === 'CL') {
    const dash = s.lastIndexOf('-');
    if (dash > 0) return dash >= 7;
    return s.length >= 8;
  }
  return normalizeTaxID(country, raw).length >= 3;
}

export type TaxIDCode = 'ok' | 'required' | 'cl' | 'cl-dv' | 'short' | 'long';

export function validateTaxID(country: string, raw: string): TaxIDCode {
  const norm = normalizeTaxID(country, raw);
  if (!norm) return 'required';
  if (country.toUpperCase().trim() === 'CL') {
    const parts = chileParts(norm);
    if (!parts) return 'cl';
    return parts.dv === chileExpectedDV(parts.body) ? 'ok' : 'cl-dv';
  }
  if (norm.length < 3) return 'short';
  if (norm.length > 32) return 'long';
  return 'ok';
}

export function taxErrorMessage(
  code: TaxIDCode,
  t: (key: string, values?: Record<string, string>) => string,
  raw = '',
) {
  if (code === 'ok') return '';
  if (code === 'cl-dv') {
    const parts = chileParts(raw);
    const expected = parts ? chileExpectedDV(parts.body) : '';
    if (parts && expected) {
      return t('errTaxCLDigit', {
        body: formatChileBody(parts.body),
        expected,
        given: parts.dv,
      });
    }
    return t('errTaxCL');
  }
  if (code === 'cl') return t('errTaxCL');
  if (code === 'short') return t('errTaxShort');
  if (code === 'long') return t('errTaxLong');
  return t('errTax');
}
