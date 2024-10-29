import TextRevealByWord from "@/components/ui/text-reveal";
import Motivation from "./../../assets/Motivational_Quote.png";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="xl:screen w-screen">
      <div className="grid lg:grid-cols-[minmax(300px,_600px)_1fr] gap-10 lg:py-40">
        <div>
          <TextRevealByWord text="Mindset Wealth Health Relationships Business Leadership Happiness" />
        </div>
        <div className="flex items-center">
          <div className="max-h-[600px] lg:max-h-[350px] xl:max-h-[600px] relative w-full lg:fixed lg:w-[60%] h-full lg:right-0 lg:top-40 overflow-hidden  lg:rounded-l-[40px] xl:rounded-l-[60px]">
            <Image
              src={Motivation}
              className="h-full w-full object-cover object-center bg-fixed"
              alt="Motivational Background"
              sizes="100%"
              fill
            />
            <div className="bg-black/70 overflow-hidden h-full w-full relative z-10 px-6 md:px-20 flex items-center py-36">
              <p className="text-white text-xl md:text-3xl lg:text-xl xl:text-3xl leading-[1.5] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.5]">
                When applied to building block a website or similar work
                product, a Visual Guide can be an intermediate step toward the
                end goal of a complete website. By creating a visual guide along
                the way, the designer or developer can get input from the other
                people involved in the website such as the customer, their
                manager, and other members of the team.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
