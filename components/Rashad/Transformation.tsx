import React from "react";
import Layout from "./../../assets/layout.svg";
import Medal from "./../../assets/medal.svg";
import Person from "./../../assets/person.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface CardsProps {
  icon: string;
  label: string;
  details: string;
}

export default function Transformation() {
  return (
    <section className="space-y-10 py-20">
      <h3 className="max-w-5xl mx-auto text-3xl md:text-4xl xl:text-6xl xl:leading-[1.2] font-semibold text-center">
        The <mark className="bg-rashad text-white px-2">transformation</mark>{" "}
        happens at all levels of life and society
      </h3>
      <div className="grid md:grid-cols-3 gap-6 xl:gap-10">
        {Data.map((item, index) => (
          <CardsComponent
            key={index}
            icon={item.icon}
            label={item.labelTitle}
            details={item.details}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href={"#followRashad"}>
          <button className="bg-rashad py-5 flex items-center gap-5 text-white text-base pl-12 pr-7 rounded-full">
            <p className="font-extrabold">Follow Rashad</p>
            <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </section>
  );
}

const CardsComponent = ({ icon, label, details }: CardsProps) => {
  return (
    <div className="py-10 px-3 xl:px-7 bg-[#F7F7F7] rounded-3xl text-center flex flex-col items-center gap-4">
      <Image
        src={icon}
        alt="Icon"
        sizes="100%"
        className="h-8 w-8 md:h-10 md:w-10 object-contain object-center"
      />
      <h5 className="text-2xl xl:text-3xl font-extrabold">{label}</h5>
      <p className="font-light xl:text-lg text-[#222222] text-balance">
        {details}
      </p>
    </div>
  );
};

const Data = [
  {
    icon: Person,
    labelTitle: "Teams & Individuals",
    details:
      "Rashad Aldridge is more than a motivational speaker—he’s a catalyst for personal transformation. Drawing from a deep well of life experiences and hard-won insights.",
  },
  {
    icon: Medal,
    labelTitle: "Leaders",
    details:
      "Rashad Aldridge is a sought-after speaker specializing in leadership transformation. With years of experience guiding executives, managers, and emerging leaders.",
  },
  {
    icon: Layout,
    labelTitle: "Organizations",
    details:
      "Rashad Aldridge is a motivational speaker and organizational strategist dedicated to helping teams and organizations reach new levels of performance and resilience. ",
  },
];
