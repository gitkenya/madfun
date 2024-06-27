import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
const inter = Inter({ subsets: ["latin"] });

const meta: any = {
  title: "Madfun | Online Ticketing Platform",
  description:
    "Madfun is a B2B and B2C Online Ticketing Platform which aims to build a dynamic and service oriented Travel Market in the World",
  type: "website",
  card: "summary_large_image",
  site: "@madfun",
  creator: "@madfun",
  images: "/assets/img/pages/home/banner.png",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
};
export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  title: {
    template: "%s - Madfun",
    default: "Madfun | Online Ticketing Platform",
  },
  description: meta.description,

  openGraph: {
    title: {
      template: "%s - Madfun",
      default: "Madfun | Online Ticketing Platform",
    },
    description: meta.description,
    type: meta.type,
    images: meta.images,
    url: `${meta.url}`,
    locale: "en_US",
  },
  twitter: {
    title: {
      template: "%s - Madfun",
      default: "Madfun | Online Ticketing Platform",
    },
    description: meta.description,
    card: meta.card,
    site: meta.site,
    creator: meta.creator,
    images: meta.images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
