import { notFound } from "next/navigation";
import { Home } from "@/app/page";
import { isLocale, locales } from "@/lib/i18n";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Home locale={locale} />;
}
