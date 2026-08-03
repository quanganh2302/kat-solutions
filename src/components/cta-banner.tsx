import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

const copy = {
  vi: { first: "Sẵn sàng bắt đầu", second: "bước chuyển đổi đầu tiên?", contact: "Liên hệ" },
  en: { first: "Ready to take", second: "the first step forward?", contact: "Contact us" },
};

const CtaBanner = ({ locale = "vi" }: { locale?: Locale }) => (
  <section className="relative h-[270px] overflow-hidden bg-[radial-gradient(ellipse_at_center,_#ffd600_0%,_#ffd912_14.5%,_#ffdb24_29%,_#ffe047_58%,_#ffe563_68.5%,_#ffe980_79%,_#fff2b8_100%)] sm:h-[390px]">
    <p aria-hidden className="display pointer-events-none absolute left-1/2 top-[105px] w-[430px] -translate-x-1/2 text-center text-[160px] leading-[167px] text-white opacity-25 sm:top-[140px] sm:w-[2168px] sm:text-[248px] sm:leading-[250px] sm:opacity-28">
      <span className="sm:hidden">KAT</span><span className="hidden sm:inline">KAT SOLUTIONS</span>
    </p>
    <div className="relative flex h-full flex-col items-center justify-center gap-1.5 text-center sm:block">
      <h2 className="display w-[330px] text-[28px] font-normal leading-[35px] text-white sm:absolute sm:left-1/2 sm:top-[82px] sm:w-[800px] sm:-translate-x-1/2 sm:text-[52px] sm:leading-[60px]">
        {copy[locale].first}
      </h2>
      <p className="display w-[330px] text-[28px] font-normal leading-[35px] text-[#1a212d] sm:absolute sm:left-1/2 sm:top-[142px] sm:w-[800px] sm:-translate-x-1/2 sm:text-[52px] sm:leading-[60px]">
        {copy[locale].second}
      </p>
      <Link href={localizedPath(locale, "/contact")} className="button-hover focus-ring mt-1 inline-flex h-8 items-center justify-center gap-[7px] rounded-[5px] bg-white px-3 text-sm font-medium leading-[18px] text-[#4b5362] sm:absolute sm:left-1/2 sm:top-[220px] sm:mt-0 sm:-translate-x-1/2">
        <span aria-hidden>›</span><span>{copy[locale].contact}</span>
      </Link>
    </div>
  </section>
);

export default CtaBanner;
