"use client";

import React from "react";

import home from "../../public/images/home.jpg";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#3b3b3b] pt-16 pb-5">
      <div className="container-fluid">
        <div className="grid grid-cols-12 relative">
          <div className="xl:col-span-4 lg:col-span-5 md:col-span-5 col-span-12">
            <h1 className="text-white lg:text-[3em] text-[2em] font-bold pt-24 pb-24 z-10 relative lg:ml-16 ml-12 md:mr-0 mr-12">
              Modern luxury hotel <br className="xl:block hidden" /> concept in
              the heart of <br className="xl:block hidden" /> Canterbury.
            </h1>
          </div>

          <div className="md:col-span-1"></div>

          <div className="xl:col-span-7 md:col-span-5 col-span-12 relative z-10 md:pb-0 pb-[100px] ">
            <Image
              src={home}
              alt="hero thumb"
              className="md:absolute md:-bottom-14 max-h-[400px] md:max-w-[900px] max-w-[350px] w-full aspect-auto object-cover lg:ml-auto md:pl-0 pl-12 md:mr-12 "
            />
          </div>

          <div className="absolute shape lg:h-[400px] md:h-[259px] h-[220px] lg:w-[550px] md:w-[414px] w-[50%] md:left-[28.5%] border-t-[20px] md:border-r-[20px] border-l-[20px] border-[#ff5757] right-0 -bottom-5 z-0"></div>

          <a
            href="#"
            className="md:absolute relative w-[200px] md:bottom-0 md:left-0 text-[#bfb8b0] inline-flex shrink-0 ml-16 items-center gap-2 "
          >
            Scroll Down
            <img
              src="https://thehugo.co.uk/wp-content/themes/the-hugo/assets/images/theHugoArrowDownBrown.svg"
              alt=""
              className="h-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
