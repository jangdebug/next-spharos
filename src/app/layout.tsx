import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPHAROS 5TH",
  description: "1차프로젝트 SPHAROS 5TH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header>여기 헤더</header>
        {children}
        <footer>여기 푸터</footer>
      </body>
    </html>
  );
}
