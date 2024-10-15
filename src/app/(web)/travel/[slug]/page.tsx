import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: destination } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", params.slug)
    .order("id", { ascending: true })
    .single();
  return (
    <section className="w-full mt-16 sm:mt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[200px] sm:min-h-[280px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/travel/packages/${destination.banner}`}
          fill
          priority
          alt="Madfun Flights"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col items-center justify-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Discover {destination.name}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
