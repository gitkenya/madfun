"use client";
import Link from "next/link";
import { IoChevronForwardOutline, IoEllipse } from "react-icons/io5";
import ShareModal from "@/components/modals/shareModal";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Events(props: any) {
  const [events, setEvents] = useState<any>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingEvents(true);
      try {
        const reqData = await fetch(
          `https://api.v1.interactive.madfun.com/v1/api/event/view`,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify({
              api_key: "4ba0e1aae090cdefc1887d2689b25e3f",
              source: "MOBILE",
              limit: 10,
              page: 1,
              sort: "",
              pastEvent: 0,
              eventID: "",
            }),
          }
        );
        if (reqData.ok) {
          const resData = await reqData.json();
          //console.log(resData);
          if (resData.code === "Success") {
            const {
              data: { data },
            } = resData;
            const filteredEvents = data
              .filter(
                (event: any) => event.isPublic === "1" && event.status === "1"
              )
              .slice(0, 4); // Limit to first 4 results

            setEvents(filteredEvents);
          }
        } else {
          console.error("Failed to fetch events");
        }
        setLoadingEvents(false);
      } catch (error) {
        console.error("An error occurred while fetching events:", error);
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-12 bg-slate-100">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 space-y-6 mt-2">
        <div className="w-full flex flex-row items-center justify-center sm:justify-between">
          <h1 className="font-poppins text-slate-800 text-lg sm:text-3xl font-bold uppercase">
            Top events
          </h1>

          <Link
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/events`}
            className="text-sm font-medium hidden text-slate-600 sm:flex flex-row items-center gap-2"
          >
            View more <IoChevronForwardOutline size={20} />
          </Link>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-4 sm:gap-5">
          {loadingEvents
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="relative min-h-[240px] sm:min-h-[420px] bg-slate-50 border border-slate-200 p-2 sm:p-4 rounded-lg flex flex-col justify-start gap-4"
                >
                  <div className="w-full min-h-[150px] sm:min-h-[300px] bg-slate-200 rounded-lg animate-pulse"></div>
                  <div className="w-full min-h-[20px] bg-slate-200 rounded animate-pulse"></div>
                  <div className="w-36 min-h-[20px] bg-slate-200 rounded animate-pulse"></div>
                </div>
              ))
            : events?.map((event: any) => (
                <div key={event.eventID} className="grid">
                  <div className="relative bg-slate-50 border border-slate-200 p-2 sm:p-4 rounded-lg flex flex-col justify-start gap-4">
                    <Link
                      className="w-full"
                      href={`${process.env.NEXT_PUBLIC_SITE_URL}/event/${event.eventID}`}
                    >
                      <img
                        className="rounded-lg"
                        src={event.posterURL}
                        width={600}
                        height={600}
                        alt="Events in Kenya Cinema Nairobi"
                      />
                      <span className="absolute top-0 left-0 m-6 min-w-20 text-center bg-slate-50 text-sm font-semibold text-red-600 px-2 py-1 rounded">
                        {moment(event.start_date).format("D MMM")}
                      </span>
                    </Link>
                    <div className="space-y-2">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_SITE_URL}/event/${event.eventID}`}
                      >
                        <h2 className="font-semibold text-slate-800 text-sm sm:text-lg line-clamp-2">
                          {event.eventName}
                        </h2>
                      </Link>
                      <h3 className="text-sm text-slate-500 flex flex-row items-center gap-2">
                        <span className="">Play</span>
                        <span>
                          <IoEllipse size={8} />
                        </span>
                        <span className="">
                          {event.currency} {event.minAmount}
                        </span>
                      </h3>
                    </div>
                    <div className="absolute right-0 bottom-0">
                      <div className="flex flex-row justify-between items-center">
                        <ShareModal
                          event={{
                            id: `${event.eventID}`,
                            slug: `${event.eventName}`,
                            url: `${process.env.NEXT_PUBLIC_SITE_URL}/event/${event.eventID}`,
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
            className="text-sm font-medium inline-flex flex-row items-center gap-2 bg-primary-500 text-slate-700 rounded px-4 py-2"
          >
            View more <IoChevronForwardOutline size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
