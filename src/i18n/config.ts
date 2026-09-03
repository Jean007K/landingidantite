export const locales = ['es', 'en', 'pt', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeLabels: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
  fr: 'FR',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
