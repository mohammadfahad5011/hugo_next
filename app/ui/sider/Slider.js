"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import slide_4 from "../../../public/images/slide-4.jpg";
import slide_3 from "../../../public/images/slide-3.jpg";
import slide_2 from "../../../public/images/slide-2.jpg";
import slide_1 from "../../../public/images/slide-1.jpg";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./style.css";

const slides = [
  {
    title: "No. 4 King Junior Suite",
    buttonText: "View details",
    imageUrl: slide_4,
  },
  {
    title: "No. 3 Luxury Double Room",
    buttonText: "View details",
    imageUrl: slide_3,
  },

  {
    title: "No. 2 Luxury Double Room",
    buttonText: "View details",
    imageUrl: slide_2,
  },

  {
    title: "No. 1 The Apartment",
    buttonText: "View details",
    imageUrl: slide_1,
  },
  // Add more slides here if needed
];

export default function App() {
  const swiperRef = React.useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="mb-[100px] lg:mb-[200px] relative bg-[#F6F6F6]">
      <Swiper
        ref={swiperRef}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-12 bg-[#f6f6f6]">
              <div className="md:col-span-1 md:order-1"></div>
              <div className="col-span-12 md:col-span-3 order-2 md:order-2">
                <div className="flex pl-10 md:pl-0 gap-y-10 md:gap-y-6 h-full flex-col justify-between items-start">
                  <h2 className="text-left mt-[70px] lg:mt-[100px] text-[2em] lg:text-[2.8em] leading-[1.4] font-semibold">
                    {slide.title}
                  </h2>
                  <div className="group flex gap-x-2 items-center">
                    <span className="h-[2px] w-16 inline-block bg-[#FF5757] group-hover:bg-[#3B3B3B] transition-all"></span>
                    <a
                      href="#"
                      className="text-[#FF5757] group-hover:text-[#3B3B3B] transition-all"
                    >
                      {slide.buttonText}
                    </a>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <button className="text-base bg-[#ff5757] uppercase transition-all border-b-2 hover:border-[#3B3B3B] text-white px-6 py-5">
                      Book
                    </button>
                    <button className="text-base bg-[#3B3B3B] uppercase transition-all border-b-2 hover:border-[#ff5757] text-white px-6 py-5">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 md:order-3"></div>
              <div className="col-span-12 md:col-span-7 relative order-1 md:order-4">
                <Image
                  src={slide.imageUrl}
                  alt="Picture of the author"
                  placeholder="blur"
                />

                <div className="absolute w-full md:w-auto left-4 md:left-0 md:right-20 -bottom-10 md:-bottom-12 z-10 ">
                  <div className="flex -mt-6 relative justify-start md:justify-end z-10">
                    <div
                      className="custom-prev border-[1.5px] border-[#3b3b3b] px-6 py-4 md:px-7 md:py-5"
                      onClick={goPrev}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize: "24px" }}
                      />
                    </div>
                    <div
                      className="custom-next border-[1.5px] border-[#3b3b3b] px-6 py-4 md:px-7 md:py-5"
                      onClick={goNext}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: "24px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
