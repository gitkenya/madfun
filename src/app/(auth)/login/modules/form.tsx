"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { signIn } from "./actions";
import LoginButton from "./button";
import { useRef, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const [passMode, setPassMode] = useState("password");
  return (
    <div className="w-full px-12">
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
            Login to your account
          </div>
          <div className=" text-slate-700">
            No account?{" "}
            <Link
              href="/register"
              className="transition-colors duration-300 font-medium text-yellow-500 hover:text-slate-800 underline"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
      <form
        className="form"
        action={async (formData) => {
          // Input Validation
          const res = await signIn(formData);
          console.log(res);
          if (!res.success) {
            toast.error(res.info.title, {
              description: res.info.message,
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
          } else if (res.success) {
            ref.current?.reset();
            toast.success(res.info.title, {
              description: res.info.message,
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
            router.push("/account");
          }
        }}
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="grid">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="login_email"
            >
              Email Address
            </label>
            <input
              type="email"
              className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
              id="login_email"
              name="login_email"
              placeholder="jane@example.com"
              required
            />
          </div>

          <div className="grid relative">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="login_password"
            >
              Password
            </label>
            <div className="flex relative justify-between items-center">
              <input
                type={passMode}
                name="login_password"
                id="login_password"
                className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
                required
              />
              <span
                className="cursor-pointer absolute right-3 text-2xl text-slate-400 dark:text-slate-500"
                onClick={() =>
                  setPassMode(passMode === "password" ? "text" : "password")
                }
              >
                {passMode === "password" ? (
                  <IoEyeOffOutline />
                ) : (
                  <IoEyeOutline />
                )}
              </span>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-3 justify-center items-center mt-3">
            <LoginButton />
            <Link
              href="/forgot-password"
              className="transition-all duration-300 py-2 flex flex-row items-center justify-center text-slate-800 font-medium underline text-center hover:text-yellow-500"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-row gap-4 items-center text-sm">
            <span className="border-b border-slate-300 w-full" />
            <span className="whitespace-nowrap">Or login with</span>

            <span className="border-b border-slate-300 w-full" />
          </div>
          <div className="flex flex-row gap-4 font-medium">
            <button className="w-full flex flex-row items-center justify-center gap-4 px-4 py-2 rounded-lg border border-slate-200 bg-white">
              <span>
                <Image
                  className=""
                  src="/assets/img/icons/auth/google-logo.png"
                  width={25}
                  height={25}
                  alt="Madfun Sign in with Google"
                />
              </span>
              <span>Google</span>
            </button>
            <button className="w-full flex flex-row items-center justify-center gap-4 px-4 py-2 rounded-lg border border-slate-200 bg-white">
              <span>
                <Image
                  className=""
                  src="/assets/img/icons/auth/facebook.png"
                  width={25}
                  height={25}
                  alt="Madfun Sign in with Facebook"
                />
              </span>
              <span>Facebook</span>
            </button>
            <button className="w-full flex flex-row items-center justify-center gap-4 px-4 py-2 rounded-lg border border-slate-200 bg-white">
              <span>
                <Image
                  className=""
                  src="/assets/img/icons/auth/apple.png"
                  width={25}
                  height={25}
                  alt="Madfun Sign in with Apple"
                />
              </span>
              <span>Apple</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
