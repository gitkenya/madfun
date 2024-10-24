import Link from "next/link";
import Image from "next/image";
import Sidebar from "../modules/sidebar";
import { blogs } from "@/utils/data/blog";

export default async function Page() {
  const slug = "karibu-kenya";
  const currentBlog = blogs.find((obj: any) => obj.slug === slug);
  return (
    <section className="w-full py-8 bg-slate-100 min-h-screen text-slate-600">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 pt-10 sm:pt-16 flex flex-col sm:flex-row-reverse gap-4 sm:gap-12">
        <div className="w-full sm:w-2/3 flex flex-col gap-4 sm:gap-6">
          <div
            className="w-full aspect-video bg-cover bg-center rounded-xl sm:rounded-xl"
            style={{
              backgroundImage: `url(/assets/img/blog/photos/kenya.jpg)`,
            }}
          ></div>
          <h1 className="font-bold text-slate-700 text-lg sm:text-2xl font-poppins">
            {currentBlog.title}
          </h1>
          <div>
            <p>
              Nairobi is a bustling African metropolis and explorer's camp with
              an eclectic blend of cosmopolitan culture, nature, and
              urbanization. It is the gateway to some of the most beautiful
              expanses of wilderness in the world and the only capital city with
              a national game park within it. Nairobi is considered the heart of
              East Africa with many modern malls, trendy boutiques, and amazing
              restaurants among other entertainment ventures. We hope you enjoy
              the 'City under the Sun.'
            </p>
            <p>
              Imagine waking up to the roar of lions just a stone’s throw from
              the city center. Nairobi National Park, a haven of wildlife, is
              home to lions, leopards, giraffes, and zebras. It's a truly unique
              opportunity to encounter Africa's big game without venturing far
              from the city. For a heartwarming experience, visit the David
              Sheldrick Elephant Orphanage, where you can witness the tender
              care given to orphaned elephants. It's a heart-melting encounter
              that will stay with you forever. And let's not forget the Giraffe
              Centre, where you can get up close and personal with these gentle
              giants, even feeding them by hand!
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
