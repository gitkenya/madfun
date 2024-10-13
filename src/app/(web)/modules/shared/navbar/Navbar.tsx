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
      current: pathname === "events",
    },
    {
      id: "2",
      name: "Flights",
      href: "/",
      current: pathname === "flights",
    },
    {
      id: "3",
      name: "Hotels",
      href: "/",
      current: pathname === "hotels",
    },
    {
      id: "4",
      name: "Travel",
      href: "/",
      current: pathname === "travel",
    },
    {
      id: "5",
      name: "Streams",
      href: "/",
      current: pathname === "streams",
    },
  ];
  return (
    <Disclosure
      as="nav"
      className={`absolute w-full top-0 z-50 bg-gradient-to-b from-slate-800/20 to-transparent`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[90rem] px-2 md:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 z-50 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-50 focus:outline-none">
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
                    className="flex items-center text-white font-extrabold uppercase"
                  >
                    <Image
                      className="w-[56px] h-[50px]"
                      width={56}
                      height={50}
                      src="/assets/img/logos/logo.svg"
                      alt="Madfun Logo"
                    />
                  </Link>
                  <div className="hidden items-center sm:ml-6 sm:block">
                    <div className="flex items-center space-x-4">
                      {navigation.map((nav: any) => (
                        <Link
                          key={nav.id}
                          href={nav.href}
                          className={`transition-all duration-300 ${
                            pathname === nav.pathname ||
                            pathname.includes(nav.pathname)
                              ? "bg-slate-800 text-slate-50"
                              : "text-slate-50 hover:text-yellow-400"
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
                    className="text-slate-50 px-4 py-2 rounded flex flex-row gap-2 items-center"
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/"
                    className="text-slate-50 px-4 py-2 rounded flex flex-row gap-2 items-center"
                  >
                    <IoAdd size={18} />
                    Create event
                  </Link>
                  <Link
                    href="/"
                    className="border border-slate-50 text-slate-50 px-6 py-1.5 rounded flex flex-row gap-2 items-center"
                  >
                    Login
                  </Link>
                  <Link
                    href="/"
                    className="bg-slate-50 text-slate-800 px-6 py-1.5 rounded flex flex-row gap-2 items-center"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-slate-50">
              {navigation.map((item, index) => (
                <Link href={item.href} key={index}>
                  <DisclosureButton
                    key={index}
                    as="span"
                    className={`
                      ${
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-slate-800 hover:bg-gray-700 hover:text-white"
                      }
                      block rounded-md px-3 py-2 text-base font-medium
                    `}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
