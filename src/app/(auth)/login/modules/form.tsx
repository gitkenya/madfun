"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoEye, IoEyeOff, IoLogoApple } from "react-icons/io5";
import validator from "validator";
import RegisterButton from "./button";
import { signin, googleSignIn } from "./actions";
export default function RegisterForm() {
  const [passMode, setPassMode] = useState("password");
  const [emailVal, setEmailVal] = useState("");
  const validateEmail = (ev: any) => {
    const email = ev.target.value;
    if (email.length > 0) {
      if (validator.isEmail(email)) {
        setEmailVal("valid");
      } else {
        setEmailVal("invalid");
      }
    } else {
      setEmailVal("");
    }
  };
  return (
    <form
      action={async (formData) => {
        const res = await signin(formData);
        console.log(res);
      }}
    >
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="relative grid w-full">
          <label
            className="flex items-center justify-between tracking-wide text-slate-800 text-xs font-bold mb-2"
            htmlFor="login_email"
          >
            <span className="uppercase">Email Address</span>
            {emailVal === "valid" ? (
              emailVal.length > 0 ? (
                <span className="absolute right-0 bg-emerald-400 text-emerald-800 font-medium text-xs px-3 py-1 rounded-full">
                  Valid Email
                </span>
              ) : (
                ""
              )
            ) : emailVal.length > 0 ? (
              <span className="absolute right-0 bg-red-300 text-red-700 font-medium text-xs px-3 py-1 rounded-full">
                Invalid Email
              </span>
            ) : (
              ""
            )}
          </label>
          <input
            type="email"
            className="appearance-none block w-full outline-none text-sm border border-slate-300 text-slate-800 bg-slate-100 rounded py-2.5 px-4 focus:outline-none"
            id="login_email"
            name="login_email"
            placeholder="jane@example.com"
            required
            onKeyUp={validateEmail}
          />
        </div>
        <div className="grid relative">
          <label
            className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2"
            htmlFor="login_password"
          >
            Password
          </label>
          <div className="flex relative justify-between items-center">
            <input
              type={passMode}
              name="login_password"
              id="login_password"
              className="appearance-none block w-full outline-none text-sm border border-slate-300 text-slate-800 bg-slate-100 rounded py-2.5 px-4 focus:outline-none"
              required
            />
            <span
              className="cursor-pointer absolute right-3 text-2xl text-slate-400 dark:text-slate-500"
              onClick={() =>
                setPassMode(passMode === "password" ? "text" : "password")
              }
            >
              {passMode === "password" ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 pt-2">
          <RegisterButton />
        </div>
        <div className="flex flex-row gap-4 items-center pt-4">
          <span className="border-b border-slate-300 w-full" />
          <span className="whitespace-nowrap ">Or login with</span>
          <span className="border-b border-slate-300 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="grid">
            <button
              type="button"
              className="flex flex-row gap-2 items-center justify-center border border-slate-300 px-4 py-2 rounded text-sm"
              onClick={() => googleSignIn()}
            >
              <Image
                src="/assets/img/icons/brand/google-logo.png"
                width={24}
                height={24}
                alt="Sign up with Google"
              />
              Google
            </button>
          </div>
          <div className="grid">
            <button
              type="button"
              className="flex flex-row gap-2 items-center justify-center border border-slate-300 px-4 py-2 rounded text-sm"
              onClick={() => googleSignIn()}
            >
              <Image
                src="/assets/img/icons/brand/facebook.png"
                width={24}
                height={24}
                alt="Sign up with Facebook"
              />
              Facebook
            </button>
          </div>
          <div className="grid">
            <button
              type="button"
              className="flex flex-row gap-2 items-center justify-center border border-slate-300 px-4 py-2 rounded text-sm"
            >
              <IoLogoApple size={24} /> Apple
            </button>
          </div>
          <div className="grid"></div>
        </div>
        <div className="w-full mt-4 text-sm tracking-wide text-slate-800 font-medium">
          Not Registered?{" "}
          <Link
            href="/register"
            className="transition-all duration-300 text-sm text-blue-800 hover:text-blue-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}
