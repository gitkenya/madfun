import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madfun | Online Ticketing Platform",
  description:
    "Madfun is a B2B and B2C Online Ticketing Platform which aims to build a dynamic and service oriented Travel Market in the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
