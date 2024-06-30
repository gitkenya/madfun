import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import LoginForm from "./modules/form";

export default function Page() {
  const header = headers();
  const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg">
        <div className="hidden md:block p-20 min-h-screen"></div>
        <div className="bg-slate-100 py-5 md:py-12 flex flex-col items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
