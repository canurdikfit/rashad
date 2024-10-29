import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex items-center md:justify-between flex-wrap-reverse justify-center bg-black text-white gap-3 py-6 px-10 md:px-16">
        <p>© {new Date().getFullYear()} RASHAD ALDRIDGE</p>
        <div className="flex items-center gap-5">
          <Link href={"https://www.linkedin.com/in/rashadaldridge/"}>
            <button className="text-2xl flex items-center justify-center text-white hover:text-rashad transition-colors duration-300 ease-linear">
              <FaLinkedin />
            </button>
          </Link>
          <Link href={"https://www.facebook.com/iamRashadaldridge/"}>
            <button className="text-2xl flex items-center justify-center text-white hover:text-rashad transition-colors duration-300 ease-linear">
              <FaFacebookSquare />
            </button>
          </Link>
          <Link href={"https://instagram.com/rashadaldridge247"}>
            <button className="text-2xl flex items-center justify-center text-white hover:text-rashad transition-colors duration-300 ease-linear">
              <AiFillInstagram />
            </button>
          </Link>
          <Link href={""}>
            <button className="text-2xl flex items-center justify-center text-white hover:text-rashad transition-colors duration-300 ease-linear">
              <FaTwitterSquare />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
