"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ResendCode, ResetPassword } from "./actions";
import ResetButton from "./button";
import ReactLoading from "react-loading";
import { useRef, useState } from "react";
import { IoArrowBack, IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "sonner";

export default function ResetForm() {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [passMode, setPassMode] = useState("password");

  const resendCode = async () => {
    if (localStorage.getItem("resetMadfunData")) {
      setLoading(true);
      const resetData = JSON.parse(localStorage.getItem("resetMadfunData")!);
      const resetCode = resetData.user_metadata.verification.code;
      const expiryTime = resetData.user_metadata.verification.expires_at;
      const currentTimestamp = new Date().getTime();
      if (currentTimestamp > expiryTime) {
        // Expired Renew Code
        const userData = {
          uid: resetData.id,
          name: resetData.user_metadata.name,
          email: resetData.email,
          phone: resetData.user_metadata.phone,
          created: resetData.created_at,
          timezone: resetData.user_metadata.verification.timezone,
          user: resetData,
          resetCode: resetCode,
          newCode: true,
        };

        const res = await ResendCode(userData);
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
          toast.success(res.info.title, {
            description: res.info.message,
            position: "bottom-right",
            icon: " ",
            duration: 5000,
          });
          router.refresh();
        }
        setLoading(false);
      } else {
        // Not Expired Resend Same Code
        const userData = {
          uid: resetData.id,
          name: resetData.user_metadata.name,
          email: resetData.email,
          phone: resetData.user_metadata.phone,
          created: resetData.created_at,
          timezone: resetData.user_metadata.verification.timezone,
          user: resetData,
          resetCode: resetCode,
          newCode: false,
        };
        const res = await ResendCode(userData);
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
          toast.success(res.info.title, {
            description: res.info.message,
            position: "bottom-right",
            icon: " ",
            duration: 5000,
          });
          router.refresh();
        }
        setLoading(false);
      }
    } else {
      router.push("/forgot-password");
    }
  };
  return (
    <div className="w-full rounded-lg p-8">
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
            Reset Password
          </div>
          <div className=" text-slate-700">
            Check your email for the password reset code
          </div>
        </div>
      </div>
      <form
        className="form"
        action={async (formData) => {
          // Input Validation
          if (localStorage.getItem("resetMadfunData")) {
            const resetData = JSON.parse(
              localStorage.getItem("resetMadfunData")!
            );
            const expiryTime = resetData.user_metadata.verification.expires_at;
            const currentTimestamp = new Date().getTime();
            const code = formData.get("reset_code")?.toString();
            const password = formData.get("reset_password")?.toString();
            const confirmpassword = formData
              .get("confirm_password")
              ?.toString();
            if (currentTimestamp > expiryTime) {
              toast.error("Password reset failed!", {
                description:
                  "Your password reset code expired. Please request for a new code.",
                position: "bottom-right",
                icon: " ",
                duration: 5000,
              });
              setTimeout(() => {
                localStorage.removeItem("resetMadfunData");
                router.push("/forgot-password");
              }, 2000);
            } else if (code !== resetData.user_metadata.verification.code) {
              toast.error("Password reset failed!", {
                description:
                  "Invalid Reset code! Please check your email for the correct reset code and try again!",
                position: "bottom-right",
                icon: " ",
                duration: 5000,
              });
            } else if (password && password.length < 6) {
              toast.error("Password reset failed!", {
                description:
                  "Your password must be at least 6(six) characters in length!",
                position: "bottom-right",
                icon: " ",
                duration: 5000,
              });
            } else if (password !== confirmpassword) {
              toast.error("Password reset failed!", {
                description:
                  "Your passwords did not match! Please correct this and try again!",
                position: "bottom-right",
                icon: " ",
                duration: 5000,
              });
            } else {
              const res = await ResetPassword(formData, resetData);
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
                localStorage.removeItem("resetMadfunData");
                router.push("/login");
              }
            }
          } else {
            toast.error("Operation failed!", {
              description:
                "Please request for a new password reset code to proceed",
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });

            localStorage.removeItem("resetMadfunData");
            router.push("/forgot-password");
          }
        }}
      >
        <div className="grid grid-cols-1 gap-3">
          <div className="grid mb-3">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="reset_code"
            >
              Reset Code
            </label>
            <div className="relative flex flex-row items-center justify-between">
              <input
                type="text"
                className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-3 px-4 focus:outline-none"
                id="reset_code"
                name="reset_code"
                placeholder=""
                required
              />
              <button
                className="transition-colors duration-300 flex flex-row items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 px-4 py-1.5 rounded absolute right-2 text-sm text-white"
                disabled={loading}
                onClick={() => resendCode()}
              >
                {loading ? (
                  <ReactLoading
                    className=""
                    type="spin"
                    color="#ffd100"
                    width={20}
                    height={20}
                  />
                ) : (
                  "Resend"
                )}
              </button>
            </div>
          </div>

          <div className="grid relative">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="reset_password"
            >
              New Password
            </label>
            <div className="flex relative justify-between items-center">
              <input
                type={passMode}
                name="reset_password"
                id="reset_password"
                className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
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

          <div className="grid mb-3 relative">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <div className="flex relative justify-between items-center">
              <input
                type={passMode}
                name="confirm_password"
                id="confirm_password"
                className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
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

          <div className="grid mb-3">
            <ResetButton />
          </div>
          <div className="grid mt-4 text-sm">
            <Link
              href="/login"
              className="transition-all duration-300 flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary-500 ms-2"
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
