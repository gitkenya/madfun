"use client";
import Link from "next/link";
import DarkModeToggle from "@/components/theme/theme";
import { IoPerson } from "react-icons/io5";
import { useAccount } from "@/providers/account/account";
import { FiUser } from "react-icons/fi";

export default function Navbar(props: any) {
  const { user, title, button } = props;
  const { userData, setUserData } = useAccount();
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
        <div className="transition-colors duration-300 w-9 h-9 flex flex-row items-center justify-center rounded-full bg-slate-300/40 dark:bg-slate-700/40 hover:bg-slate-300/80 dark:hover:bg-slate-700/80">
          <DarkModeToggle />
        </div>
        <Link
          href="/account/profile"
          className="relative overflow-clip transition-colors duration-300 w-10 h-10 hidden sm:flex flex-row items-center justify-center rounded-full bg-slate-300/40 dark:bg-slate-700/40 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 text-slate-500 dark:text-slate-400"
        >
          <FiUser size={20} />
        </Link>
      </div>
    </div>
  );
}
