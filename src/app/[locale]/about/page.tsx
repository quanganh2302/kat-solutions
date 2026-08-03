import { notFound } from "next/navigation";
import { About } from "@/app/about/page";
import { isLocale, locales } from "@/lib/i18n";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function LocalizedAbout({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <About locale={locale} />;
}
