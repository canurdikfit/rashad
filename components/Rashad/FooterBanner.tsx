import React from "react";
import Image from "next/image";
import FooterBg from "./../../assets/Footer_Background.png";
import Link from "next/link";

export default function FooterBanner() {
  return (
    <div className="flex items-center justify-center relative py-20">
      <div className="max-w-xl xl:text-3xl relative z-10 flex flex-col items-center text-white text-center gap-4 px-6">
        <h5 className="text-3xl font-semibold">
          Start living the life of your dreams
        </h5>
        <p className="text-base">
          Live the life you’ve always dreamed of! Start now with a plan that
          will give you everything you need in order to achieve your goals.{" "}
        </p>
        <div>
          <Link href={"#followRashad"}>
            <button className="bg-rashad py-4 flex items-center gap-5 text-white text-base px-16 rounded-full">
              <p className="font-semibold">Start Now</p>
            </button>
          </Link>
        </div>
      </div>
      <Image
        sizes="100%"
        fill
        src={FooterBg}
        alt="Footer Background"
        className="h-full w-full object-cover object-top absolute z-0"
      />
    </div>
  );
}
