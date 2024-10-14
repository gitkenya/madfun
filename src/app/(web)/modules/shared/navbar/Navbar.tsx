"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import { TfiClose, TfiAlignRight } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";

export default function Navbar(props: any) {
  const pathname = usePathname();
  const navigation = [
    {
      id: "1",
      name: "Events",
      href: "/",
      current: pathname === "/events",
    },
    {
      id: "2",
      name: "Flights",
      href: "/flights",
      current: pathname === "/flights",
    },
    {
      id: "3",
      name: "Hotels",
      href: "/",
      current: pathname === "/hotels",
    },
    {
      id: "4",
      name: "Travel",
      href: "/",
      current: pathname === "/travel",
    },
    {
      id: "5",
      name: "Streams",
      href: "/",
      current: pathname === "/streams",
    },
  ];
  return (
    <Disclosure
      as="nav"
      className={`absolute w-full top-0 z-50 ${
        pathname === "/"
          ? "bg-gradient-to-b from-slate-800/20 to-transparent"
          : "bg-white"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[90rem] px-2 md:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 z-50 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton
                  className={`relative inline-flex items-center justify-center rounded-md p-2 ${
                    pathname === "/" ? "text-white" : "text-slate-800"
                  } focus:outline-none`}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <TfiClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <TfiAlignRight
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <Link
                    href="/"
                    className={`flex items-center gap-4 text-xl ${
                      pathname === "/" ? "text-white" : "text-slate-800"
                    }  font-semibold font-poppins uppercase`}
                  >
                    <Image
                      className="w-[56px] h-[50px]"
                      width={56}
                      height={50}
                      src="/assets/img/logos/logo.svg"
                      alt="Madfun Logo"
                    />
                    <span className="sm:hidden">Madfun</span>
                  </Link>
                  <div className="hidden items-center sm:ml-6 sm:block">
                    <div className="flex items-center space-x-4">
                      {navigation.map((nav: any) => (
                        <Link
                          key={nav.id}
                          href={nav.href}
                          className={`relative transition-all duration-300 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-0.5 ${
                            nav.current
                              ? `before:w-full ${
                                  pathname === "/"
                                    ? "text-white hover:text-yellow-400 before:bg-white"
                                    : "text-slate-700 hover:text-slate-800 before:bg-slate-800 "
                                } `
                              : `${
                                  pathname === "/"
                                    ? "text-white hover:text-yellow-400 hover:before:w-full before:bg-yellow-400"
                                    : "text-slate-700 hover:text-slate-800 hover:before:w-full before:bg-slate-800"
                                }`
                          } rounded px-4 py-2 font-normal flex flex-row items-center gap-2
                        `}
                        >
                          {nav.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-5">
                  <Link
                    href="/"
                    className={`${
                      pathname === "/"
                        ? "text-white hover:text-yellow-400"
                        : "text-slate-700 hover:text-slate-800"
                    } px-4 py-2 rounded flex flex-row gap-2 items-center`}
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/"
                    className={`${
                      pathname === "/"
                        ? "text-white hover:text-yellow-400"
                        : "text-slate-700 hover:text-slate-800"
                    } px-4 py-2 rounded flex flex-row gap-2 items-center`}
                  >
                    <IoAdd size={18} />
                    Create event
                  </Link>
                  <Link
                    href="/"
                    className={`transition-all duration-300 border  px-6 py-1.5 rounded flex flex-row gap-2 items-center ${
                      pathname === "/"
                        ? "border-white text-white hover:border-yellow-400 hover:text-yellow-400"
                        : "border-slate-700 text-slate-70 hover:border-red-500 hover:text-red-500"
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    href="/"
                    className={`transition-all duration-300 px-6 py-1.5 rounded flex flex-row gap-2 items-center ${
                      pathname === "/"
                        ? "bg-white text-slate-800 hover:bg-red-600 hover:text-white"
                        : "bg-slate-800 text-white hover:bg-red-600"
                    }`}
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="relative space-y-1 px-2 pb-3 pt-2 bg-white animate-in fade-in zoom-in sm:animate-none mx-4 rounded shadow-lg">
              {navigation.map((item, index) => (
                <Link href={item.href} key={index}>
                  <DisclosureButton
                    key={index}
                    as="span"
                    className={`
                      ${
                        item.current
                          ? "bg-slate-800 text-white"
                          : "text-slate-800 hover:bg-gray-700 hover:text-white"
                      }
                      block rounded px-3 py-3 text-base font-medium
                    `}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                </Link>
              ))}
              <Link href="/">
                <DisclosureButton
                  as="span"
                  className={`text-slate-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                  Contact us
                </DisclosureButton>
              </Link>
              <div className="absolute bottom-0 right-0">
                <Link href="/">
                  <DisclosureButton
                    as="span"
                    className={`flex flex-row gap-2 m-3 items-center justify-center bg-yellow-400 text-slate-800 rounded-md px-3 py-2 text-base font-medium`}
                  >
                    <IoAdd size={18} />
                    Create event
                  </DisclosureButton>
                </Link>
                <div className="flex flex-row gap-5 items-center m-3">
                  <Link href="/">
                    <DisclosureButton
                      as="span"
                      className="border border-slate-600 text-slate-800 px-6 py-1.5 rounded flex flex-row gap-2 items-center"
                    >
                      Login
                    </DisclosureButton>
                  </Link>
                  <Link href="/">
                    <DisclosureButton
                      as="span"
                      className="bg-slate-800 text-white px-6 py-1.5 rounded flex flex-row gap-2 items-center"
                    >
                      Signup
                    </DisclosureButton>
                  </Link>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
