"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next-nprogress-bar";
import { TfiClose, TfiAlignRight } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { useEffect, useState } from "react";
import SignOut from "@/app/(auth)/logout/logout";
import ReactLoading from "react-loading";

export default function Navbar(props: any) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = props;
  const [navmode, setMode] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loadingSignOut, setLoadingSignOut] = useState(false);
  useEffect(() => {
    if (document.documentElement.scrollTop > 0) {
      setMode("floating");
    }
    function onScroll() {
      let navpos = document.documentElement.scrollTop;
      if (navpos > 0) {
        setMode("floating");
      } else {
        setMode("");
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const navigation = [
    {
      id: "1",
      name: "Events",
      href: `${process.env.NEXT_PUBLIC_SITE_URL}/events`,
      current: pathname === "/events" || pathname.includes("events"),
    },
    {
      id: "2",
      name: "Flights",
      href: "/flights",
      current: pathname === "/flights" || pathname.includes("flights"),
    },
    {
      id: "3",
      name: "Hotels",
      href: "https://madfun.com/hotels",
      current: pathname === "/hotels" || pathname.includes("hotels"),
    },
    {
      id: "4",
      name: "Travel",
      href: "/travel",
      current: pathname === "/travel" || pathname.includes("travel"),
    },
    {
      id: "5",
      name: "Streams",
      href: "https://streams.madfun.com",
      current: pathname === "/streams" || pathname.includes("streams"),
    },
  ];

  const setInitials = (fullName: string) => {
    let names = fullName
        .trim()
        .split(" ")
        .filter((name) => name !== ""),
      initials = "";
    if (names.length > 0) {
      initials = names[0].substring(0, 1).toUpperCase();
    }
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  };

  const signOut = async () => {
    setIsDropdownOpen(false);
    setLoadingSignOut(true);
    await SignOut();
    setTimeout(() => {
      setLoadingSignOut(false);
    }, 1000);
  };

  const routeEvents = () => {
    if (user) {
      router.push("/account/events/create");
      localStorage.removeItem("mf_redirectURL");
      router;
    } else {
      localStorage.setItem("mf_redirectURL", "/account/events/create");
      router.push("/login");
    }
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full transition-all duration-300 top-0 z-[60] ${
        pathname === "/"
          ? `bg-gradient-to-b ${
              navmode === "floating"
                ? "from-white to-white"
                : "from-slate-800/20 to-transparent"
            } `
          : `bg-white`
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[85rem] px-2 sm:px-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 z-50 flex items-center sm:hidden">
                <DisclosureButton
                  className={`relative inline-flex items-center justify-center rounded-md p-2 ${
                    pathname === "/"
                      ? `${
                          navmode === "floating"
                            ? "text-slate-800"
                            : "text-white"
                        }`
                      : "text-slate-800"
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
                      pathname === "/"
                        ? `${
                            navmode === "floating"
                              ? "text-slate-800"
                              : "text-white"
                          }`
                        : "text-slate-800"
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
                                    ? "text-white hover:text-primary-500 before:bg-white"
                                    : "text-slate-700 hover:text-slate-800 before:bg-slate-800 "
                                } `
                              : `${
                                  pathname === "/"
                                    ? `${
                                        navmode === "floating"
                                          ? "text-slate-800 hover:text-slate-700 hover:before:w-full before:bg-slate-800"
                                          : "text-white hover:text-primary-500 hover:before:w-full before:bg-primary-500"
                                      }`
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
                    className={`relative transition-all duration-300 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-0.5 ${
                      pathname === "/"
                        ? `${
                            navmode === "floating"
                              ? "text-slate-800 hover:text-slate-700 hover:before:w-full before:bg-slate-800"
                              : "text-white hover:text-primary-500 hover:before:w-full before:bg-primary-500"
                          }`
                        : "text-slate-700 hover:text-slate-800 hover:before:w-full before:bg-slate-800"
                    } px-4 py-2 rounded flex flex-row gap-2 items-center`}
                  >
                    Contact us
                  </Link>
                  <button
                    className={`relative transition-all duration-300 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-0.5 ${
                      pathname === "/"
                        ? `${
                            navmode === "floating"
                              ? "text-slate-800 hover:text-slate-700 hover:before:w-full before:bg-slate-800"
                              : "text-white hover:text-primary-500 hover:before:w-full before:bg-primary-500"
                          }`
                        : "text-slate-700 hover:text-slate-800 hover:before:w-full before:bg-slate-800"
                    } px-4 py-2 rounded flex flex-row gap-2 items-center`}
                    onClick={() => routeEvents()}
                  >
                    <IoAdd size={20} />
                    Create event
                  </button>
                  {user ? (
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="w-12 h-12 flex flex-row items-center justify-center rounded-full bg-slate-800 text-slate-300 font-extrabold tracking-widest"
                        onClick={toggleDropdown}
                      >
                        {loadingSignOut ? (
                          <ReactLoading
                            className=""
                            type="spin"
                            color="#ffd100"
                            width={28}
                            height={28}
                          />
                        ) : (
                          setInitials(user.user_metadata.name)
                        )}
                      </div>
                      {isDropdownOpen && (
                        <div
                          tabIndex={0}
                          className="dropdown-content rounded menu bg-white mt-2 z-[1] w-52 p-2 shadow"
                        >
                          <div className="flex flex-col pb-1 border-b border-slate-100 text-slate-600">
                            <Link
                              href="/account"
                              className="w-full rounded transition-all duration-300 px-4 py-2 hover:bg-slate-200 flex flex-row justify-start"
                            >
                              My Account
                            </Link>

                            <Link
                              href="/account/events"
                              className="w-full rounded transition-all duration-300 px-4 py-2 hover:bg-slate-200 flex flex-row justify-start"
                            >
                              Manage Events
                            </Link>
                          </div>
                          <button
                            className="mt-1 w-full rounded text-slate-600 transition-all duration-300 px-4 py-2 hover:bg-slate-200 flex flex-row justify-start"
                            onClick={() => signOut()}
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-row gap-5">
                      <Link
                        href="/login"
                        className={`transition-all duration-300 border  px-6 py-1.5 rounded flex flex-row gap-2 items-center ${
                          pathname === "/"
                            ? `${
                                navmode === "floating"
                                  ? "border-slate-700 text-slate-700 hover:border-slate-500 hover:text-slate-600"
                                  : "border-white text-white hover:border-slate-300 hover:text-slate-300"
                              }`
                            : "border-slate-700 text-slate-700 hover:border-slate-600 hover:text-slate-600"
                        }`}
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className={`transition-all duration-300 px-6 py-1.5 rounded flex flex-row gap-2 items-center ${
                          pathname === "/"
                            ? `${
                                navmode === "floating"
                                  ? "bg-slate-800 text-white hover:bg-slate-600"
                                  : "bg-white text-slate-800 hover:bg-slate-300"
                              }`
                            : "bg-slate-800 text-white hover:bg-slate-600"
                        }`}
                      >
                        Signup
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div
              className={`relative space-y-1 px-2 pb-3 pt-2 bg-white animate-in fade-in zoom-in sm:animate-none m-4 mt-2 rounded ${
                navmode === "floating" ? "border border-slate-200" : "shadow-lg"
              }`}
            >
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
                    className={`flex flex-row gap-2 m-3 items-center justify-center bg-primary-500 text-slate-800 rounded-md px-3 py-2 text-base font-medium`}
                  >
                    <IoAdd size={18} />
                    Create event
                  </DisclosureButton>
                </Link>
                <div className="flex flex-row gap-5 items-center m-3">
                  <Link href="/login">
                    <DisclosureButton
                      as="span"
                      className="border border-slate-600 text-slate-800 px-6 py-1.5 rounded flex flex-row gap-2 items-center"
                    >
                      Login
                    </DisclosureButton>
                  </Link>
                  <Link href="/register">
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
