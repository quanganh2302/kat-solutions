import Link from "next/link";
import ConnectedOperations from "@/components/connected-operations";
import CtaBanner from "@/components/cta-banner";
import ProjectHighlight from "@/components/project-highlight";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SolutionCarousel from "@/components/solution-carousel";
import { solutionCardsByLocale } from "@/content/site";
import { localizedPath, type Locale } from "@/lib/i18n";

const copy = {
  vi: {
    hero: "Từ một ý tưởng nhỏ.", heroSecond: "Đến những giá trị thành hình.", heroCaption: "KAT SOLUTIONS · TỪ Ý TƯỞNG ĐẾN GIÁ TRỊ HỮU HÌNH",
    network: "KAT Solutions hợp nhất ERP, CRM, AI, Computer Vision và nền tảng Web trong một kiến trúc vận hành chung — giúp dữ liệu, quy trình và đội ngũ luôn kết nối theo thời gian thực.", networkLink: "Hệ sinh thái KAT",
    partnershipTitle: <>Hơn cả công nghệ.<br />Đồng hành cùng chuyển đổi.</>, partnershipBody: "KAT Solutions đồng hành từ bước đi đầu tiên, biến nhu cầu thực tế thành sản phẩm có thể vận hành và phát triển lâu dài.",
    buildTitle: "KAT xây dựng cùng bạn", buildBody: "Chúng tôi phân tích, thiết kế và triển khai giải pháp trọn gói — từ thử nghiệm ban đầu đến hệ thống vận hành thực tế.", buildLink: "Trao đổi cùng KAT",
    growTitle: "Phát triển cùng đội ngũ", growBody: "KAT cung cấp nền tảng, kiến trúc và hỗ trợ kỹ thuật để đội ngũ của bạn chủ động mở rộng sản phẩm.", growLink: "Bắt đầu dự án",
    solutionsTitle: <>Hệ sinh thái giải pháp<br />cho từng bước chuyển đổi</>, solutionsBody: "Từ quản trị ERP, CRM và nền tảng Web đến AI, tự động hóa và Computer Vision — mỗi giải pháp đều bắt đầu từ nhu cầu thực tế của doanh nghiệp.",
  },
  en: {
    hero: "From a small idea.", heroSecond: "To lasting value.", heroCaption: "KAT SOLUTIONS · FROM IDEAS TO TANGIBLE VALUE",
    network: "KAT Solutions brings ERP, CRM, AI, Computer Vision, and Web platforms into one operating architecture—keeping data, workflows, and teams connected in real time.", networkLink: "KAT ecosystem",
    partnershipTitle: <>More than technology.<br />A partner in transformation.</>, partnershipBody: "KAT Solutions works with you from the first step, turning real-world needs into products that can operate and grow over time.",
    buildTitle: "KAT builds with you", buildBody: "We analyze, design, and deliver end-to-end solutions—from initial pilots to systems that support real operations.", buildLink: "Talk to KAT",
    growTitle: "Grow with your team", growBody: "KAT provides the platforms, architecture, and technical support your team needs to scale with confidence.", growLink: "Start a project",
    solutionsTitle: <>A solution ecosystem<br />for every step of transformation</>, solutionsBody: "From ERP, CRM, and Web platforms to AI, automation, and Computer Vision—every solution starts with a real business need.",
  },
} as const;

