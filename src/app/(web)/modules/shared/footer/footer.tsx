import Link from "next/link";
import moment from "moment";
import Image from "next/image";
export default function Footer() {
  return (
    <section className="relative">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-0">
        <div className="flex flex-col md:flex-row py-8">
          <div className="w-full md:w-1/3 md:py-6 md:pe-5 space-y-4">
            <Link
              href="/"
              className="flex items-center text-slate-600 font-extrabold uppercase"
            >
              <Image
                className="w-[50px] h-[50px]"
                width={50}
                height={50}
                src="/assets/img/logos/logo.svg"
                alt="Madfun Logo"
              />
            </Link>
            <p className="text-slate-600">
              Madfun is a B2B and B2C Online Ticketing Platform which aims to
              build a dynamic and service oriented Travel Market in the World
            </p>
            <Link
              href="/"
              className="bg-slate-800 inline-block w-auto text-slate-50 px-5 py-2 rounded-lg"
            >
              Partner with us
            </Link>
          </div>
          <div className="w-full md:w-2/3 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid">
                <div className="flex flex-col gap-y-5">
                  <h3 className="font-semibold text-lg text-slate-800 ">
                    Quick links
                  </h3>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Check Movies Playing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Book Flight
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Explore Holiday destinations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/social-media-management"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        About Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid">
                <div className="flex flex-col gap-y-5">
                  <h3 className="font-semibold text-lg text-slate-800 ">
                    Our Services
                  </h3>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Movie tickets
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Event tickets
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Flight tickets
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Travel packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-600 hover:text-slate-700"
                      >
                        Holiday packages
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid">
                <div className="flex flex-col gap-y-5">
                  <h3 className="font-semibold text-lg text-slate-800 ">
                    Contact us
                  </h3>
                  <ul className="flex flex-col gap-4 text-slate-600">
                    <li>
                      4th Floor, Kalson towers
                      <br />
                      76738 - 00200, Nairobi
                    </li>
                    <li>+254 115 555 000</li>
                    <li>info@madfun.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center px-4 py-4 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Copyright &copy; Madfun {moment(Date.now()).format("Y")}
          </p>
        </div>
      </div>
    </section>
  );
}
