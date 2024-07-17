"use client";

import { onest, anton } from "@/lib/fonts";
import { GlobeAsiaAustraliaIcon, PowerIcon } from "@heroicons/react/24/outline";
import { sideVarRouter } from "@/lib/lists";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function NavSide({ show }: { show: boolean }) {
  const [loading, setLoading] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/auth/logout`);
      if (response.data.success) {
        router.push("/");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${
        show ? "w-[0%] invisible" : "w-[13%] visible"
      } fixed md:flex flex-col left-0 top-0 bottom-0 h-full border-r-[1px] border-white/30 bg-[#212529] transition-all duration-300`}
    >
      <div
        className={`bg-[#1a1e26] w-full h-[7%] border-b-[1px] border-white/30 text-[#FFFFFF99] flex justify-center items-center flex-row gap-1`}
      >
        <GlobeAsiaAustraliaIcon className="size-6" />
        <h1 className={`${anton.className} text-xl uppercase`}>Mariana</h1>
        <p className={`${onest.className} text-base`}>UI</p>
      </div>
      <div className="w-full h-[86%] overflow-y-auto">
        {sideVarRouter.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`${
              item.path === currentPath
                ? " bg-white/5 text-white"
                : "text-white/70"
            } w-full flex justify-start items-center gap-4 px-6 py-2 hover:bg-white/5 hover:text-white cursor-pointer`}
          >
            {item.icon}
            <h1 className={`${onest.className} text-sm md:text-lg`}>
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
      <button
        onClick={() => logout()}
        className="bg-[#1a1e26] w-full flex flex-row gap-1 justify-center items-center h-[7%] border-r-[1px] border-t-[1px] border-white/30 text-white/70"
      >
        <PowerIcon className="size-6" />
        <h1 className={`${anton.className} text-xl uppercase`}>
          {loading ? "Loading..." : "Logout"}
        </h1>
      </button>
    </div>
  );
}
