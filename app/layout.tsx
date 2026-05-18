import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { I18nProvider } from "@/components/i18n-provider";
import { ThemeSync } from "@/components/theme-sync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecfeff" },
    { media: "(prefers-color-scheme: dark)", color: "#062a30" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Clipboard Shuttle",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description: "Sync clipboard across phones, computers and devices with a code.",
  url: "https://clipboard.shuttlelab.org",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clipboard.shuttlelab.org"),
  title: "剪贴板穿梭机 | Clipboard Shuttle",
  description: "用口令在手机与电脑间同步剪贴板 | Sync clipboard across phones and computers with a code",
  alternates: {
    canonical: "/",
  },
  // verification: {
  //   google: "<paste-google-search-console-verification-code-here>",
  // },
  openGraph: {
    title: "剪贴板穿梭机 | Clipboard Shuttle",
    description: "用口令在手机与电脑间同步剪贴板 | Sync clipboard across phones and computers with a code",
    siteName: "Clipboard Shuttle",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "剪贴板穿梭机 | Clipboard Shuttle",
    description: "用口令在手机与电脑间同步剪贴板 | Sync clipboard across phones and computers with a code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeSync />
        <I18nProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
