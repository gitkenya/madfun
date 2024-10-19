"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ForgotPassword } from "./actions";
import ForgotButton from "./button";
import { useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "sonner";

export default function ForgotForm() {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const [passMode, setPassMode] = useState("password");
  return (
    <div className="w-full px-4 sm:px-12">
      <div className="mb-6 flex items-center gap-4">
        <Image
          className=""
          src="/assets/img/logos/logo.svg"
          width={60}
          height={60}
          alt="Madfun Events & Travel"
        />
        <div>
          <div className="font-bold text-xl sm:text-2xl text-slate-800">
            Forgot password
          </div>
          <div className=" text-slate-700">Enter your registered email</div>
        </div>
      </div>
      <form
        className="form"
        action={async (formData) => {
          // Input Validation
          const res = await ForgotPassword(formData);
          console.log(res);
          if (!res.success) {
            // Error Login message
            toast.error(res.info.title, {
              description: res.info.message,
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
          } else if (res.success) {
            localStorage.setItem(
              "resetMadfunData",
              JSON.stringify(res.info.resetData)
            );
            ref.current?.reset();
            toast.success(res.info.title, {
              description: res.info.message,
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
            router.push("/reset-password");
          }
        }}
      >
        <div className="grid grid-cols-1 gap-6">
          <div className="grid">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="forgot_email"
            >
              Email Address
            </label>
            <input
              type="email"
              className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
              id="forgot_email"
              name="forgot_email"
              placeholder="jane@example.com"
              required
            />
          </div>

          <div className="grid">
            <ForgotButton />
          </div>
          <div className="w-full mt-2 text-sm">
            <Link
              href="/login"
              className="transition-all duration-300 flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-slate-600 ms-2"
            >
              <IoArrowBack size={16} />
              Back to Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
