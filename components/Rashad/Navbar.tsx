"use client";
import Image from "next/image";
import React from "react";
import RashadLogo from "./../../assets/Rashad_Logo.svg";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [state, setState] = React.useState<boolean>(false);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const NavigationLinks = [
    {
      label: "Home",
      target: "/",
    },
    {
      label: "Who I am",
      target: "/about",
    },
    {
      label: "Services",
      target: "/service",
    },
    {
      label: "Videos",
      target: "/videos",
    },
    {
      label: "Motivation",
      target: "/motivation",
    },
  ];

  return (
    <nav className="py-4 px-6 md:px-10 xl:px-12 bg-black fixed w-full left-0 top-0 z-50">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={RashadLogo}
            alt="Logo"
            sizes="100%"
            className="h-12 w-auto"
          />
        </Link>

        <ul
          className={`flex flex-col lg:flex-row fixed lg:relative text-3xl lg:text-base h-screen inset-0 lg:h-fit ${
            !state ? "translate-x-[100vw] lg:translate-x-0" : "translate-x-0"
          } bg-white lg:bg-black items-center justify-center text-black lg:text-white transition-all ease-linear duration-200 gap-5 xl:gap-10`}
        >
          {NavigationLinks.map((items, index) => {
            return (
              <li key={index}>
                <Link
                  href={items.target}
                  onClick={() => setState(false)}
                  className={`font-semibold ${
                    isActive(items.target) ? "text-rashad" : ""
                  } hover:text-rashad uppercase`}
                >
                  {items.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setState(!state)} className="lg:hidden ">
          {!state ? (
            <HiMiniBars3 className="relative z-20 text-3xl text-white" />
          ) : (
            <IoCloseOutline className="relative z-20 text-3xl" />
          )}
        </button>
        <div className="hidden lg:block">
          <Link href={""}>
            <button className="border-2 rounded-full py-3 border-rashad text-rashad font-extrabold px-7">
              Book RASHAD
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
