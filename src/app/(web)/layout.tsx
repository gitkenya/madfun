import Navbar from "@/app/(web)/modules/shared/navbar/Navbar";
import Footer from "@/app/(web)/modules/shared/footer/footer";
import { Metadata } from "next";

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
    template: "%s - Madfun",
    default: "Madfun | Events, Flights, Hotels and Travel",
  },
  description: meta.description,

  openGraph: {
    title: {
      template: "%s - Madfun",
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
      template: "%s - Madfun",
      default: "Madfun | Events, Flights, Hotels and Travel",
    },
    description: meta.description,
    card: meta.card,
    site: meta.site,
    creator: meta.creator,
    images: meta.images,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-poppins">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
