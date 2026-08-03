import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { localizedPath, type Locale } from "@/lib/i18n";

const features = [
  {
    title: "AI & Computer Vision",
    description: "KAT phát triển các ứng dụng AI và thị giác máy tính theo bài toán riêng — từ kiểm tra chất lượng đến giám sát và hỗ trợ ra quyết định.",
    points: ["Phát hiện lỗi, vật thể và bất thường theo thời gian thực.", "OCR, phân loại và đo lường được tinh chỉnh theo dữ liệu thực tế.", "Kết nối cảnh báo và kết quả phân tích với hệ thống vận hành."],
    image: "/images/project-1.png", rowHeight: "lg:h-[371px]", imageHeight: "lg:h-[353px]", reverse: false,
  },
  {
    title: "ERP, CRM & Dữ liệu hợp nhất",
    description: "Chuẩn hóa quy trình và kết nối dữ liệu quản trị trên một nền tảng phù hợp với cách doanh nghiệp thực sự vận hành.",
    points: ["Liên kết bán hàng, kho, tài chính, sản xuất và chăm sóc khách hàng.", "Dashboard theo vai trò với dữ liệu được cập nhật tập trung.", "API kết nối các phần mềm và nguồn dữ liệu đang sử dụng."],
    image: "/images/project-2.png", rowHeight: "lg:h-[380px]", imageHeight: "lg:h-[353px]", reverse: true,
  },
  {
    title: "Nền tảng Web & Cộng tác",
    description: "Xây dựng các nền tảng Web trực quan, bảo mật và dễ mở rộng để đội ngũ làm việc trên cùng một nguồn dữ liệu.",
    points: ["Trải nghiệm responsive trên máy tính, tablet và điện thoại.", "Phân quyền linh hoạt theo người dùng, nhóm và quy trình.", "Dữ liệu và thay đổi được đồng bộ trong một môi trường tập trung."],
    image: "/images/project-3.png", rowHeight: "lg:h-[325px]", imageHeight: "lg:h-[325px]", reverse: false,
  },
  {
    title: "Tự động hóa & Tích hợp",
    description: "Kết nối máy móc, camera, cảm biến và phần mềm để biến dữ liệu trực tiếp thành hành động trong quy trình vận hành.",
    points: ["Tích hợp qua REST API, MQTT, OPC UA và các giao thức phù hợp.", "Tự động hóa tác vụ, phê duyệt, cảnh báo và luồng xử lý.", "Theo dõi trạng thái và phản hồi sự cố theo thời gian thực."],
    image: "/images/project-4.png", rowHeight: "lg:h-[418px]", imageHeight: "lg:h-[353px]", reverse: true,
  },
  {
    title: "Trải nghiệm số đa nền tảng",
    description: "KAT thiết kế trải nghiệm số rõ ràng, nhất quán và tối ưu hiệu năng trên nhiều thiết bị, dữ liệu và quy mô sử dụng.",
    points: ["Giao diện trực quan được xây dựng theo nhu cầu người dùng thực tế.", "Kiến trúc có thể mở rộng khi dữ liệu và số lượng người dùng tăng.", "Chất lượng trải nghiệm nhất quán trên mọi thiết bị."],
    image: "/images/project-5.png", rowHeight: "lg:h-[572px]", imageHeight: "lg:size-[564px]", reverse: false,
  },
  {
    title: "Ứng dụng AI chuyên biệt",
    description: "Từ Computer Vision và OCR đến phân tích dữ liệu, KAT phát triển ứng dụng AI phù hợp với từng lĩnh vực và quy trình.",
    points: ["Mô hình được lựa chọn và tinh chỉnh theo dữ liệu của doanh nghiệp.", "Tích hợp kết quả AI trực tiếp vào phần mềm và luồng vận hành.", "Bắt đầu bằng thử nghiệm nhỏ trước khi mở rộng toàn hệ thống."],
    image: "/images/project-6.png", rowHeight: "lg:h-[572px]", imageHeight: "lg:size-[564px]", reverse: true,
  },
] as const;

const useCases = [
  { tag: "ERP & CRM", title: "Chuẩn hóa quản trị và vận hành trên một hệ thống", description: "Kết nối dữ liệu bán hàng, kho, tài chính và sản xuất để giảm thao tác rời rạc.", image: "/images/project-4.png" },
  { tag: "AI & AUTOMATION", title: "Đưa AI vào quy trình giám sát sản xuất", description: "Phân tích tín hiệu, phát hiện bất thường và hỗ trợ phản hồi sự cố nhanh hơn.", image: "/images/case-study-1.png" },
  { tag: "WEB PLATFORM", title: "Xây dựng nền tảng Web trực quan và dễ mở rộng", description: "Biến dữ liệu phức tạp thành trải nghiệm dễ truy cập, chia sẻ và cộng tác.", image: "/images/case-study-3.png" },
] as const;

