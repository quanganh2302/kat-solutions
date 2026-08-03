import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

const copy = {
  vi: { title: "Hệ thống phía sau mọi vận hành", body: "KAT Solutions kết nối ERP, CRM, Web và Computer Vision trên cùng một luồng dữ liệu — giúp doanh nghiệp theo dõi trạng thái, tự động hóa quy trình và phối hợp theo thời gian thực.", button: "Năng lực", benefits: [["ERP + CRM", "Quản trị hợp nhất"], ["AI Vision", "Phân tích trực quan"], ["Web 24/7", "Truy cập mọi thiết bị"]] },
  en: { title: "The system behind every operation", body: "KAT Solutions connects ERP, CRM, Web, and Computer Vision through one data flow—helping businesses monitor status, automate workflows, and coordinate in real time.", button: "Capabilities", benefits: [["ERP + CRM", "Unified management"], ["AI Vision", "Visual analysis"], ["Web 24/7", "Access on any device"]] },
} as const;

const ConnectedOperations = ({ locale = "vi" }: { locale?: Locale }) => (
  <article className="absolute left-5 right-5 top-[455px] z-10 h-[205px] overflow-hidden rounded-lg border border-[#3e445b] bg-[#080a12] p-[19px] text-left sm:left-1/2 sm:right-auto sm:top-[740px] sm:h-[286px] sm:w-[724px] sm:-translate-x-1/2 sm:rounded-xl sm:border-0 sm:bg-gradient-to-b sm:from-[#0e111d] sm:to-[#292e3d] sm:p-0 sm:shadow-[0_12px_24px_rgba(0,0,0,.45)]">
    <h3 className="display text-xl font-semibold leading-[27px] text-[#d0d9fb] sm:absolute sm:left-8 sm:top-6 sm:w-[450px] sm:text-2xl sm:leading-8">
      {copy[locale].title}
    </h3>
    <p className="mt-2 text-sm leading-[21px] text-[#aab4d6] sm:absolute sm:left-8 sm:top-[66px] sm:mt-0 sm:w-[500px] sm:text-[13px] sm:leading-[19px]">
      {copy[locale].body}
    </p>
    <Link href={localizedPath(locale, "/about")} className="button-hover focus-ring absolute right-8 top-6 hidden h-9 w-[164px] items-center rounded-[7px] border border-[#404d70] px-[11px] text-xs leading-4 text-[#a3b0d1] sm:flex">
      {copy[locale].button}&nbsp;&nbsp;→
    </Link>
    <div className="absolute bottom-5 left-[19px] right-[19px] flex justify-between text-xs font-medium leading-[19px] text-[#fdda0d] sm:bottom-6 sm:left-8 sm:right-8 sm:grid sm:grid-cols-3 sm:gap-[30px]">
      <span className="sm:hidden">ERP + CRM</span><span className="sm:hidden">AI / VISION</span><span className="sm:hidden">WEB 24/7</span>
      {copy[locale].benefits.map(([title, description]) => (
        <div key={title} className="hidden sm:block">
          <p className="text-xl font-semibold leading-[26px] text-[#ffd100]">{title}</p>
          <p className="mt-1 text-[11px] font-normal leading-4 text-[#a3b0d1]">{description}</p>
        </div>
      ))}
    </div>
  </article>
);

export default ConnectedOperations;
