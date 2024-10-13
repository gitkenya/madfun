import Link from "next/link";
import Image from "next/image";
import { IoChevronForwardOutline, IoEyeOutline } from "react-icons/io5";
import ShareModal from "@/components/modals/shareModal";

export default function Packages() {
  const packages: any[] = [1, 2, 3];
  return (
    <section className="w-full py-8 bg-slate-100">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-6 mt-6">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-lg sm:text-3xl font-bold">Holiday Packages</h1>
          <Link
            href="/"
            className="text-sm font-medium underline flex flex-row items-center gap-2"
          >
            See All <IoChevronForwardOutline size={20} />
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packages?.map((key) => (
            <div key={key} className="grid">
              <div className="bg-slate-50 p-4 rounded-xl flex flex-row justify-between gap-4">
                <div className="relative w-full sm:w-1/2 rounded-xl">
                  <Image
                    src="/assets/img/packages/package1.svg"
                    width={600}
                    height={600}
                    alt="Events in Kenya Cinema Nairobi"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg line-clamp-1">
                      Burna Boy Live in Jo South Africa
                    </h3>
                    <p className="text-slate-500 text-sm">5 Nights</p>
                  </div>
                  <div className="flex flex-row justify-between text-slate-500">
                    <span className="text-sm flex flex-row items-center gap-2">
                      <IoEyeOutline size={20} /> 20
                    </span>
                    <ShareModal
                      event={{
                        id: "package1",
                        slug: "demo",
                        url: `${process.env.NEXT_PUBLIC_BASE_URL}/packages/demo`,
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-xl">Ksh 50,000</h4>
                    <p className="text-sm text-red-600">Valid until 30 Sep</p>
                    <Link
                      href="/"
                      className="px-5 py-2 block text-center bg-slate-800 text-slate-50 rounded"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
