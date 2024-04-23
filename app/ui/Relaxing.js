"use client";
import React from "react";

import Image from "next/image";
import img from "../../public/images/Concierge/7M3A7641-900x500.jpg";

const Relaxing = () => {
  return (
    <section className="md:py-[100px] py-20 relative">
      <div className="container-fluid grid grid-cols-12 gap-6 items-center">
        <div className="2xl:col-span-3 md:col-span-4 col-span-12 2xl:pl-0 lg:pl-24 md:pl-12 md:px-0 px-12 md:order-1 order-2 ">
          <h2 className="text-[2.1em] font-bold mb-6">Make it relaxing</h2>
          <p className="mb-3 leading-relaxed">
            We have everything you need to turn your stay into a spa experience.
            Request any of our Temple Spa amenities up to 24 hours before
            arrival to make your stay complete:
          </p>
          <p className="mb-3">ALL SMILES dental kit, £3</p>
          <p className="mb-3">CLOSE CALL shaving kit, £5</p>
          <p className="mb-3">BITS & PIECES hotel essentials, £2</p>
          <p className="mb-3">
            DO NOT DISTURB peace and relaxation collection, £40
          </p>
          <p className="mb-3">SPA RETREAT in room spa ritual, £34</p>
        </div>
        <div className="2xl:col-span-2 md:col-span-1 md:order-2"></div>
        <div className="md:col-span-7 col-span-12 relative md:order-3 order-1">
          <div className="border-r-[20px] border-[#bfb8b0] absolute md:block hidden lg:h-[40%] md:h-[60%] left-[44px] w-5 -top-36 -z-10"></div>

          <Image
            src={img}
            className="max-w-[900px] w-full h-auto"
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="absolute w-[30%] h-[40%] border-l-[20px] border-b-[20px] border-[#bfb8b0] bottom-10 right-0 -z-10 md:block hidden"></div>
    </section>
  );
};

export default Relaxing;
