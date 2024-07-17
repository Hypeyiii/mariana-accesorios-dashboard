"use client";

import { MoonIcon } from "@heroicons/react/16/solid";
import {
  Bars3Icon,
  BellIcon,
  CreditCardIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

interface NavProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function Navbar({ show, setShow }: NavProps) {
  return (
    <nav
      className={`bg-[#212529] w-screen ${
        show ? "md:w-[100%]" : "md:w-[87%]"
      } h-[7%] fixed top-0 right-0 transition-all duration-300 flex flex-row justify-between items-center border-b-[1px] border-white/30 px-6 py-4 z-50`}
    >
      <div className="flex flex-row gap-5 items-center">
        <Bars3Icon
          className="size-5 cursor-pointer text-white"
          onClick={() => setShow(!show)}
        />
        <h1
          className={`text-base text-white/70 hover:text-white/50 transition cursor-pointer`}
        >
          Dashboard
        </h1>
        <h1
          className={`text-base text-white/70 hover:text-white/50 transition cursor-pointer`}
        >
          Users
        </h1>
        <h1
          className={`text-base text-white/70 hover:text-white/50 transition cursor-pointer`}
        >
          Settings
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <BellIcon className="size-6 cursor-pointer text-white" />
        <EnvelopeIcon className="size-6 cursor-pointer text-white" />
        <CreditCardIcon className="size-6 cursor-pointer text-white" />
        <MoonIcon className="size-6 cursor-pointer text-white" />
        <UserCircleIcon className="size-6 cursor-pointer text-white" />
      </div>
    </nav>
  );
}
