import Link from "next/link";
import Image from "next/image";
import Sidebar from "../modules/sidebar";
import { blogs } from "@/utils/data/blog";

export default async function Page() {
  const slug = "uganda";
  const currentBlog = blogs.find((obj: any) => obj.slug === slug);
  return (
    <section className="w-full py-8 bg-slate-100 min-h-screen text-slate-600">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-0 pt-12 sm:pt-16 flex flex-col sm:flex-row-reverse gap-4 sm:gap-12">
        <div className="w-full sm:w-2/3 flex flex-col gap-4 sm:gap-6">
          <div
            className="w-full aspect-video bg-cover bg-center rounded-xl sm:rounded-xl"
            style={{
              backgroundImage: `url(/assets/img/blog/photos/uganda.jpg)`,
            }}
          ></div>
          <h1 className="font-bold text-slate-700 text-lg sm:text-2xl font-poppins">
            {currentBlog.title}
          </h1>
          <div>
            <p>
              Uganda is home to the world's youngest population with a median
              age of just 16
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              className="w-full bg-cover bg-center rounded-xl sm:rounded-xl aspect-video"
              style={{
                backgroundImage: `url(/assets/img/blog/uganda/uganda-1.jpg)`,
              }}
            ></div>
            <div
              className="w-full aspect-video bg-cover bg-center rounded-xl sm:rounded-xl"
              style={{
                backgroundImage: `url(/assets/img/blog/uganda/uganda-2.jpg)`,
              }}
            ></div>
            <div
              className="w-full aspect-video bg-cover bg-center rounded-xl sm:rounded-xl"
              style={{
                backgroundImage: `url(/assets/img/blog/uganda/uganda-3.jpg)`,
              }}
            ></div>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <Sidebar slug={slug} />
        </div>
      </div>
    </section>
  );
}
