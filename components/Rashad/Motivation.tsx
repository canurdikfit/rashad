"use client";
import React from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import Quote from "./../../assets/Quote.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Motivation() {
  const SlideRef = React.useRef<SwiperRef | null>(null);
  const [domLoaded, setDomLoaded] = React.useState(false);
  const [slideBegOrNot, handleSlideByState] = React.useState({
    isFirst: true,
    isLast: false,
  });

  const handleNext = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper.slidePrev();
    }
  };

  const onSlideChange = (swiper: SwiperClass) => {
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
    <section className="py-28 w-screen">
      <div className="flex items-center justify-end h-16 mb-7 gap-3 lg:hidden">
        <button
          onClick={() => handlePrev()}
          className={`h-10 w-10 rounded-full bg-black text-white ${
            isFirst ? "cursor-not-allowed opacity-60" : "opacity-100"
          } text-2xl flex items-center justify-center shrink-0`}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => handleNext()}
          className={`h-10 w-10 rounded-full bg-black text-white ${
            isLast ? "cursor-not-allowed opacity-60" : "opacity-100"
          } text-2xl flex items-center justify-center shrink-0`}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="flex items-center gap-16 max-w-7xl mx-auto">
        <button
          onClick={() => handlePrev()}
          className={`h-16 w-16 rounded-full bg-[#D9D9D9] ${
            isFirst
              ? "cursor-not-allowed opacity-40"
              : "opacity-100 hover:text-rashad hover:bg-[#fafafa]"
          } text-4xl hidden lg:flex items-center justify-center shrink-0`}
        >
          <IoIosArrowBack />
        </button>
        {domLoaded && (
          <Swiper
            spaceBetween={50}
            ref={SlideRef}
            onSlideChange={onSlideChange}
            parallax={true}
            slidesPerView={1}
            centeredSlides
            modules={[Parallax]}
          >
            {TestimonialData.map((_, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={Quote}
                  alt="Quote"
                  sizes="100%"
                  className="h-10 md:h-14 w-auto"
                />
                <h2 className="text-2xl md:text-5xl xl:text-6xl font-semibold relative p-5">
                  <span className="h-1/2 bg-rashad w-full left-0 bottom-0 absolute z-0" />
                  <span className="relative z-10 leading-[1.3]">
                    In today’s fiercely competitive global marketplace, the most{" "}
                    <mark className="bg-rashad text-white">
                      important resource any business creative thinking of its
                      own
                    </mark>
                  </span>
                </h2>
                <div className="mt-7">
                  <h3 className="text-xl md:text-2xl font-extrabold">
                    RASHAD ALDRIDGE
                  </h3>
                  <p className="font-light text-sm md:text-base">
                    Executive Chairman, RASHAD MOTIVATIONS
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <button
          onClick={() => handleNext()}
          className={`h-16 w-16 rounded-full bg-[#D9D9D9] ${
            isLast
              ? "cursor-not-allowed opacity-40"
              : "opacity-100 hover:text-rashad hover:bg-[#fafafa]"
          } text-4xl hidden lg:flex items-center justify-center shrink-0`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

const TestimonialData = ["", "", ""];
