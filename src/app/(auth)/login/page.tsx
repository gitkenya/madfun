import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "./modules/form";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import moment from "moment";
import Slider from "./modules/slider";
const meta: any = {
  title: "Login to Access your Account",
  description:
    "Madfun is an event and travel company offerring seamless solutions for users to create & manage events, buy tickets, book flights and accommodation with ease.",
  type: "website",
  card: "summary_large_image",
  site: "@tuhustle",
  creator: "@tuhustle",
  images: "/assets/img/pages/auth/login/meta.jpg",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
};
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    alternates: {
      canonical: "/login",
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: meta.type,
      images: meta.images,
      url: `${meta.url}/login`,
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
  return (
    <div className="flex flex-wrap h-full items-center justify-center">
      <div className="hidden sm:flex w-full sm:w-3/5 h-full relative bg-slate-50">
        <div className="absolute top-0 left-0 w-full min-h-screen h-auto lg:h-screen z-0 bg-cover bg-center bg-no-repeat bg-slate-800/[.4]">
          <Slider />
        </div>
      </div>
      <div className="w-full sm:w-2/5 p-2 sm:p-4 flex items-center justify-center">
        <div className="w-full rounded-lg p-0 sm:px-4 ">
          <LoginForm />
        </div>
      </div>
      <div className="h-10 sm:hidden w-full bg-slate-800 text-slate-100 flex flx-row items-center justify-center text-sm">
        &copy; {moment().format("Y")} Madfun. All Rights Reserved
      </div>
    </div>
  );
}
