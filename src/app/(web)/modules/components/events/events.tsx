import Link from "next/link";
import Image from "next/image";
import { IoChevronForwardOutline, IoEllipse } from "react-icons/io5";
import ShareModal from "@/components/modals/shareModal";

export default function Events(props: any) {
  const events = [
    {
      id: "1",
      date: "14 Dec",
      name: "3RD Service - Life on Life",
      price: "1500+",
      photo: "/assets/img/events/event-1.avif",
    },
    {
      id: "2",
      date: "16 Dec",
      name: "FIAT A Christmas Musical",
      price: "1500+",
      photo: "/assets/img/events/event-2.avif",
    },
    {
      id: "3",
      date: "20 Dec",
      name: "Happy Country 2024",
      price: "1500+",
      photo: "/assets/img/events/event-3.avif",
    },
    {
      id: "4",
      date: "24 Dec",
      name: "Mpaka Event concert with a longer event title",
      price: "1500+",
      photo: "/assets/img/events/event-4.avif",
    },
  ];
  return (
    <section className="w-full py-8 sm:py-12 bg-slate-100">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-6 mt-2">
        <div className="w-full flex flex-row items-center justify-center sm:justify-between">
          <h1 className="font-poppins text-lg sm:text-3xl font-bold uppercase">
            Exciting Upcoming events
          </h1>

          <Link
            href="/"
            className="text-sm font-medium hidden sm:flex flex-row items-center gap-2"
          >
            View more <IoChevronForwardOutline size={20} />
          </Link>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-4 sm:gap-5">
          {events?.map((event: any) => (
            <div key={event.id} className="grid">
              <div className="relative bg-slate-50 border border-slate-200 p-4 rounded-lg flex flex-col justify-start gap-4">
                <Link className="w-full" href={`/`}>
                  <Image
                    className="rounded-lg"
                    src={event.photo}
                    width={600}
                    height={600}
                    alt="Events in Kenya Cinema Nairobi"
                    priority
                  />
                  <span className="absolute top-0 left-0 m-6 min-w-20 text-center bg-slate-50 text-sm font-semibold text-red-600 px-2 py-1 rounded">
                    {event.date}
                  </span>
                </Link>
                <div className="space-y-2">
                  <h2 className="font-semibold text-sm sm:text-lg line-clamp-2">
                    {event.name}
                  </h2>
                  <h3 className="text-sm text-slate-500 flex flex-row items-center gap-2">
                    <span className="">Play</span>
                    <span>
                      <IoEllipse size={8} />
                    </span>
                    <span className="">Ksh {event.price}</span>
                  </h3>
                </div>
                <div className="absolute right-0 bottom-0">
                  <div className="flex flex-row justify-between items-center">
                    <ShareModal
                      event={{
                        id: "event1",
                        slug: "demo",
                        url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/eventID`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden flex flex-row justify-center items-center">
          <Link
            href="/"
            className="text-sm font-medium inline-flex flex-row items-center gap-2 bg-yellow-400 text-slate-700 rounded px-4 py-2"
          >
            View more <IoChevronForwardOutline size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
