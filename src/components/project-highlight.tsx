import type { Locale } from "@/lib/i18n";

const copy = {
  vi: { title: "KAT Solutions kết nối ERP với dữ liệu nhà máy", body: "Dữ liệu sản xuất, quy trình kinh doanh và cảnh báo từ AI được đồng bộ trong một không gian vận hành thống nhất." },
  en: { title: "KAT Solutions connects ERP with factory data", body: "Production data, business workflows, and AI alerts are synchronized in one connected operating space." },
};

const ProjectHighlight = ({ locale = "vi" }: { locale?: Locale }) => (
  <article className="absolute left-1/2 top-[546px] z-10 hidden h-[180px] w-[724px] -translate-x-1/2 overflow-hidden rounded-xl bg-[#0e111d] text-left shadow-[0_10px_24px_rgba(0,0,0,.42)] sm:block">
    <div className="absolute inset-y-0 left-0 w-[270px]">
      <img src="/images/home-highlight.png" alt="Bảng điều khiển và dữ liệu dây chuyền nhà máy" className="h-full w-full object-cover" />
    </div>
    <h3 className="display absolute left-[310px] top-7 w-[390px] text-[22px] font-semibold leading-[29px] text-[#cfd9fa]">
      {copy[locale].title}
    </h3>
    <p className="absolute left-[310px] top-[100px] w-[378px] text-[13px] leading-[19px] text-[#a3b0d1]">
      {copy[locale].body}
    </p>
  </article>
);

export default ProjectHighlight;
