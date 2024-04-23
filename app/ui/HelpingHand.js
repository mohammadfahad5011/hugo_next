"use client";
import React from "react";

const HelpingHand = () => {
  return (
    <section className="relative">
      <div className="container-fluid">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 md:col-span-8 col-span-12">
            <div className="2xl:w-[64%] xl:w-[80%] w-full md:pt-24 md:pb-24 pt-20 pb-8 2xl:px-5 xl:px-6 lg:px-6 md:px-7 px-5">
              <h2 className="text-[2.1em] font-bold mb-6">
                A helping hand with your stay
              </h2>
              <p className="mb-3">
                The Hugo Canterbury knows all the hot spots and the not spots.
                Make the most of your time in the medieval City by asking for
                restaurant and bar recommendations, help with shows and travel
                advice.
              </p>
              <p>
                We want you to get the absolute most out of our time with us, so
                we’ll always do everything we can to help you with your
                requests.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[20px] border-l-[20px] border-[#bfb8b0] md:h-[300px] h-[120px] lg:w-[46%] md:w-[30%] w-[65%] md:absolute relative md:mt-24 right-0 top-0 ml-auto"></div>
    </section>
  );
};

export default HelpingHand;
