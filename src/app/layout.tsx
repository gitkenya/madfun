import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins, Inter, Great_Vibes } from "next/font/google";
import localFont from "next/font/local";
import "./global.scss";
import { WebProvider } from "@/providers/web/web";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "arial"],
  preload: true,
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  preload: true,
  variable: "--font-inter",
});

const citadel = localFont({
  src: [
    {
      path: "../../public/assets/fonts/citadel/citadel.ttf",
    },
  ],
  variable: "--font-citadel",
});
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
      <body
        className={`${poppins.variable} ${inter.variable} ${citadel.variable}`}
      >
        <WebProvider>{children}</WebProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
