import { blogs } from "@/utils/data/blog";
import Link from "next/link";
export default function Sidebar(props: any) {
  const { slug } = props;
  const sidebarPosts: any[] = blogs.filter((obj: any) => obj.slug !== slug);

  return (
    <div className="flex flex-col gap-5 sm:sticky sm:top-[80px]">
      <h2 className="font-bold text-slate-700 text-lg sm:text-xl font-poppins uppercase">
        Popular Posts
      </h2>
      <div>
        <div className="flex flex-col gap-3">
          {sidebarPosts?.map((post: any) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="transition-colors duration-300 flex flex-row items-center gap-4 p-2 bg-slate-200/60 hover:bg-slate-200 rounded sm:rounded-xl"
            >
              <div className="w-20">
                <div
                  className="w-20 aspect-square bg-cover bg-center rounded-xl sm:rounded-xl"
                  style={{
                    backgroundImage: `url(/assets/img/blog/sidebar/${post.photo})`,
                  }}
                ></div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-slate-700 line-clamp-1 uppercase">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-sm">{post.meta}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
