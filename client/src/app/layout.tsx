import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zend",
  description: "How paymnets should be made",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full flex`}>
        <Navigation />
        <main className=" flex-[10]">{children}</main>
      </body>
    </html>
  );
}
