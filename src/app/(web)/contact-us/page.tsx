import { headers } from "next/headers";
import {
  IoLocationOutline,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import ContactForm from "./modules/form";

export default async function Page() {
  const header = headers();
  const ip =
    process.env.NODE_ENV === "production"
      ? (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
      : await fetch("https://api.ipify.org?format=json")
          .then((res) => res.json())
          .then((data) => data.ip);
  const geoData = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_GEO}&ip=${ip}`,
    { cache: "force-cache" }
  );
  const response = await geoData.json();
  return (
    <section className="w-full py-8 bg-slate-100">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 pt-10 sm:pt-12">
        <div className="flex flex-col items-center justify-center text-center max-w-[30rem] mx-auto py-8">
          <h1 className="flex flex-row items-center justify-center gap-3 font-poppins text-lg sm:text-4xl uppercase font-bold text-slate-800 tracking-wider">
            Contact us
          </h1>
          <p className="text-slate-600">
            React out to us for inquiries, support, or to request a custom quote
            for premium event services
          </p>
        </div>
        <div className="w-full max-w-[60rem] mx-auto p-4 border-2 border-primary-300 bg-slate-50 rounded-xl relative flex flex-col sm:flex-row-reverse gap-4 sm:gap-x-12">
          <div className="w-full sm:w-2/3">
            <ContactForm ipAddress={ip} geoData={response} />
          </div>
          <div className="w-full sm:w-1/3 bg-primary-500 rounded-lg sm:rounded-xl p-4 sm:min-h-80 flex flex-col justify-between gap-4 text-slate-800">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold font-poppins text-lg">
                Contact information
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <IoLogoWhatsapp size={24} />
                  </span>
                  +254 115 555 000
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <IoMailOutline size={24} />
                  </span>
                  info@madfun.com
                </div>
                <div className="flex flex-row items-start gap-2">
                  <span>
                    <IoLocationOutline size={24} />
                  </span>
                  4th Floor, Kalson towers
                  <br />
                  76738 - 00620 Nairobi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
