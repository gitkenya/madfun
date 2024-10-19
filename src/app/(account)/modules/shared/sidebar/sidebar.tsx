"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TfiAlignLeft } from "react-icons/tfi";
import { RiShareForwardLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import {
  IoAddOutline,
  IoCloseOutline,
  IoEllipsisVerticalOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoMailOutline,
  IoCalendarOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { useRouter } from "next-nprogress-bar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import signOut from "@/app/(auth)/logout/logout";
import { GoSignOut } from "react-icons/go";
import ThemeToggle from "@/components/theme/mode";
import { BsGrid1X2 } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import ReactLoading from "react-loading";
import { useAccount } from "@/providers/account/account";
import { FiUser } from "react-icons/fi";

export default function Sidebar(props: any) {
  const { userAccount } = props;
  const router = useRouter();
  const pathname = usePathname();
  const { userData, setUserData, loadingUser, setLoadingUser } = useAccount();
  const [loadingMode, setLoadingMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setUserData(userAccount);
    setLoadingUser(false);
  }, []);

  const links = [
    {
      href: "/account",
      class: "",
      label: "Dashboard",
      icon: <BsGrid1X2 size={20} />,
      condition: pathname === "/account",
    },
    {
      href: "/account/events",
      class: "",
      label: "Manage Events",
      icon: <IoCalendarOutline size={22} />,
      condition: pathname === "/account/events" || pathname.includes("events"),
    },
    {
      href: "/account/marketing",
      class: "",
      label: "Marketing Tools",
      icon: <CiBullhorn size={22} />,
      condition:
        pathname === "/account/marketing" || pathname.includes("marketing"),
    },
    {
      href: "/account/finance",
      class: "",
      label: "Financial Overview",
      icon: <AiOutlineDollar size={22} />,
      condition:
        pathname === "/account/finance" || pathname.includes("finance"),
    },
    {
      href: "/account/notifications",
      class: "",
      label: "Notifications",
      icon: <IoNotificationsOutline size={22} />,
      condition:
        pathname === "/account/notifications" ||
        pathname.includes("notifications"),
    },
    {
      href: "/account/learn-more",
      class: "",
      label: "Learn more",
      icon: <IoInformationCircleOutline size={22} />,
      condition:
        pathname === "/account/learn-more" || pathname.includes("learn-more"),
    },
  ];

  const support = [
    {
      href: "/account/feedback",
      class: "",
      label: "Feedback",
      icon: <RiShareForwardLine size={18} />,
      condition:
        pathname === "/account/feedback" || pathname.includes("feedback"),
    },
    {
      href: "/account/support",
      class: "",
      label: "Help & Support",
      icon: <IoMailOutline size={18} />,
      condition:
        pathname === "/account/support" || pathname.includes("support"),
    },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const accountLogout = async () => {
    const res = await signOut();
    router.push("/");
  };

  return (
    <div className="">
      <div
        className={`drawer absolute top-0 sm:hidden transition-all duration-300 ${
          drawerOpen ? "drawer-open  bg-slate-800/60 z-50" : ""
        }`}
      >
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={toggleDrawer}
        />
        <div
          className={`drawer-content absolute top-0 m-2 mt-2.5 z-50 ${
            drawerOpen ? "hidden" : ""
          } flex flex-row items-center justify-between px-4 py-2`}
        >
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="text-slate-800 dark:text-white drawer-button cursor-pointer"
          >
            <TfiAlignLeft size={24} />
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu relative bg-slate-100 dark:bg-gray-900 border-r border-slate-200 dark:border-slate-800 text-base-content min-h-full w-80 p-4">
            <button
              className={`absolute right-0 top-0 m-2 ${
                drawerOpen ? "" : "hidden"
              } text-slate-800 dark:text-slate-50 z-50 bg-slate-50/50 dark:bg-slate-900/50 p-2 rounded-full`}
              onClick={closeDrawer}
            >
              <IoCloseOutline size={20} />
            </button>
            {/* Sidebar content here */}
            <div className="w-full h-[calc(100vh-36px)] flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="relative top-0 w-full text-right step-1">
                  <div className="flex flex-row items-center gap-2 px-2 text-slate-700 dark:text-slate-300 font-bold">
                    <Image
                      className="rounded"
                      src="/assets/img/logos/logo.svg"
                      width={40}
                      height={40}
                      alt="Madfun"
                    />
                    Madfun
                  </div>
                </div>
                <nav className="flex flex-col text-slate-600 gap-1 pt-8">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`transition-all duration-300 px-4 py-2.5 rounded ${
                        link.condition
                          ? "bg-slate-300/50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                          : "text-slate-800 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-800"
                      } flex flex-row items-center justify-between gap-2 text-sm`}
                      onClick={closeDrawer}
                    >
                      <span className="flex flex-row items-center gap-2">
                        {link.icon}
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="relative w-full flex flex-col gap-2">
                <Menu>
                  <MenuButton className="transition-all duration-300 flex flex-row justify-between w-full items-center gap-2 rounded hover:bg-slate-300 dark:hover:bg-slate-800 py-1.5 px-3 text-sm/6 font-semibold text-gray-700 dark:text-gray-300 focus:outline-none data-[hover]:bg-slate-300 dark:data-[hover]:bg-slate-800 data-[open]:bg-slate-300 dark:data-[open]:bg-slate-800">
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-col items-center justify-center bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400 w-8 h-8 rounded">
                        <FiUser size={20} />
                      </div>
                      {userData?.name}
                    </div>
                    <IoEllipsisVerticalOutline className="size-4 text-gray-700 dark:text-slate-50 data-[open]:text-teal-600" />
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-64 -mt-2 z-50 origin-top-right rounded border border-slate-900/5 dark:border-white/5  bg-slate-200 dark:bg-slate-800 p-1 text-sm/6 text-gray-700 dark:text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <MenuItem>
                      <div className="flex flex-col gap-1 px-3 py-1.5">
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Signed in as
                        </div>
                        <div className="line-clamp-1 text-sm text-slate-700 dark:text-slate-400">
                          {userData?.email}
                        </div>
                      </div>
                    </MenuItem>
                    <div className="my-1 h-px bg-slate-900/5 dark:bg-white/5" />
                    <MenuItem>
                      {({ close }) => <ThemeToggle close={close} />}
                    </MenuItem>
                    <div className="my-1 h-px bg-slate-300/60 dark:bg-white/5" />
                    <MenuItem>
                      {({ close }) => (
                        <Link
                          href="/account/profile"
                          className="group transition-all duration-300 flex w-full items-center text-sm text-slate-700 dark:text-slate-300 gap-2 rounded py-1.5 my-1 px-3 hover:bg-slate-300 dark:hover:bg-slate-700"
                          onClick={close}
                        >
                          <IoPersonOutline className="size-4 text-slate-600 dark:text-slate-500" />
                          My Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ close }) => (
                        <button
                          className="group transition-all duration-300 flex w-full items-center text-sm text-slate-700 dark:text-slate-300 gap-2 rounded py-1.5 my-1 px-3 hover:bg-slate-300 dark:hover:bg-slate-700"
                          onClick={() => {
                            accountLogout();
                            close();
                          }}
                        >
                          <GoSignOut className="size-4 text-slate-600 dark:text-slate-500" />
                          Sign out
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-72 bg-slate-100 dark:bg-gray-900 h-screen border-r border-slate-200 dark:border-gray-800 p-4">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="relative top-0 w-full text-right step-1">
              <div className="flex flex-row items-center gap-2 px-2 text-slate-700 dark:text-slate-300 font-bold">
                <Image
                  className="rounded"
                  src="/assets/img/logos/logo.svg"
                  width={40}
                  height={40}
                  alt="Madfun"
                />
                Madfun
              </div>
            </div>
            <nav className="flex flex-col text-slate-600 gap-1">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`transition-all duration-300 px-4 py-2.5 rounded ${
                    link.class
                  } ${
                    link.condition
                      ? "bg-slate-300/50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                      : "text-slate-800 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-800"
                  } flex flex-row items-center justify-between gap-2 text-sm`}
                  onClick={closeDrawer}
                >
                  <span className="flex flex-row items-center gap-2">
                    {link.icon}
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="relative w-full flex flex-col gap-2">
            <Menu>
              <MenuButton className="transition-all duration-300 flex flex-row justify-between w-full items-center gap-2 rounded hover:bg-slate-300 dark:hover:bg-slate-800 py-1.5 px-3 text-sm/6 font-semibold text-gray-700 dark:text-gray-300 focus:outline-none data-[hover]:bg-slate-300 dark:data-[hover]:bg-slate-800 data-[open]:bg-slate-300 dark:data-[open]:bg-slate-800">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col items-center justify-center bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400 w-8 h-8 rounded">
                    <FiUser size={20} />
                  </div>
                  {userData?.name}
                </div>
                <IoEllipsisVerticalOutline className="size-4 text-gray-700 dark:text-slate-50 data-[open]:text-teal-600" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-64 -mt-2 origin-top-right rounded border border-slate-900/5 dark:border-white/5  bg-slate-200 dark:bg-slate-800 p-1 text-sm/6 text-gray-700 dark:text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <div className="flex flex-col gap-1 px-3 py-1.5">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Signed in as
                    </div>
                    <div className="line-clamp-1 text-sm text-slate-700 dark:text-slate-400">
                      {userData?.email}
                    </div>
                  </div>
                </MenuItem>
                <div className="my-1 h-px bg-slate-900/5 dark:bg-white/5" />
                <MenuItem>
                  {({ close }) => <ThemeToggle close={close} />}
                </MenuItem>
                <div className="my-1 h-px bg-slate-300/60 dark:bg-white/5" />
                <MenuItem>
                  {({ close }) => (
                    <Link
                      href="/account/profile"
                      className="group transition-all duration-300 flex w-full items-center text-sm text-slate-700 dark:text-slate-300 gap-2 rounded py-1.5 my-1.5 px-3 hover:bg-slate-300 dark:hover:bg-slate-700"
                      onClick={close}
                    >
                      <IoPersonOutline className="size-4 text-slate-600 dark:text-slate-500" />
                      My Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ close }) => (
                    <button
                      className="group transition-all duration-300 flex w-full items-center text-sm text-slate-700 dark:text-slate-300 gap-2 rounded py-1.5 my-1.5 px-3 hover:bg-slate-300 dark:hover:bg-slate-700"
                      onClick={() => {
                        accountLogout();
                        close();
                      }}
                    >
                      <GoSignOut className="size-4 text-slate-600 dark:text-slate-500" />
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
