import type { Metadata } from "next";
import { DotGothic16, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const dotGothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dot-gothic",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ピコピコイングリッシュ | ゲームで英会話",
  description:
    "ゲーム × 英会話のオンラインサービス。楽しく自然と英語が身につく！有名英会話講師とオンラインで繋がりながら、ゲームを英語で一緒にプレイしていきます。",
  openGraph: {
    title: "ピコピコイングリッシュ | ゲームで英会話",
    description:
      "ゲーム × 英会話のオンラインサービス。楽しく自然と英語が身につく！",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${dotGothic.variable} ${notoSansJP.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
