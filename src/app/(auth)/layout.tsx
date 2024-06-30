import type { Metadata } from "next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
