import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins, Barlow } from "next/font/google";
import "./global.scss";
import { AppProvider } from "@/providers/app/app";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "arial"],
  preload: true,
  variable: "--font-poppins",
});

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "arial"],
  preload: true,
  variable: "--font-barlow",
});

const meta: any = {
  title: "Madfun | Events, Flights, Hotels and Travel",
  description:
    "Madfun is an event and travel company offerring seamless solutions for users to create & manage events, buy tickets, book flights and accommodation with ease.",
  type: "website",
  card: "summary_large_image",
  site: "@madfun",
  creator: "@madfun",
  images: "/assets/img/meta/meta-1.jpg",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
};
export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  title: {
    template: "%s",
    default: "Madfun | Events, Flights, Hotels and Travel",
  },
  description: meta.description,

  openGraph: {
    title: {
      template: "%s",
      default: "Madfun | Events, Flights, Hotels and Travel",
    },
    description: meta.description,
    type: meta.type,
    images: meta.images,
    url: `${meta.url}`,
    locale: "en_US",
  },
  twitter: {
    title: {
      template: "%s",
      default: "Madfun | Events, Flights, Hotels and Travel",
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
    <html lang="en">
      <body
        className={`${poppins.variable} ${barlow.variable} font-barlow bg-slate-50 dark:bg-slate-900`}
      >
        <AppProvider>{children}</AppProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
