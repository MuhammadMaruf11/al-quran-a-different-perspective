import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Motion from "@/components/ui/Motion";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Quran (A different perspective)",
  description: "Generated by create next app",
};

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function checkApiStatus(): Promise<boolean> {
  try {
    const res = await fetch(base_url!);

    return res.ok;
  } catch (err) {
    console.error("❌ API server unreachable:", err);
    return false;
  }
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiReady = await checkApiStatus();
  return (
    <html lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#f9f9f6] text-[#1e293b] dark:bg-black dark:text-white`}
      >
        <Motion apiReady={apiReady}>
          <Header />
          {children}
          <Footer />
        </Motion>
      </body>
    </html>
  );
}
