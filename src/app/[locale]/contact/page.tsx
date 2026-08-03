import { notFound } from "next/navigation";
import { Contact } from "@/app/contact/page";
import { isLocale, locales } from "@/lib/i18n";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function LocalizedContact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Contact locale={locale} />;
}
