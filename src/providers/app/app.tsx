"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";
import Sonner from "@/components/sonner/sonner";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar
        height="1px"
        color="#fcf003"
        options={{ showSpinner: false }}
        startPosition={0.3}
        stopDelay={200}
        shallowRouting
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        {children}
      </ThemeProvider>
      <Sonner />
    </>
  );
}
