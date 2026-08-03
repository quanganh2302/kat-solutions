import { notFound } from "next/navigation";
import { Projects } from "@/app/projects/page";
import { isLocale, locales } from "@/lib/i18n";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function LocalizedProjects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Projects locale={locale} />;
}
