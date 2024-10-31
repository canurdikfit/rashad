import Image from "next/image";
import React from "react";
import AudiencePhoto from "./../../assets/Audience.png";
import Rashad from "./../../assets/Rashad.png";
import Link from "next/link";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Audience() {
  return (
    <section className="py-20">
      <div className="rounded-[30px] md:rounded-[50px] lg:rounded-[66px] overflow-hidden relative h-fit">
        <Image
          src={AudiencePhoto}
          sizes="100%"
          fill
          alt="Audience Background"
          className="h-full w-full object-cover object-center absolute z-0"
        />

        <div className="relative z-10 grid xl:grid-cols-[1fr_minmax(450px,_550px)] px-6 md:px-10 max-w-7xl mx-auto">
          <div className="py-20 text-white space-y-5">
            <h3 className="text-5xl md:text-8xl font-medium max-w-2xl">
              Who is Rashad Aldridge?
            </h3>
            <p className="text-lg md:text-2xl text-pretty max-w-4xl">
              Rashad Aldridge is a renowned motivational speaker with a gift for
              transforming lives through the power of storytelling, resilience,
              and action-oriented strategies.
            </p>
            <div className="flex items-center gap-4">
              <Link href={""}>
                <button className="bg-rashad rounded-xl text-xl md:text-3xl h-12 w-12 md:h-14 md:w-14 flex items-center justify-center hover:bg-white hover:text-rashad transition-colors duration-300 ease-linear">
                  <FaTelegramPlane />
                </button>
              </Link>
              <Link href={""}>
                <button className="bg-rashad rounded-xl text-xl md:text-3xl h-12 w-12 md:h-14 md:w-14 flex items-center justify-center hover:bg-white hover:text-rashad transition-colors duration-300 ease-linear">
                  <FaDiscord />
                </button>
              </Link>
              <Link href={""}>
                <button className="bg-rashad rounded-xl text-xl md:text-3xl h-12 w-12 md:h-14 md:w-14 flex items-center justify-center hover:bg-white hover:text-rashad transition-colors duration-300 ease-linear">
                  <FaTwitter />
                </button>
              </Link>
              <Link href={"https://www.youtube.com/@RashadaldridgeMotivation"}>
                <button className="bg-rashad rounded-xl text-xl md:text-3xl h-12 w-12 md:h-14 md:w-14 flex items-center justify-center hover:bg-white hover:text-rashad transition-colors duration-300 ease-linear">
                  <FaYoutube />
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-[750px] h-full hidden xl:block">
            <Image
              src={Rashad}
              alt="Rashad"
              sizes="100%"
              className="h-full w-auto object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
