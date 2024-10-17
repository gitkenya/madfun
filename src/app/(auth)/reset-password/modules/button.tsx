"use client";

import { useFormStatus } from "react-dom";

export default function ResetButton(props: any) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full py-3 px-4 transition-all duration-500 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      disabled={pending ? true : false}
      aria-disabled={pending ? true : false}
    >
      {pending ? "Please wait..." : `Reset Password`}
    </button>
  );
}
