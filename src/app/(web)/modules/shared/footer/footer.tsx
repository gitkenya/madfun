import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import {
  IoChevronForwardOutline,
  IoLocation,
  IoLogoFacebook,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
export default function Footer() {
  return (
    <section className="relative bg-slate-800">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-0 pt-10 sm:pt-16">
        <div className="px-2 sm:px-6">
          <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 border border-slate-700 p-5 rounded-lg">
            <div className="flex flex-row sm:justify-center items-center gap-3 sm:border-r sm:border-slate-700">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-500 rounded flex flex-row items-center justify-center text-slate-800">
                <IoMdCall className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div className="flex flex-col gap-1 text-slate-200 text-sm sm:text-base">
                <div className="font-poppins font-semibold">Call us</div>
                <div>+254 115 555 000</div>
              </div>
            </div>
            <div className="flex flex-row sm:justify-center items-center gap-3 sm:border-r sm:border-slate-700">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-500 rounded flex flex-row items-center justify-center text-slate-800">
                <IoMail className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div className="flex flex-col gap-1 text-slate-200 text-sm sm:text-base">
                <div className="font-poppins font-semibold">Write to us</div>
                <div>info@madfun.com</div>
              </div>
            </div>
            <div className="flex flex-row sm:justify-center items-center gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-500 rounded flex flex-row items-center justify-center text-slate-800">
                <IoLocation className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div className="flex flex-col gap-1 text-slate-200 text-sm sm:text-base">
                <div className="font-poppins font-semibold">Address</div>
                <div>4th floor, Kalson Towers, Nairobi</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row py-8">
          <div className="w-full md:w-1/3 p-4 sm:px-6 md:py-6 md:pe-5 space-y-4">
            <Link
              href="/"
              className="flex items-center text-slate-600 font-extrabold uppercase"
            >
              <Image
                className="w-[45px] h-[45px]"
                width={45}
                height={45}
                src="/assets/img/logos/logo.svg"
                alt="Madfun Logo"
              />
            </Link>
            <p className="text-slate-300 font-light">
              Madfun is an event and travel company offerring seamless solutions
              for users to create & manage events, buy tickets, book flights and
              accommodation with ease.
            </p>
            <Link
              href="/"
              className="transition-colors duration-300 text-slate-200 hover:text-yellow-400 text-sm font-medium flex flex-row items-center gap-2"
            >
              Read more about us <IoChevronForwardOutline size={20} />
            </Link>
            <div className="flex flex-row gap-4">
              <Link
                href="https://www.facebook.com/wearemadfun"
                target="_blank"
                className="transition-all duration-300 inline-flex flex-row items-center justify-center w-10 h-10 bg-slate-50/30 hover:bg-indigo-700 rounded-full text-slate-900 hover:text-white"
              >
                <IoLogoFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/weare_madfun"
                target="_blank"
                className="transition-all duration-300 inline-flex flex-row items-center justify-center w-10 h-10 bg-slate-50/30 hover:bg-blue-400 rounded-full text-slate-900 hover:text-white"
              >
                <IoLogoTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/wearemadfun/"
                target="_blank"
                className="transition-all duration-300 inline-flex flex-row items-center justify-center w-10 h-10 bg-slate-50/30 hover:bg-gradient-to-b hover:from-purple-600 hover:via-pink-600 hover:to-amber-600 rounded-full text-slate-900 hover:text-white"
              >
                <RiInstagramFill className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid sm:mx-auto">
                <div className="flex flex-col gap-y-2 sm:gap-y-5">
                  <h3 className="font-poppins font-semibold text-lg text-slate-200 ">
                    Quick links
                  </h3>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-300 hover:text-slate-200"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-300 hover:text-slate-200"
                      >
                        Events guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-300 hover:text-slate-200"
                      >
                        Fun times
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-300 hover:text-slate-200"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="transition-all duration-300 text-sm text-slate-300 hover:text-slate-200"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid">
                <div className="flex flex-col gap-y-2 sm:gap-y-5">
                  <h3 className="font-poppins font-semibold text-lg text-slate-200 ">
                    Subscribe
                  </h3>
                  <p className="font-light text-slate-200">
                    Signup for our monthly newsletter to stay informed about
                    travel and events
                  </p>
                  <div className="relative flex flex-row justify-between items-center">
                    <input
                      type="email"
                      className="appearance-none block w-full outline-none text-sm border border-slate-300 text-slate-800 bg-slate-100 rounded-lg py-5 px-4 sm:px-8 pe-16 focus:outline-none"
                      placeholder="Email Address"
                    />
                    <button
                      type="button"
                      className="absolute right-0 mr-4 bg-slate-900 rounded-lg px-3 py-2 text-sm text-slate-50"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center px-4 py-4 bg-slate-900/40">
        <p className="text-sm text-slate-400 font-light">
          &copy; {moment(Date.now()).format("Y")} Madfun. All rights reserved
        </p>
      </div>
    </section>
  );
}