export const Home = ({ locale = "vi" }: { locale?: Locale }) => {
  const text = copy[locale];

  return <main>
    <SiteHeader active="home" locale={locale} />
    <section className="dark-grid relative isolate overflow-hidden sm:h-[1196px]">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[540px] overflow-hidden sm:h-[720px]">
        <div className="hero-reference-grid">
          <span className="hero-grid-beam hero-grid-beam-x hero-grid-beam-x-1" />
          <span className="hero-grid-beam hero-grid-beam-x hero-grid-beam-x-2" />
          <span className="hero-grid-beam hero-grid-beam-x hero-grid-beam-x-3" />
          <span className="hero-grid-beam hero-grid-beam-y hero-grid-beam-y-1" />
          <span className="hero-grid-beam hero-grid-beam-y hero-grid-beam-y-2" />
        </div>
      </div>
      <div className="site-shell relative z-10 flex min-h-[540px] flex-col items-center px-5 pt-20 text-center sm:h-[720px] sm:max-w-none sm:px-8 sm:pt-[120px]">
        <h1 className="display text-5xl font-medium leading-none sm:text-[80px] sm:leading-[96px]">
          <span className="block text-[#fdda0d]">Great Transformations</span>
          <span className="block text-[#d0d9fb]">Start Small</span>
        </h1>
        <p className="mt-8 text-base leading-7 text-[#d0d9fb] sm:mt-10 sm:text-xl sm:leading-7"><span className="block text-[#7c8cce]">{text.hero}</span><span>{text.heroSecond}</span></p>
        <div className="mt-10 flex w-full max-w-[1445px] flex-wrap justify-center gap-x-7 gap-y-3 text-xs tracking-wide text-[#aab4d6] sm:mt-[74px] sm:flex-nowrap sm:justify-between sm:text-base sm:leading-6">
          <span className="text-[#159ed9]">ERP</span><span>CRM</span><span>WEB PLATFORM</span><span>AI</span><span>COMPUTER VISION</span><span>AUTOMATION</span><span>DATA</span><span>INTEGRATION</span>
        </div>
      </div>
      <div data-testid="hero-video" className="relative z-10 grid h-[300px] w-full place-items-center bg-[linear-gradient(90deg,#041326_0%,#053840_48%,#05523d_100%),linear-gradient(180deg,#05060e_0%,rgba(5,6,14,0)_22%,rgba(5,6,14,0)_78%,rgba(5,6,14,.28)_100%)] px-5 text-center sm:absolute sm:inset-x-0 sm:top-[720px] sm:h-[476px]">
        <p className="display text-xl font-semibold tracking-wide text-[#d0d9fb] sm:text-2xl sm:leading-8">{text.heroCaption}</p>
      </div>
    </section>
    <section className="relative z-10 h-[700px] overflow-x-clip bg-[#03050a] sm:h-[990px]">
      <img src="/images/enterprise-network-raw.png" alt="KAT Solutions enterprise network" className="absolute inset-0 h-full w-full object-cover sm:hidden" />
      <img src="/images/enterprise-network-figma.png" alt="Sơ đồ hệ sinh thái giải pháp KAT" className="absolute left-1/2 top-[-140px] hidden h-[1130px] w-[2048px] max-w-none -translate-x-1/2 sm:block" />
      <div aria-hidden="true" className="hero-to-network-transition sm:hidden" />
      <p className="absolute left-5 top-6 z-10 w-[350px] text-[11px] font-medium leading-[18px] text-[#fdda0d] sm:hidden">{text.network}</p>
      <Link href={localizedPath(locale, "/projects")} aria-label={text.networkLink} className="button-hover focus-ring absolute left-[calc(50%+176px)] top-[30px] z-10 hidden h-11 w-[180px] rounded-[7px] sm:block sm:opacity-0 sm:hover:opacity-100 sm:hover:bg-[#101525]/80"><span className="sr-only">{text.networkLink}</span></Link>
      <ProjectHighlight locale={locale} />
      <ConnectedOperations locale={locale} />
    </section>
    <section className="bg-white py-18 text-[#1a212d] sm:py-24"><div className="site-shell"><div className="mx-auto max-w-3xl text-center"><h2 className="display text-3xl font-semibold sm:text-5xl">{text.partnershipTitle}</h2><p className="mt-5 text-base leading-7 text-[#343b49] sm:text-lg">{text.partnershipBody}</p></div><div className="relative mt-14 grid overflow-hidden rounded-xl border border-[#d9ddea] md:grid-cols-2"><span className="absolute left-1/2 top-0 hidden h-full border-l border-[#d9ddea] md:block" /><div className="p-7 sm:p-10"><h3 className="display text-2xl font-semibold">{text.buildTitle}</h3><p className="mt-4 max-w-lg leading-7 text-[#343b49]">{text.buildBody}</p><Link className="text-link focus-ring mt-6 inline-block font-medium" href={localizedPath(locale, "/contact")}>›&nbsp;&nbsp; {text.buildLink}</Link></div><div className="p-7 sm:p-10"><h3 className="display text-2xl font-semibold">{text.growTitle}</h3><p className="mt-4 max-w-lg leading-7 text-[#343b49]">{text.growBody}</p><Link className="text-link focus-ring mt-6 inline-block font-medium" href={localizedPath(locale, "/contact")}>›&nbsp;&nbsp; {text.growLink}</Link></div></div><div className="mx-auto mt-24 max-w-3xl text-center"><h2 className="display text-3xl font-semibold sm:text-5xl">{text.solutionsTitle}</h2><p className="mt-5 text-base leading-7 text-[#343b49] sm:text-lg">{text.solutionsBody}</p></div><SolutionCarousel cards={solutionCardsByLocale[locale]} locale={locale} /></div></section>
    <CtaBanner locale={locale} /><SiteFooter locale={locale} />
  </main>;
};

export default function HomePage() { return <Home locale="vi" />; }
