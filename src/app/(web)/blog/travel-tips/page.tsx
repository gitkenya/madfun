import Link from "next/link";
import Image from "next/image";
import Sidebar from "../modules/sidebar";
import { blogs } from "@/utils/data/blog";

export default async function Page() {
  const slug = "travel-tips";
  const currentBlog = blogs.find((obj: any) => obj.slug === slug);
  return (
    <section className="w-full py-8 bg-slate-100 min-h-screen text-slate-600">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-0 pt-12 sm:pt-16 flex flex-col sm:flex-row-reverse gap-4 sm:gap-12">
        <div className="w-full sm:w-2/3 flex flex-col gap-4 sm:gap-6">
          <div
            className="w-full aspect-video bg-cover bg-center rounded-xl sm:rounded-xl"
            style={{
              backgroundImage: `url(/assets/img/blog/photos/travel-tips.jpg)`,
            }}
          ></div>
          <h1 className="font-bold text-slate-700 text-lg sm:text-2xl font-poppins">
            {currentBlog.title}
          </h1>
          <div>
            <ul className="list-decimal flex flex-col gap-4 px-4">
              <li>
                <h3 className="font-semibold text-slate-700">BE FLEXIBLE</h3>
                <p>
                  We always plan for delays and try not to get upset when things
                  inevitably go wrong. Patience is extremely important when
                  traveling!
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-slate-700">MAKE A LIST</h3>
                <p>
                  About a week or so before each trip, I make a mental list of
                  items I don't want to forget — which I WILL forget if I don't
                  write them down. I've learned that when I think of something,
                  I need to write it down.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-slate-700">
                  LEARN COMMON PHRASES OF THE LOCAL LANGUAGE
                </h3>
                <p>
                  A simple “Please”, “Thank you”, and “I'm sorry” in the local
                  language goes a long way. I also like to learn the word for
                  beer, but that's just me.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-slate-700">
                  ALWAYS BRING THE FUN
                </h3>
                <p>
                  Don't forget to make room for MadFun! Dive into spontaneous
                  adventures, try something new, and engage with locals for
                  insider tips.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-slate-700">
                  ALWAYS BUY TRAVEL INSURANCE
                </h3>
                <p>
                  A medical emergency can wipe out your savings — or even worse.
                  We use and trust World Nomads for travel insurance.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <Sidebar slug={slug} />
        </div>
      </div>
    </section>
  );
}
