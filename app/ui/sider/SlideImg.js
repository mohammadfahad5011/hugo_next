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
    imageUrl: slide_4,
  },
  {
    imageUrl: slide_3,
  },

  {
    imageUrl: slide_2,
  },

  {
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
              <div className="md:col-span-1 md:order-3"></div>
              <div className="col-span-12 md:col-span-7 relative order-1 md:order-4">
                <Image
                  src={slide.imageUrl}
                  alt="Picture of the author"
                  placeholder="blur"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className=" ">
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
      </Swiper>
    </div>
  );
}
