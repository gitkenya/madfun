import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import RegisterForm from "./modules/form";
import Slider from "./modules/slider";

const meta: any = {
  title: "Sign up for free | Madfun",
  description:
    "Madfun is an event and travel company offerring seamless solutions for users to create & manage events, buy tickets, book flights and accommodation with ease.",
  type: "website",
  card: "summary_large_image",
  site: "@madfun",
  creator: "@madfun",
  images: "/assets/img/pages/auth/register/meta.jpg",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
};
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/register",
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: meta.type,
      images: meta.images,
      url: `${meta.url}/register`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: meta.card,
      site: meta.site,
      creator: meta.creator,
      images: meta.images,
    },
  };
};

export default async function Page() {
  const header = headers();
  const ip =
    process.env.NODE_ENV === "production"
      ? (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
      : await fetch("https://api.ipify.org?format=json")
          .then((res) => res.json())
          .then((data) => data.ip);
  const geoData = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_GEO}&ip=${ip}`,
    { cache: "force-cache" }
  );
  const response = await geoData.json();

  return (
    <div className="flex flex-wrap h-full items-center justify-center">
      <div className="hidden sm:flex w-full sm:w-3/5 h-full relative bg-slate-50">
        <div className="absolute top-0 left-0 w-full min-h-screen h-auto lg:h-screen z-0 bg-cover bg-center bg-no-repeat bg-slate-800/[.4]">
          <Slider />
        </div>
      </div>
      <div className="w-full sm:w-2/5 p-2 sm:p-4 flex items-center justify-center">
        <div className="w-full rounded-lg p-0 sm:px-4 ">
          <RegisterForm ipAddress={ip} geoData={response} />
        </div>
      </div>
    </div>
  );
}
