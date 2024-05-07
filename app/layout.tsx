import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./components/nextAuthProvider";
import Logo from "../public/images/netflix_logo.svg";
import BackgroundImage from "../public/images/login_background.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import Link from "next/link";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Clone of Netflix",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
        <NavBar />
          <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
            <Image
              src={BackgroundImage}
              alt="Background Image"
              className="overflow-hidden hidden sm:flex sm:object-cover sm:-z-10 brightness-50"
              priority //Renders this image on priority and then everything else
              fill
            />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
