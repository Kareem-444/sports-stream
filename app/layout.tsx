import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "سبورت ستريم - بث مباشر للمباريات الرياضية",
  description: "شاهد المباريات والأحداث الرياضية بث مباشر في أي وقت ومن أي مكان. تغطية شاملة لجميع الدوريات العالمية.",
  keywords: "بث مباشر, مباريات اليوم, كرة القدم, الدوري الإنجليزي, الدوري الإسباني, دوري أبطال أوروبا, بث رياضي, مباريات حية",
  openGraph: {
    title: "سبورت ستريم - بث مباشر للمباريات الرياضية",
    description: "شاهد المباريات والأحداث الرياضية بث مباشر في أي وقت ومن أي مكان",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "سبورت ستريم - بث مباشر للمباريات الرياضية",
    description: "شاهد المباريات والأحداث الرياضية بث مباشر في أي وقت ومن أي مكان",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="ar" />
        <link rel="canonical" href="https://sportsstream.com" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}