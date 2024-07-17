"use client";

import { usePathname } from "next/navigation";
import { TBreadCrumbProps } from "@/lib/types";
import Link from "next/link";

export default function Breadcrumb({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  capitalizeLinks,
  show,
}: TBreadCrumbProps & { show: boolean }) {
  const paths = usePathname() || "";
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div
      className={`bg-[#212529] w-screen ${
        show ? "md:w-[100%]" : "md:w-[87%]"
      } h-[7%] fixed top-[7%] right-0 flex flex-row transition-all duration-300 justify-between items-center border-b-[1px] border-white/30 px-6 py-4 z-50`}
    >
      <ul className={`${containerClasses} flex flex-row gap-x-2 items-center text-white/30`}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses = paths === href ? `text-white/80 font-bold` : "";
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <section key={index} className="flex flex-row gap-2">
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </section>
          );
        })}
      </ul>
    </div>
  );
}
