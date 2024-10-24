import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/utils/data/blog";

export default async function Page() {
  const categoryColor = (cat: string) => {
    if (cat === "Travel") {
      return "text-green-600";
    } else if (cat === "Events") {
      return "text-primary-500";
    } else if (cat === "Streams") {
      return "text-red-600";
    } else {
      return "text-slate-600";
    }
  };
  return (
    <section className="w-full mt-12">
      <div className="w-full relative min-h-[280px]">
        <Image
          className="object-cover"
          src="/assets/img/blog/banner.jpg"
          fill
          priority
          alt="Madfun Flights"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full rounded-xl bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto">
            <h1 className="flex flex-row items-center justify-center gap-3 font-poppins text-lg sm:text-4xl uppercase font-bold text-white tracking-wider">
              Blog
            </h1>
            <p className="text-lg text-center text-white">
              Explore our Insights to Events, Holidays and Travel Experiences
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 pt-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {blogs?.map((post: any) => (
            <div key={post.id} className="grid">
              <div className="relative bg-white border border-slate-200 p-2 sm:p-4 rounded-lg flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-4">
                  <Link
                    className="w-full aspect-video bg-cover bg-center rounded-lg"
                    href={`/blog/${post.slug}`}
                    style={{
                      backgroundImage: `url(/assets/img/blog/sidebar/${post.photo})`,
                    }}
                  ></Link>
                  <div className="space-y-2">
                    <h2
                      className={`transition-colors duration-300 font-semibold uppercase tracking-[0.28em] sm:tracking-[0.28em] text-sm ${categoryColor(
                        "Travel"
                      )}`}
                    >
                      Travel Tips
                    </h2>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="transition-colors duration-300 font-semibold text-slate-600 hover:text-red-600 sm:text-lg font-poppins">
                        {post.title}
                      </h3>
                    </Link>
                  </div>
                </div>
                <div className="hidden">
                  <h4 className="text-sm text-slate-400 flex flex-row items-center justify-between gap-2">
                    <span className="">{post?.time}</span>
                    <span className="">{post?.date}</span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
