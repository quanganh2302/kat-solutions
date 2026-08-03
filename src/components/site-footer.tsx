import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

const content = {
  vi: { links: [["Trang chủ", "/"], ["Dự án", "/projects"], ["Về chúng tôi", "/about"], ["Liên hệ", "/contact"]], capabilities: ["ERP", "Web Platform", "Computer Vision"], legal: "Điều khoản   Quyền riêng tư" },
  en: { links: [["Home", "/"], ["Projects", "/projects"], ["About us", "/about"], ["Contact", "/contact"]], capabilities: ["ERP", "Web Platform", "Computer Vision"], legal: "Terms   Privacy" },
} as const;

const SiteFooter = ({ locale = "vi" }: { locale?: Locale }) => (
  <footer className="h-[480px] bg-white px-5 py-5 text-[#555d6a] sm:h-[300px] sm:px-0 sm:py-0">
    <div className="relative mx-auto h-full max-w-[2048px] text-[13px] leading-[21px] sm:leading-[18px]">
      <img src="/images/kat-logo-dark.svg" alt="KAT Solutions" className="h-[23.6px] w-auto sm:hidden" />

      <div className="mt-7 grid min-h-[110px] grid-cols-[130px_1fr] gap-5 sm:absolute sm:left-[32.2%] sm:top-[74px] sm:mt-0 sm:min-h-0 sm:grid-cols-[90px_130px] sm:gap-4">
        <nav className="grid content-start" aria-label="Điều hướng chân trang">
          {content[locale].links.map(([label, href]) => <Link key={href} href={localizedPath(locale, href)} className="text-link">{label}</Link>)}
        </nav>
        <div className="grid content-start">
          {content[locale].capabilities.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <div className="mt-7 font-medium sm:absolute sm:left-[65%] sm:top-[78px] sm:mt-0 sm:flex sm:gap-3" aria-label="Kênh mạng xã hội">
        <span>in</span><span className="ml-3 sm:ml-0">▶</span><span className="ml-3 sm:ml-0">✉</span>
      </div>

      <div className="absolute left-0 right-0 top-[258px] border-t border-[#d8ddea] sm:top-[220px]" />
      <div className="absolute left-0 right-0 top-[279px] flex flex-col gap-2 text-xs leading-5 text-[#68707d] sm:top-[256px] sm:flex-row sm:items-center sm:justify-between sm:px-[32.1%]">
        <span className="order-2 sm:order-1">© 2026 KAT SOLUTIONS</span>
        <span className="order-1 sm:order-2">{content[locale].legal}&nbsp;&nbsp; <Link href={localizedPath("vi", "/")} className={`text-link ${locale === "vi" ? "text-[#c69f00]" : ""}`}>VI</Link>&nbsp;&nbsp; <Link href={localizedPath("en", "/")} className={`text-link ${locale === "en" ? "text-[#c69f00]" : ""}`}>EN</Link></span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
