import Navbar from "@/app/(web)/modules/shared/navbar/Navbar";
import Footer from "@/app/(web)/modules/shared/footer/footer";
import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";

const meta: any = {
  title: "Madfun | Events, Flights, Hotels and Travel Experiences",
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
    default: "Madfun | Events, Flights, Hotels and Travel Experiences",
  },
  description: meta.description,

  openGraph: {
    title: {
      template: "%s",
      default: "Madfun | Events, Flights, Hotels and Travel Experiences",
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
      default: "Madfun | Events, Flights, Hotels and Travel Experiences",
    },
    description: meta.description,
    card: meta.card,
    site: meta.site,
    creator: meta.creator,
    images: meta.images,
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <main className="bg-white">
      <Navbar user={user ? user : null} />
      {children}
      <Footer />
    </main>
  );
}
