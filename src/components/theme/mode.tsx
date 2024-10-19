"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = React.forwardRef(
  (props: any, ref: React.Ref<HTMLButtonElement>) => {
    const { close } = props;
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <button
        ref={ref}
        className="group transition-all duration-300 flex w-full items-center text-sm text-slate-700 dark:text-slate-300 gap-2 rounded py-1.5 px-3 hover:bg-slate-300 dark:hover:bg-slate-700 data-[focus]:bg-slate-300 dark:data-[focus]:bg-slate-700"
        onClick={() => {
          theme == "dark" ? setTheme("light") : setTheme("dark");
          close();
        }}
      >
        {theme === "light" ? (
          <>
            <IoMoonOutline
              aria-hidden="true"
              className="theme-controller size-4 text-slate-600 dark:text-slate-500"
            />
            Switch to dark theme
          </>
        ) : (
          <>
            <IoSunnyOutline
              aria-hidden="true"
              className="theme-controller size-4 text-slate-600 dark:text-slate-500"
            />
            Switch to light theme
          </>
        )}
      </button>
    );
  }
);

export default ThemeToggle;
