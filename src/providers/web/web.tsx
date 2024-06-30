"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function WebProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar
        height="1px"
        color="#00DC82"
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
    </>
  );
}
