"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  console.log(theme);
  return (
    <button
      type="button"
      className="relative swap swap-rotate flex items-center justify-center h-[45px] w-[45px] rounded-full focus:outline-none"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? (
        <IoMoon
          size={20}
          aria-hidden="true"
          className="theme-controller text-slate-800"
        />
      ) : (
        <IoSunny
          size={20}
          aria-hidden="true"
          className="theme-controller text-yellow-400"
        />
      )}
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
