"use client";
import React from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Parallax } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Chaji from "./../../assets/cha-ji.png";
import Rutherford from "./../../assets/rutherford.png";
import Henry from "./../../assets/henry.png";
import Image from "next/image";

export default function Testimonial() {
  const SliderRef = React.useRef<SwiperRef | null>(null);
  const [domLoaded, setDomLoaded] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [slideBegOrNot, handleSlideByState] = React.useState({
    isFirst: true,
    isLast: false,
  });

  const handleNext = () => {
    if (SliderRef.current) {
      SliderRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (SliderRef.current) {
      SliderRef.current.swiper.slidePrev();
    }
  };

  const onSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <section className="py-28">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold text-center">
        What people say
      </h2>
      <div className="mt-7 md:mt-9 xl:mt-11 flex items-center gap-4 lg:pb-20">
        <button
          onClick={() => handlePrev()}
          className={`h-10 w-10 text-white rounded-full bg-rashad ${
            isFirst
              ? "cursor-not-allowed opacity-40"
              : "opacity-100 hover:text-rashad hover:bg-[#fafafa]"
          } text-2xl hidden lg:flex items-center justify-center shrink-0`}
        >
          <IoIosArrowBack />
        </button>
        {domLoaded && (
          <Swiper
            spaceBetween={50}
            ref={SliderRef}
            onSlideChange={onSlideChange}
            parallax={true}
            slidesPerView={1}
            centeredSlides
            modules={[Parallax]}
          >
            <SwiperSlide>
              <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-center text-balance">
                <p className="text-lg md:text-2xl lg:text-3xl">
                  «When applied to building block a website or similar work
                  product, a Visual Guide can be an intermediate step toward the
                  end goal of a complete website. By creating a visual guide
                  along the way, the designer or developer can get input from
                  the other people involved in the website such as the customer,
                  their manager, and other members of the team.»
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-center text-balance">
                <p className="text-lg md:text-2xl lg:text-3xl">
                  «When applied to building block a website or similar work
                  product, a Visual Guide can be an intermediate step toward the
                  end goal of a complete website. By creating a visual guide
                  along the way, the designer or developer can get input from
                  the other people involved in the website such as the customer,
                  their manager, and other members of the team.»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-center text-balance">
                <p className="text-lg md:text-2xl lg:text-3xl">
                  «When applied to building block a website or similar work
                  product, a Visual Guide can be an intermediate step toward the
                  end goal of a complete website. By creating a visual guide
                  along the way, the designer or developer can get input from
                  the other people involved in the website such as the customer,
                  their manager, and other members of the team.»
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        <button
          onClick={() => handleNext()}
          className={`h-10 w-10 text-white rounded-full bg-rashad ${
            isLast
              ? "cursor-not-allowed opacity-40"
              : "opacity-100 hover:text-rashad hover:bg-[#fafafa]"
          } text-2xl hidden lg:flex items-center justify-center shrink-0`}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className="relative flex items-start justify-center lg:grid md:grid-cols-3 gap-5 px-6 md:px-10 xl:px-14 ">
        <div className="h-px bg-[#1B1B1B]/35 absolute top-0 w-full hidden lg:flex" />
        {Client.map((items, index) => (
          <div
            key={index}
            className={`py-7 items-center gap-4 hidden lg:flex ${
              index === activeIndex ? "border-t-2 border-black" : ""
            } max-w-[300px]`}
          >
            <Image
              key={index}
              src={items.profile}
              alt={"Profile Pic"}
              sizes="100%"
              className="h-14 w-14 rounded-full shrink-0 overflow-hidden"
            />
            <div className="font-regular">
              <h6 className="text-xl">{items.label}</h6>
              <p className="text-base">{items.position}</p>
            </div>
          </div>
        ))}
        <div className={`py-7 items-center gap-4 flex lg:hidden`}>
          <Image
            src={Client[activeIndex].profile}
            alt={"Profile Pic"}
            sizes="100%"
            className="h-14 w-14 rounded-full shrink-0 overflow-hidden"
          />
          <div className="font-regular">
            <h6 className="text-xl">{Client[activeIndex].label}</h6>
            <p className="text-base">{Client[activeIndex].position}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end h-16 mb-7 gap-3 lg:hidden">
        <button
          onClick={() => handlePrev()}
          className={`h-10 w-10 rounded-full bg-rashad text-white ${
            isFirst ? "cursor-not-allowed opacity-60" : "opacity-100"
          } text-2xl flex items-center justify-center shrink-0`}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => handleNext()}
          className={`h-10 w-10 rounded-full bg-rashad text-white ${
            isLast ? "cursor-not-allowed opacity-60" : "opacity-100"
          } text-2xl flex items-center justify-center shrink-0`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

const Client = [
  {
    label: "Cha Ji-Hun",
    position: "Co-founder of Forpeople",
    profile: Chaji,
  },
  {
    label: "Rutherford Brannan",
    position: "Design director of Perfect Illustration",
    profile: Rutherford,
  },
  {
    label: "Henry Itondo",
    position: "Co-founder of Source DS",
    profile: Henry,
  },
];
