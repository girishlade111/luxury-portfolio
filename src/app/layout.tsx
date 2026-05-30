import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Maison — Curated Excellence",
  description: "Where timeless elegance meets modern sophistication. A luxury editorial experience crafted with precision and intention.",
  keywords: ["luxury", "editorial", "curated", "excellence", "design", "craftsmanship"],
  authors: [{ name: "Maison" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Maison — Curated Excellence",
    description: "Where timeless elegance meets modern sophistication.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison — Curated Excellence",
    description: "Where timeless elegance meets modern sophistication.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#F9F8F6] text-[#1A1A1A]`}
      >
        {children}
        <Toaster />
        {/* Paper noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
