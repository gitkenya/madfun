"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import { TfiClose, TfiBell, TfiAlignLeft } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "@/components/theme/theme";
import { MdMenuBook, MdVideoLibrary } from "react-icons/md";
import { IoAdd, IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import { BsCalendar2Check } from "react-icons/bs";
import { SlPlane } from "react-icons/sl";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Navbar(props: any) {
  const { user } = props;
  const pathname = usePathname();
  const navigation = [
    { name: "Streams", href: "/streams", current: pathname === "/streams" },
    { name: "Events", href: "/events", current: pathname === "/events" },
    { name: "Travel", href: "/travel", current: pathname === "/travel" },
    {
      name: "Marketplace",
      href: "/marketplace",
      current: pathname === "/marketplace",
    },
  ];
  return (
    <Disclosure
      as="nav"
      className="sticky w-full top-0 z-50 bg-slate-50 border-b border-slate-200"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[90rem] px-2 md:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <TfiClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <TfiAlignLeft
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-start ps-12 sm:ps-0 sm:items-center sm:justify-between">
                <Link
                  href="/"
                  className="flex items-center text-slate-600 font-extrabold uppercase"
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
                    <Link
                      href="/streams"
                      className={`transition-all duration-300 text-slate-800 rounded-full px-4 py-2 text-sm font-medium flex flex-row items-center gap-2
                        `}
                    >
                      <MdVideoLibrary size={18} />
                      Streams
                    </Link>
                    <Link
                      href="/events"
                      className={`transition-all duration-300 text-slate-800 rounded-full px-4 py-2 text-sm font-medium flex flex-row items-center gap-2
                        `}
                    >
                      <BsCalendar2Check size={18} />
                      Events
                    </Link>
                    <Link
                      href="/travel"
                      className={`transition-all duration-300 text-slate-800 rounded-full px-4 py-2 text-sm font-medium flex flex-row items-center gap-2
                        `}
                    >
                      <SlPlane size={18} />
                      Travel
                    </Link>
                    <Link
                      href="/marketplace"
                      className={`transition-all duration-300 text-slate-800 rounded-full px-4 py-2 text-sm font-medium flex flex-row items-center gap-2
                        `}
                    >
                      <IoBagHandleOutline size={18} />
                      Marketplace
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center gap-5 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden md:flex gap-4">
                    <Link
                      href="/"
                      className="border border-slate-800 text-slate-800 text-sm px-4 py-2 rounded flex flex-row gap-2 items-center"
                    >
                      <IoAdd size={18} />
                      Create an event
                    </Link>
                    <Link
                      href="/"
                      className="text-slate-800 text-sm px-6 py-2 rounded flex flex-row gap-2 items-center"
                    >
                      <IoPersonOutline size={18} />
                      Signup / Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
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
