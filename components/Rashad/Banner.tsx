import BannerImage from "./../../assets/Banner_Image.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="h-[650px] xl:h-[950px] flex items-center justify-center bg-black px-6">
      <div className="w-full h-[650px] xl:h-[950px] absolute z-10 bg-black/65" />
      <div className="absolute z-0 bg-blue-400 h-[650px] xl:h-[950px] w-full">
        <Image
          src={BannerImage}
          alt="Banner Image"
          fill
          sizes="100%"
          className="h-full w-full object-cover object-center z-0"
        />
      </div>

      <div className="relative z-10 max-w-5xl text-center text-white space-y-5">
        <h1 className="text-4xl max-w-lg md:text-6xl md:max-w-2xl xl:max-w-5xl xl:text-8xl font-medium mx-auto ">
          Empowering Change, One Story at a Time
        </h1>
        <p className="opacity-65 lg:text-2xl xl:text-3xl max-w-md lg:max-w-lg xl:max-w-[800px] mx-auto">
          Unlock your potential with Rashad Aldridge, motivational speaker and
          life strategist.
        </p>
        <div>
          <Link href={"#followRashad"}>
            <button className="py-5 lg:py-6 px-8 rounded-full bg-white text-black text-xl font-medium hover:bg-rashad transition-colors ease-linear duration-200 hover:text-white">
              Start now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
