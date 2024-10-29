import React from "react";
import RashadI from "./../../assets/Rashad_Mini.png";
import Image from "next/image";

export default function TailoredTalk() {
  return (
    <section className="py-20 bg-black">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-5 text-white order-2 md:order-1">
          <h3 className="text-4xl lg:text-5xl font-semibold">
            Tailored Talks for Every Audience
          </h3>
          <p className="text-xl lg:text-2xl opacity-60">
            Elevate your next event with a message that inspires, motivates, and
            drives real change. Rashad Aldridge is available for keynote
            speeches, corporate workshops, and motivational sessions.
          </p>
          <button className="py-4 px-10 lg:py-6 lg:px-16 rounded-full bg-white text-black text-xl font-semibold hover:bg-rashad transition-colors ease-linear duration-200 hover:text-white">
            Talk to Rashad
          </button>
        </div>

        <div className="flex items-center justify-center order-1 md:order-2">
          <Image
            src={RashadI}
            alt="Rashad"
            sizes="100%"
            className="h-auto max-w-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
