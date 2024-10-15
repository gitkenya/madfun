import Link from "next/link";
import Image from "next/image";

export default function Insider(props: any) {
  const insiders = [
    {
      id: "1",
      date: "24 Oct, 24",
      time: "5 Min",
      category: "Travel",
      title: "Top 10 Must-Visit Destinations for 2024",
      photo: "/assets/img/insiders/insider-1.jpg",
    },
    {
      id: "2",
      date: "24 Oct, 24",
      time: "3 Min",
      category: "Events",
      title: "How to Plan the Perfect Event",
      photo: "/assets/img/insiders/insider-2.jpg",
    },
    {
      id: "3",
      date: "24 Oct, 24",
      time: "10 Min",
      category: "Streams",
      title: "How to Host and Monetize Your Events Online",
      photo: "/assets/img/insiders/insider-3.jpg",
    },
  ];

  const categoryColor = (cat: string) => {
    if (cat === "Travel") {
      return "text-green-600";
    } else if (cat === "Events") {
      return "text-yellow-400";
    } else if (cat === "Streams") {
      return "text-red-600";
    } else {
      return "text-slate-600";
    }
  };
  return (
    <section className="w-full py-8 sm:py-12 bg-slate-100">
      <div className="mx-auto max-w-[80rem] px-2 md:px-4 space-y-6 mt-2">
        <div className="w-full flex flex-row items-center justify-center">
          <h2 className="text-lg sm:text-3xl font-bold uppercase font-poppins">
            Travel & Events Insider
          </h2>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {insiders?.map((insider: any) => (
            <div key={insider.id} className="grid">
              <div className="relative bg-white border border-slate-200 p-2 sm:p-4 rounded-lg flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-4">
                  <Link className="w-full" href={`/`}>
                    <Image
                      className="rounded-lg"
                      src={insider.photo}
                      width={600}
                      height={400}
                      alt={insider.title}
                    />
                  </Link>
                  <div className="space-y-2">
                    <h2
                      className={`font-semibold uppercase tracking-[0.28em] sm:tracking-[0.28em] text-sm ${categoryColor(
                        insider.category
                      )}`}
                    >
                      {insider.category}
                    </h2>
                    <h3 className="font-semibold sm:text-lg font-poppins">
                      {insider.title}
                    </h3>
                  </div>
                </div>
                <div className="">
                  <h4 className="text-sm text-slate-400 flex flex-row items-center justify-between gap-2">
                    <span className="">{insider.time}</span>
                    <span className="">{insider.date}</span>
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