const featureCopyEn = [
  { title: "AI & Computer Vision", description: "KAT develops AI and computer vision applications around specific operational challenges—from quality inspection to monitoring and decision support.", points: ["Detect defects, objects, and anomalies in real time.", "Fine-tune OCR, classification, and measurement against real-world data.", "Connect alerts and analysis results to operating systems."] },
  { title: "ERP, CRM & Unified Data", description: "Standardize workflows and connect management data on a platform that reflects how the business actually operates.", points: ["Link sales, inventory, finance, production, and customer care.", "Role-based dashboards with centrally updated data.", "APIs that connect existing software and data sources."] },
  { title: "Web Platforms & Collaboration", description: "Build intuitive, secure, and scalable Web platforms so teams work from the same source of information.", points: ["Responsive experiences across desktop, tablet, and mobile.", "Flexible permissions by user, team, and workflow.", "Synchronized data and changes in one central environment."] },
  { title: "Automation & Integration", description: "Connect machines, cameras, sensors, and software to turn direct data into action across operations.", points: ["Integrate through REST API, MQTT, OPC UA, and appropriate protocols.", "Automate tasks, approvals, alerts, and processing flows.", "Monitor status and respond to incidents in real time."] },
  { title: "Multi-platform Digital Experiences", description: "KAT designs clear, consistent digital experiences optimized for performance across devices, data, and usage at scale.", points: ["Intuitive interfaces built around real user needs.", "Architecture that scales as data and user volume grow.", "A consistent experience on every device."] },
  { title: "Specialized AI Applications", description: "From Computer Vision and OCR to data analysis, KAT develops AI applications tailored to each domain and workflow.", points: ["Select and fine-tune models with business data.", "Integrate AI outputs directly into software and operating flows.", "Start with a focused pilot before expanding across the system."] },
] as const;

const useCaseCopyEn = [
  { tag: "ERP & CRM", title: "Standardize management and operations in one system", description: "Connect sales, inventory, finance, and production data to reduce fragmented work." },
  { tag: "AI & AUTOMATION", title: "Bring AI into production monitoring workflows", description: "Analyze signals, detect anomalies, and support faster incident response." },
  { tag: "WEB PLATFORM", title: "Build intuitive Web platforms that are ready to scale", description: "Turn complex data into experiences that are easy to access, share, and collaborate through." },
] as const;

const pageCopy = {
  vi: { eyebrow: "DỰ ÁN & NĂNG LỰC", title: "Giải pháp được xây dựng từ những bài toán thực tế", body: "Từ ERP, CRM và nền tảng Web đến AI, Computer Vision — KAT Solutions biến nhu cầu thực tế thành các sản phẩm có thể vận hành, đo lường và mở rộng.", more: "Khám phá thêm năng lực kỹ thuật", moreButton: "Xem thêm", featured: "Dự án tiêu biểu", featuredBody: "Mỗi dự án của KAT bắt đầu từ một bài toán cụ thể. Chúng tôi cùng khách hàng xác định bước đi nhỏ nhất có thể kiểm chứng, xây dựng giải pháp, đo lường kết quả và mở rộng khi giá trị đã được chứng minh.", featuredTitle: "Nền tảng ERP hợp nhất dữ liệu quản trị và vận hành", featuredDesc: "Kết nối quy trình, dữ liệu và đội ngũ trên một hệ thống tập trung, giúp doanh nghiệp theo dõi và ra quyết định nhất quán hơn.", featuredLink: "Khám phá dự án", capability: "Năng lực" },
  en: { eyebrow: "PROJECTS & CAPABILITIES", title: "Solutions built around real operational challenges", body: "From ERP, CRM, and Web platforms to AI and Computer Vision—KAT Solutions turns real needs into products that can operate, be measured, and scale.", more: "Explore more technical capabilities", moreButton: "Learn more", featured: "Featured projects", featuredBody: "Every KAT project starts with a specific challenge. Together with our customers, we define the smallest verifiable step, build the solution, measure results, and expand only after value is proven.", featuredTitle: "An ERP platform that unifies management and operations data", featuredDesc: "Connect workflows, data, and teams in one focused system—helping the business monitor operations and make more consistent decisions.", featuredLink: "Explore project", capability: "Capabilities" },
} as const;

export const Projects = ({ locale = "vi" }: { locale?: Locale }) => (
  <main className="bg-[#070911]">
    <SiteHeader active="projects" locale={locale} />

    <ProjectsContent locale={locale} />
  </main>
);

