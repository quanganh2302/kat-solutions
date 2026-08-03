export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const localizedPath = (locale: Locale, path: string) => `/${locale}${path === "/" ? "" : path}`;
