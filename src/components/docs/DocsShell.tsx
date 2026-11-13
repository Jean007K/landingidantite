'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Menu,
  Search,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  docsNavigation,
  docsSearchIndex,
  flatDocsNavigation,
  type DocPage,
} from '@/lib/docs';
import { DASH_LOGIN_URL } from '@/lib/urls';

function hrefFor(slug: string) {
  return slug ? '/docs/' + slug : '/docs';
}

function NavTree({
  activeSlug,
  onNavigate,
}: {
  activeSlug: string;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Navegación de documentación" className="space-y-7">
      {docsNavigation.map((group) => (
        <div key={group.title}>
          <h2 className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
            {group.title}
          </h2>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const active = item.slug === activeSlug;
              return (
                <li key={item.slug}>
                  <Link
                    href={hrefFor(item.slug)}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className={
                      'block rounded-lg px-3 py-2 text-[14px] leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB] ' +
                      (active
                        ? 'bg-[#EAF1FF] font-semibold text-[#003CCF]'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950')
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function DocsShell({
  page,
  children,
}: {
  page: DocPage;
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const docsTopBarRef = useRef<HTMLDivElement>(null);
  const docsGridRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
        window.setTimeout(() => searchRef.current?.focus(), 0);
      }
      if (event.key === 'Escape') {
        setSearchOpen(false);
        setMobileOpen(false);
        searchRef.current?.blur();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement && document.activeElement !== document.body
        ? document.activeElement
        : mobileTriggerRef.current;

    const background = [
      document.querySelector<HTMLElement>('body > header'),
      document.querySelector<HTMLElement>('body > footer'),
      docsTopBarRef.current,
      docsGridRef.current,
    ].filter((element): element is HTMLElement => Boolean(element));

    background.forEach((element) => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    function trapFocus(event: KeyboardEvent) {
      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) {
        event.preventDefault();
        drawerRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !drawerRef.current.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener('keydown', trapFocus);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', trapFocus);
      background.forEach((element) => {
        element.removeAttribute('inert');
        element.removeAttribute('aria-hidden');
      });
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [mobileOpen]);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('es');
    if (!normalized) return docsSearchIndex.slice(0, 6);
    return docsSearchIndex
      .filter((item) =>
        [item.title, item.description, item.category, ...item.headings]
          .join(' ')
          .toLocaleLowerCase('es')
          .includes(normalized),
      )
      .slice(0, 7);
  }, [query]);

  const currentIndex = flatDocsNavigation.findIndex((item) => item.slug === page.slug);
  const previous = currentIndex > 0 ? flatDocsNavigation[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < flatDocsNavigation.length - 1
    ? flatDocsNavigation[currentIndex + 1]
    : null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white text-slate-950 selection:bg-[#CFE0FF] selection:text-[#062B87]">
      <div ref={docsTopBarRef} className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <button
            ref={mobileTriggerRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB] lg:hidden"
            aria-label="Abrir navegación"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
          <Link href="/docs" className="flex shrink-0 items-center gap-2 font-semibold text-slate-950">
            <BookOpen className="h-4 w-4 text-[#0046FB]" aria-hidden="true" />
            <span>Documentación</span>
          </Link>
          <span className="hidden shrink-0 whitespace-nowrap rounded-md bg-[#EAF1FF] px-2 py-1 text-[11px] font-bold text-[#003CCF] sm:inline">API v2</span>

          <div className="relative ml-auto min-w-0 w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <input
              ref={searchRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              placeholder="Buscar"
              aria-label="Buscar en la documentación"
              className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-14 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-600 focus:border-[#6B94FF] focus:bg-white focus:ring-2 focus:ring-[#D6E2FF]"
            />
            <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-slate-300 bg-white px-1.5 py-0.5 font-sans text-[10px] font-semibold text-slate-600 sm:block">
              Ctrl K
            </kbd>
            {searchOpen && (
              <div className="absolute right-0 top-11 w-full min-w-[290px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_50px_-18px_rgba(15,23,42,0.35)]">
                {results.length > 0 ? (
                  <ul className="max-h-[360px] overflow-y-auto p-2">
                    {results.map((result) => (
                      <li key={result.href}>
                        <Link
                          href={result.href}
                          onClick={() => {
                            setSearchOpen(false);
                            setQuery('');
                          }}
                          className="block rounded-lg px-3 py-2.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB]"
                        >
                          <span className="block text-xs font-medium text-[#0046FB]">{result.category}</span>
                          <span className="mt-0.5 block text-sm font-semibold text-slate-900">{result.title}</span>
                          <span className="mt-0.5 line-clamp-1 block text-xs text-slate-500">{result.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-6 text-center text-sm text-slate-500">No encontramos resultados.</p>
                )}
              </div>
            )}
          </div>

          <a
            href={DASH_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#0046FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB] focus-visible:ring-offset-4 lg:inline-flex"
          >
            Ir al panel
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Navegación de documentación">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/35"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar navegación"
            tabIndex={-1}
          />
          <aside
            ref={drawerRef}
            tabIndex={-1}
            className="absolute inset-y-0 left-0 w-[min(88vw,340px)] overflow-y-auto bg-white px-5 pb-8 pt-5 shadow-2xl"
          >
            <div className="mb-7 flex items-center justify-between">
              <span className="flex items-center gap-2 font-semibold">
                <BookOpen className="h-4 w-4 text-[#0046FB]" aria-hidden="true" />
                Documentación
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB]"
                aria-label="Cerrar navegación"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <NavTree activeSlug={page.slug} onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div ref={docsGridRef} className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_200px] lg:gap-10 xl:gap-12">
        <aside className="hidden border-r border-slate-200 px-5 py-9 lg:block 2xl:px-6">
          <div className="sticky top-[8.5rem] max-h-[calc(100vh-10rem)] overflow-y-auto pr-2 [scrollbar-color:#CBD5E1_transparent]">
            <NavTree activeSlug={page.slug} />
          </div>
        </aside>

        <div className="mx-auto min-w-0 w-full max-w-[800px] px-5 py-9 sm:px-8 lg:px-0 lg:py-12">
          <div className="mb-7 flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/docs" className="hover:text-[#0046FB]">Documentación</Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-700">{page.category}</span>
          </div>

          {children}

          <nav aria-label="Páginas anterior y siguiente" className="mt-10 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
            {previous ? (
              <Link
                href={hrefFor(previous.slug)}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-4 hover:border-blue-200 hover:bg-blue-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB]"
              >
                <ArrowLeft className="h-4 w-4 text-slate-400 group-hover:text-[#0046FB]" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-slate-500">Anterior</span>
                  <span className="mt-0.5 block text-sm font-semibold text-slate-900">{previous.title}</span>
                </span>
              </Link>
            ) : <span />}
            {next && (
              <Link
                href={hrefFor(next.slug)}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-4 text-right hover:border-blue-200 hover:bg-blue-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB]"
              >
                <span className="ml-auto">
                  <span className="block text-xs text-slate-500">Siguiente</span>
                  <span className="mt-0.5 block text-sm font-semibold text-slate-900">{next.title}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#0046FB]" aria-hidden="true" />
              </Link>
            )}
          </nav>

          <div className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-500">
            ¿Necesitas ayuda?{' '}
            <a className="font-semibold text-[#0046FB] underline decoration-blue-200 underline-offset-4 hover:decoration-[#0046FB]" href="mailto:support@emverax.com">
              support@emverax.com
            </a>
          </div>
        </div>

        <aside className="hidden py-12 pr-6 xl:block">
          <div className="sticky top-[8.5rem]">
            <h2 className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500">En esta página</h2>
            <ul className="mt-4 space-y-3 border-l border-slate-200 pl-4">
              {page.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={'#' + section.id}
                    className="text-[13px] leading-5 text-slate-500 hover:text-[#0046FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0046FB]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}