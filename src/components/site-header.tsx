import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

const navigation = {
  vi: [["Trang chủ", "/", "home"], ["Dự án", "/projects", "projects"], ["Về chúng tôi", "/about", "about"], ["Liên hệ", "/contact", "contact"]],
  en: [["Home", "/", "home"], ["Projects", "/projects", "projects"], ["About us", "/about", "about"], ["Contact", "/contact", "contact"]],
} as const;

const activePaths: Record<string, string> = { home: "/", projects: "/projects", about: "/about", contact: "/contact" };

const SiteHeader = ({ active, locale = "vi" }: { active: string; locale?: Locale }) => {
  const currentPath = activePaths[active] ?? "/";

  return <header className="sticky top-0 z-50 h-16 w-full border-b border-[#202944] bg-[#080a12]">
    <div className="flex h-16 w-full items-center justify-between gap-6 px-5 sm:pl-4 sm:pr-5">
      <Link href={localizedPath(locale, "/")} className="focus-ring shrink-0" aria-label="KAT Solutions">
        <img src="/images/kat-logo-dark.svg" alt="KAT Solutions" className="h-[21.75px] w-24 sm:h-[34.9px] sm:w-[154px]" />
      </Link>
      <nav className="hidden shrink-0 items-center gap-3 md:flex" aria-label={locale === "vi" ? "Điều hướng chính" : "Primary navigation"}>
        {navigation[locale].map(([label, href, key]) => <Link key={href} href={localizedPath(locale, href)} aria-current={active === key ? "page" : undefined} className={`focus-ring flex h-8 items-center rounded-lg px-1 text-[14.4px] tracking-[.36px] transition-colors duration-300 hover:text-[#fdda0d] ${active === key ? "text-[#fdda0d]" : "text-[#535a79]"}`}>{label}</Link>)}
        <div className="flex h-8 overflow-hidden rounded-[5px] border border-[#4b536b]" aria-label={locale === "vi" ? "Chọn ngôn ngữ" : "Choose language"}>
          {(["vi", "en"] as const).map((item) => <Link key={item} href={localizedPath(item, currentPath)} aria-current={locale === item ? "true" : undefined} className={`focus-ring flex h-full w-[35px] items-center justify-center text-[12px] font-medium transition-colors duration-300 ${locale === item ? "bg-[#fdda0d] text-[#161927]" : "bg-transparent text-[#aab4d6] hover:bg-[#202944] hover:text-[#fdda0d]"}`}>{item.toUpperCase()}</Link>)}
        </div>
      </nav>
      <details className="nav-details relative md:hidden">
        <summary className="focus-ring cursor-pointer rounded-md border border-[#3e4766] px-3 py-1.5 text-sm text-[#d0d9fb]">Menu</summary>
        <nav className="absolute right-0 mt-2 grid w-52 gap-1 rounded-xl border border-[#34405f] bg-[#0e111d] p-2 shadow-2xl" aria-label={locale === "vi" ? "Điều hướng di động" : "Mobile navigation"}>
          {navigation[locale].map(([label, href, key]) => <Link key={href} href={localizedPath(locale, href)} className={`rounded-lg px-3 py-2 text-sm transition-colors duration-300 hover:bg-[#202944] hover:text-[#fdda0d] ${active === key ? "bg-[#202944] text-[#fdda0d]" : "text-[#d0d9fb]"}`}>{label}</Link>)}
          <div className="mt-1 grid grid-cols-2 gap-1 border-t border-[#34405f] pt-2">{(["vi", "en"] as const).map((item) => <Link key={item} href={localizedPath(item, currentPath)} className={`rounded-lg px-3 py-2 text-center text-xs font-medium transition-colors duration-300 ${locale === item ? "bg-[#fdda0d] text-[#161927]" : "text-[#d0d9fb] hover:bg-[#202944] hover:text-[#fdda0d]"}`}>{item.toUpperCase()}</Link>)}</div>
        </nav>
      </details>
    </div>
  </header>;
};

export default SiteHeader;
