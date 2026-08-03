import type { Locale } from "@/lib/i18n";

export type SolutionCard = { tag: string; title: string; description: string; image: string };

const solutionCardsVi: SolutionCard[] = [
  { tag: "ERP & CRM", title: "Kết nối quản trị, dữ liệu và vận hành trên một nền tảng", description: "Chuẩn hóa quy trình, giảm dữ liệu phân mảnh và tạo góc nhìn thống nhất cho doanh nghiệp.", image: "/images/home-solution-1.png" },
  { tag: "AI & AUTOMATION", title: "Đưa AI vào quy trình vận hành doanh nghiệp", description: "Phân tích dữ liệu, phát hiện bất thường và hỗ trợ đội ngũ ra quyết định nhanh hơn.", image: "/images/home-solution-2.png" },
  { tag: "COMPUTER VISION", title: "Quan sát và tự động hóa bằng thị giác máy tính", description: "Kết nối camera với AI để kiểm tra, giám sát và cảnh báo theo thời gian thực.", image: "/images/home-solution-3.png" },
];

const solutionCardsEn: SolutionCard[] = [
  { tag: "ERP & CRM", title: "Connect management, data, and operations on one platform", description: "Standardize workflows, reduce fragmented data, and create a shared view of the business.", image: "/images/home-solution-1.png" },
  { tag: "AI & AUTOMATION", title: "Bring AI into day-to-day business operations", description: "Analyze data, detect anomalies, and help teams make faster decisions.", image: "/images/home-solution-2.png" },
  { tag: "COMPUTER VISION", title: "Observe and automate with computer vision", description: "Connect cameras with AI for real-time inspection, monitoring, and alerts.", image: "/images/home-solution-3.png" },
];

export const solutionCardsByLocale: Record<Locale, SolutionCard[]> = { vi: solutionCardsVi, en: solutionCardsEn };

export const capabilities = [
  ["ERP & CRM", "Quản trị thống nhất", "Kết nối bán hàng, vận hành, dữ liệu và quy trình ra quyết định.", "/images/project-1.png"],
  ["WEB PLATFORM", "Nền tảng vận hành 24/7", "Xây dựng hệ thống web linh hoạt cho khách hàng, đội ngũ và đối tác.", "/images/project-2.png"],
  ["AI & AUTOMATION", "Tự động hóa có thể đo lường", "Biến các thao tác lặp lại thành quy trình chủ động và minh bạch.", "/images/project-3.png"],
  ["COMPUTER VISION", "Quan sát bằng dữ liệu hình ảnh", "Nhận diện, kiểm tra và cảnh báo theo thời gian thực tại hiện trường.", "/images/project-4.png"],
  ["DATA & INTEGRATION", "Luồng dữ liệu liền mạch", "Đồng bộ những hệ thống rời rạc thành một bức tranh vận hành chung.", "/images/project-5.png"],
  ["FACTORY APPLICATIONS", "Số hóa từ sàn xưởng", "Đưa nhu cầu thực tế của nhà máy vào công cụ dễ sử dụng hằng ngày.", "/images/project-6.png"],
] as const;

export const caseStudies = [
  ["VẬN HÀNH NHÀ MÁY", "Kết nối ERP với dữ liệu sản xuất", "/images/case-study-1.png"],
  ["AI & VISION", "Nhìn thấy điểm cần hành động sớm hơn", "/images/case-study-2.png"],
  ["WEB PLATFORM", "Một điểm chạm cho khách hàng và đội ngũ", "/images/case-study-3.png"],
] as const;
