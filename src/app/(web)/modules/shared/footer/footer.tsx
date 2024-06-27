import Link from "next/link";
import moment from "moment";
export default function Footer() {
  return (
    <section className="relative">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-7">
        <div className="flex flex-col md:flex-row py-8">
          <div className="w-full md:w-1/3 p-4 md:p-6"></div>
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
