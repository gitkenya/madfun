"use client";

import { useFormStatus } from "react-dom";

export default function ContactButton(props: any) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full sm:w-auto min-w-[200px] py-3 px-6 transition-all duration-500 justify-center items-center gap-x-2 mt-4 text-sm font-normal rounded-lg border border-transparent bg-yellow-400 text-slate-800 hover:bg-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      disabled={pending ? true : false}
      aria-disabled={pending ? true : false}
    >
      {pending ? "Please wait..." : `Send Message`}
    </button>
  );
}
