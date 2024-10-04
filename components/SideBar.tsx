"use client";
import { usePathname } from "next/navigation";

import React, { useMemo } from "react";

import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import Box from "./Box";
import SideBarRoutes from "./SideBarRoutes";
import Library from "./Library";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-[#090909] h-full w-[300px] px-2 ">
        <Box className="border-b-[1px] border-neutral-800">
          <div className="flex flex-col gap-y-4 p-4 ">
            {routes.map((route) => (
              <SideBarRoutes key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SideBar;
