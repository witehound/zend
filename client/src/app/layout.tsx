import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zend | Home",
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
        <main className=" flex-1 p-5">{children}</main>
      </body>
    </html>
  );
}
