"use client";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useAccount } from "@/providers/account/account";
import { FiUser } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import ThemeToggle from "@/components/theme/mode";
import { GoSignOut } from "react-icons/go";
import { useRouter } from "next-nprogress-bar";
import signOut from "@/app/(auth)/logout/logout";

export default function Navbar(props: any) {
  const router = useRouter();
  const { user, title, button } = props;
  const { userData, setUserData } = useAccount();
  const accountLogout = async () => {
    const res = await signOut();
    router.push("/");
  };
  return (
    <div className="w-full z-40 px-6 py-4 flex flex-row items-center justify-between ps-16 sm:ps-6 sticky top-0 h-16 bg-slate-100/10 backdrop-blur-lg backdrop-filter border-b border-slate-200 dark:border-slate-800 dark:bg-gray-900/80">
      <div className="text-slate-700 dark:text-slate-50 font-medium">
        {title}
      </div>
      <div className="flex flex-row gap-4 items-center">
        {button && (
          <Link
            href={button.link}
            className="bg-slate-800 dark:bg-slate-800 text-slate-100 dark:text-slate-50 px-4 py-2 text-sm font-medium border border-slate-300 dark:border-slate-700 rounded flex flx-row items-center gap-2"
          >
            {button.icon} {button.title}
          </Link>
        )}
        <Menu>
          <MenuButton className="transition-all duration-300 flex flex-row justify-between items-center gap-2 rounded-full focus:outline-none data-[hover]:bg-slate-300 dark:data-[hover]:bg-slate-800 data-[open]:bg-slate-300 dark:data-[open]:bg-slate-800">
            <div className="flex flex-row items-center gap-2">
              <div className="relative overflow-clip transition-colors duration-300 w-10 h-10 flex flex-row items-center justify-center rounded-full bg-slate-300/40 dark:bg-slate-700/40 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 text-slate-500 dark:text-slate-400">
                <FiUser size={20} />
              </div>
            </div>
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-64 mt-4 z-50 origin-top-right rounded shadow-lg border border-slate-900/5 dark:border-white/5  bg-slate-100 dark:bg-slate-800 p-1 text-sm/6 text-gray-700 dark:text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
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
            <MenuItem>{({ close }) => <ThemeToggle close={close} />}</MenuItem>
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
  );
}
