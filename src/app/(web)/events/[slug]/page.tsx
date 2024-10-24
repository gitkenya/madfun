import Image from "next/image";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import SelectTickets from "./modules/form";
export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="w-full bg-slate-100 py-4 sm:py-8">
      <div className="mx-auto max-w-[85rem] px-4 space-y-16">
        <div className="md:flex gap-6">
          <div className="w-full md:w-1/2">
            <div className="bg-slate-50 rounded-lg md:rounded-xl">
              <div className="p-4 md:p-6 flex flex-col gap-6">
                <Image
                  src="/assets/img/events/featured.svg"
                  width={800}
                  height={800}
                  alt="Featured Event"
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold">Event Description</h1>
                  <p>
                    When Mum's in the hospital and Dad says she's 'done
                    something stupid', there's not much a seven year old can do.
                  </p>
                  <ol>
                    <li>1. Ice cream</li>
                    <li>2. Water fights</li>
                    <li>
                      3. Staying up past your bedtime and being allowed to watch
                      TV
                    </li>
                  </ol>
                  <p className="border-b border-slate-200 pb-4">
                    These are the first three items on a list of every brilliant
                    thing in the world worth living for. Dancan MacMillian's
                    play Every Brilliant thing pulls back the curtain on what
                    it's like a child of a suicidal mother nd the lengths we go
                    for those we love. Based on true and untrue stories, Every
                    Brilliant thing in a life-affirming story of how to achieve
                    hope through focusing on the smallest miracles in life.
                  </p>
                  <h2 className="text-lg font-bold">
                    Artistes / Performers / Guests
                  </h2>
                  <ol className="border-b border-slate-200 pb-4">
                    <li className="flex flex-row gap-2 items-center">
                      <IoChevronForwardCircleOutline /> Nyashinski
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <IoChevronForwardCircleOutline /> Sauti Sol
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <IoChevronForwardCircleOutline /> Bien
                    </li>
                  </ol>
                  <h2 className="text-lg font-bold">Event Organizer</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-row items-center gap-4">
                      <Image
                        className="rounded-full"
                        src="/assets/img/users/user1.jpg"
                        width={50}
                        height={50}
                        alt="Event Organizer"
                      />
                      <div>
                        <h3 className="font-medium text-lg">Brand Mania</h3>
                        <p className="text-slate-500 text-sm">700 Followers</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-4">
                      <Link href="/events/demo" className="font-semibold">
                        Send Message
                      </Link>
                      <Link
                        href="/events/demo"
                        className="font-semibold border-2 border-slate-800 text-slate-800 px-4 py-2 rounded"
                      >
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SelectTickets />
        </div>
      </div>
    </section>
  );
}
