import type { Metadata } from "next";
import { Geist_Mono, Google_Sans_Flex, Kanit, Rubik } from "next/font/google";
import "./globals.css";
import PageLoaderWrapper from "@/components/ui/PageLoaderWrapper";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelbytesolutions.in"),

  title: {
    default: "PixelByte Solutions",
    template: "%s | PixelByte Solutions",
  },

  description:
    "PixelByte Solutions is a modern software and web development company delivering powerful digital solutions including web development, mobile apps, UI/UX design, SEO, branding, and scalable business software.",

  keywords: [
    "PixelByte Solutions",
    "Web Development Company",
    "Software Company India",
    "Website Development Kerala",
    "Next.js Development",
    "React Development",
    "UI UX Design",
    "SEO Services",
    "Digital Solutions",
    "Mobile App Development",
    "Business Website Development",
    "Custom Software Development",
    "Full Stack Development",
    "Ecommerce Website Development",
    "Web Design Agency",
  ],

  authors: [{ name: "PixelByte Solutions" }],
  creator: "PixelByte Solutions",
  publisher: "PixelByte Solutions",

  applicationName: "PixelByte Solutions",

  openGraph: {
    title: "PixelByte Solutions",
    description:
      "From Pixels to Powerful Solutions — Professional software, web, and digital solutions company.",
    url: "https://pixelbytesolutions.in",
    siteName: "PixelByte Solutions",
    images: [
      {
        url: "https://pixelbytesolutions.in/main-logo.png",
        width: 1200,
        height: 630,
        alt: "PixelByte Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PixelByte Solutions",
    description:
      "From Pixels to Powerful Solutions — Professional software and web development company.",
    images: ["https://pixelbytesolutions.in/name-with-background.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://pixelbytesolutions.in",
  },

  category: "technology",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/pixelbyte-logo.png",
        type: "image/png",
      },
    ],
    apple: "/pixelbyte-logo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PixelByte Solutions",
    url: "https://pixelbytesolutions.in",
    logo: "https://pixelbytesolutions.in/pixelbyte-logo.png",
    image: "https://pixelbytesolutions.in/logo-with-background.png",
    description:
      "Professional software and web development company delivering powerful digital solutions.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: ["https://maps.app.goo.gl/nwDykLvdxfQu6RGU7"],
  };
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${kanit.variable} ${rubik.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageLoaderWrapper>{children}</PageLoaderWrapper>
      </body>
    </html>
  );
}
