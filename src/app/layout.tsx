import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "KAT Solutions | Great Transformations Start Small",
  description:
    "KAT Solutions đồng hành cùng doanh nghiệp và nhà máy trong hành trình số hóa và tự động hóa.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="vi" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