const ProjectsContent = ({ locale }: { locale: Locale }) => {
  const text = pageCopy[locale];
  const activeFeatures = locale === "vi" ? features : features.map((feature, index) => ({ ...feature, ...featureCopyEn[index]! }));
  const activeUseCases = locale === "vi" ? useCases : useCases.map((item, index) => ({ ...item, ...useCaseCopyEn[index]! }));
  return <>
    <section className="bg-[#070911] text-[#d0d9fb]">
      <div className="mx-auto max-w-[1200px] px-5 pb-0 pt-12 text-center lg:px-0 lg:pt-[50px]">
        <p className="text-[13px] font-semibold leading-[18px] text-[#ffc700]">{text.eyebrow}</p>
        <h1 className="display mt-6 text-3xl font-medium leading-tight text-[#ccd4ff] sm:text-4xl lg:mt-7 lg:text-5xl lg:leading-[60px]">{text.title}</h1>
        <p className="mx-auto mt-10 max-w-[980px] text-base leading-7 text-[#ccd4ff] lg:mt-[86px] lg:text-lg">{text.body}</p>
      </div>

      <div className="mx-auto mt-20 max-w-[1200px] px-5 lg:mt-[86px] lg:px-0">
        {activeFeatures.map((feature, index) => (
          <article key={feature.title} className={`grid gap-8 ${feature.rowHeight} lg:grid-cols-[564px_556px] lg:gap-20 ${index < features.length - 1 ? "mb-20 lg:mb-32" : ""}`}>
            <div className={`${feature.reverse ? "lg:order-2" : ""} h-[260px] overflow-hidden rounded-lg sm:h-[353px] ${feature.imageHeight}`}>
              <img src={feature.image} alt="" className="h-full w-full rounded-lg object-cover" />
            </div>
            <div className={`${feature.reverse ? "lg:order-1" : ""} text-left`}>
              <h2 className="display text-3xl font-semibold leading-tight text-[#d0d9fb] lg:text-[36px] lg:leading-[50px]">{feature.title}</h2>
              <p className="mt-4 text-base leading-7 text-[#aab4d6] lg:mt-5 lg:text-lg lg:leading-7">{feature.description}</p>
              <ul className="mt-5 space-y-3 lg:mt-4 lg:space-y-3" aria-label={`${text.capability} ${feature.title}`}>
                {feature.points.map((point) => <li key={point} className="grid grid-cols-[26px_1fr] gap-[22px] text-[15px] leading-[26px] text-[#aab4d6] lg:text-[17px]"><span className="font-semibold text-[#36c58a]">✓</span><span>{point}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 flex h-[300px] flex-col items-center justify-center border-t border-[#1a2138] bg-[#05060d] px-5 text-center lg:mt-32 lg:h-[386px]">
        <h2 className="display text-2xl font-semibold text-[#ccd4ff] lg:text-[30px] lg:leading-[41px]">{text.more}</h2>
        <Link href={localizedPath(locale, "/contact")} className="button-hover focus-ring mt-8 inline-flex h-8 items-center gap-[7px] rounded-[5px] bg-white px-3 text-sm font-medium text-[#4b5362]"><span>›</span><span className="w-[100px]">{text.moreButton}</span></Link>
      </section>
    </section>

    <section className="min-h-[1520px] bg-white px-5 pb-20 pt-16 text-[#12141f] lg:px-0 lg:pb-0 lg:pt-[63px]">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="display text-3xl font-semibold leading-[50px] lg:text-[36px]">{text.featured}</h2>
        <p className="mt-3 max-w-[1440px] text-base leading-[25px] text-[#404759]">{text.featuredBody}</p>

        <article className="mt-16 grid overflow-hidden bg-white lg:mt-[178px] lg:h-[469px] lg:grid-cols-[939px_501px]">
          <div className="h-[300px] overflow-hidden lg:h-[469px]"><img src="/images/case-study-2.png" alt="Nền tảng Festo" className="h-full w-full object-cover" /></div>
          <div className="flex flex-col justify-center p-8 lg:px-16 lg:py-[42px]">
            <h3 className="display text-2xl font-semibold leading-9 lg:text-[30px] lg:leading-10">{text.featuredTitle}</h3>
            <p className="mt-5 text-base leading-6 text-[#4d546b] lg:mt-5">{text.featuredDesc}</p>
            <Link href={localizedPath(locale, "/contact")} className="text-link focus-ring mt-7 text-sm font-medium text-[#0e121e]">{text.featuredLink}&nbsp;&nbsp;›</Link>
          </div>
        </article>

        <div className="mt-10 grid gap-6 lg:mt-[65px] lg:grid-cols-3 lg:gap-[64px]">
          {activeUseCases.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[10px] border border-[#e0e3eb] bg-white lg:h-[430px]">
              <div className="h-[211px] p-[22px]">
                <p className="text-xs font-semibold leading-4 text-[#ffc700]">{item.tag}</p>
                <h3 className="display mt-4 text-xl font-semibold leading-[27px] text-[#0e121e]">{item.title}</h3>
                <p className="mt-3 text-sm leading-5 text-[#4d546b]">{item.description}</p>
              </div>
              <div className="h-[219px] overflow-hidden"><img src={item.image} alt="" className="h-full w-full object-cover" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <SiteFooter locale={locale} />
  </>;
};

export default function ProjectsPage() { return <Projects locale="vi" />; }
