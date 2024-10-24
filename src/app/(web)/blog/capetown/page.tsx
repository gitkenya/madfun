import Link from "next/link";
import Image from "next/image";
import Sidebar from "../modules/sidebar";
import { blogs } from "@/utils/data/blog";

export default async function Page() {
  const slug = "capetown";
  const currentBlog = blogs.find((obj: any) => obj.slug === slug);
  return (
    <section className="w-full py-8 bg-slate-100 min-h-screen text-slate-600">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 pt-10 sm:pt-16 flex flex-col sm:flex-row-reverse gap-4 sm:gap-12">
        <div className="w-full sm:w-2/3 flex flex-col gap-4 sm:gap-6">
          <div
            className="w-full aspect-video bg-cover bg-center rounded-xl sm:rounded-xl"
            style={{
              backgroundImage: `url(/assets/img/blog/photos/capetown.jpg)`,
            }}
          ></div>
          <h1 className="font-bold text-slate-700 text-lg sm:text-2xl font-poppins">
            {currentBlog.title}
          </h1>
          <div>
            <p>
              Want a city that's got it all? Cape Town is your ticket! This
              South African gem boasts stunning beaches, towering mountains, and
              a vibrant culture. Imagine hiking up Table Mountain for
              breathtaking views, chilling with playful penguins on Boulders
              Beach, or sipping world-class wine in the heart of the Winelands.
              With its sunny days, delicious food, and friendly locals, Cape
              Town is Africa's crown jewel and ready to steal your heart!
            </p>
            <p>
              Picture this: a laid-back vibe, deep bass linesbasslines that make
              you dance, and those catchy piano melodies that get stuck in your
              head for days. That's Amapiano. It's the sound of young South
              Africans having a good time, and it's quickly become a global
              sensation.
            </p>
            <p>
              Travel on a Dime with Madfun. We're your personal travel
              assistants, curating incredible adventures without breaking the
              bank. From sniffing out the sweetest flight deals to handpicking
              accommodations that feel like a home away from home.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <Sidebar slug={slug} />
        </div>
      </div>
    </section>
  );
}
