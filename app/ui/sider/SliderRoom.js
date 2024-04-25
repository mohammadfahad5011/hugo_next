"use client";
import React from "react";
import SlideImg from "../sider/SlideImg";

export default function App() {
  return (
    <div className="mb-[100px] lg:mb-[200px] relative bg-[#F6F6F6]">
      <div className="grid grid-cols-12 bg-[#f6f6f6]">
        <div className="md:col-span-1 md:order-1"></div>
        <div className="col-span-12 md:col-span-3 order-2 md:order-2">
          <div className="flex pl-10 md:pl-0 gap-y-10 md:gap-y-6 h-full flex-col justify-between items-start">
            <h2 className="text-left mt-[70px] lg:mt-[100px] text-[2em] lg:text-[2.8em] leading-[1.4] font-semibold">
              No. 4 King Junior Suite
            </h2>
            <div className="group flex gap-x-2 items-center">
              <span className="h-[2px] w-16 inline-block bg-[#FF5757] group-hover:bg-[#3B3B3B] transition-all"></span>
              <a
                href="#"
                className="text-[#FF5757] group-hover:text-[#3B3B3B] transition-all"
              >
                No. 4 King Junior Suite
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
          <SlideImg />
        </div>
      </div>
    </div>
  );
}
