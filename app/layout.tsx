import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "吴忠衡 | AI Application · Agent · AI Backend",
  description: "2027届信息科技本科生，主要方向为 AI 应用开发、RAG、Agent 与 AI Backend。",
  metadataBase: new URL("https://wu-zhongheng-portfolio.vercel.app"),
  openGraph: {
    title: "吴忠衡 | AI Application · Agent · AI Backend",
    description: "2027届信息科技本科生，主要方向为 AI 应用开发、RAG、Agent 与 AI Backend。",
    type: "website",
    locale: "zh_CN",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080c13",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
