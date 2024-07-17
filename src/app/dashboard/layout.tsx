"use client";

import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import NavSide from "@/components/shared/NavSide";
import { useState } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [show, setShow] = useState(false);

  return (
    <section className="grid grid-cols-12 grid-rows-12 w-screen h-screen">
      <NavSide show={show} />
      <Navbar show={show} setShow={setShow} />
      <Breadcrumb
        homeElement={<h1 className="text-white/30">Home</h1>}
        separator={<h1 className="text-white/30">/</h1>}
        show={show}
        capitalizeLinks
      />
      <div
        className={`${
          inter.className
        } fixed bg-[#212529] text-black bottom-0 right-0 overflow-y-auto ${
          show ? "md:w-[100%]" : "w-screen md:w-[87%]"
        } h-[100%] transition-all duration-300 py-32`}
      >
        {children}
      </div>
    </section>
  );
}
