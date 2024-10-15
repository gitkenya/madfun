import Image from "next/image";
import Flights from "./modules/flights";
export const revalidate = 604800;
export default function Page() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 pt-10 sm:pt-12">
        <div className="w-full h-60 sm:min-h-[calc(100vh-100px)] bg-slate-800 rounded-xl relative">
          <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full rounded-xl bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/20 z-20">
            <Flights />
          </div>
          <Image
            className="object-cover rounded-xl"
            src="/assets/img/flights/flights-banner.jpg"
            fill
            priority
            alt="Madfun Flights"
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
          />
        </div>
      </div>
    </section>
  );
}
