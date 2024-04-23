"use client";
import React from "react";

import Image from "next/image";
import karly from "../../public/images/Concierge/karly-jones-601734-unsplash-900x500.jpg";

const Special = () => {
  return (
    <section className="relative md:h-[506px] flex md:flex-row flex-col lg:items-center items-start justify-center md:mt-10 ">
      <div className="md:absolute relative md:top-0 md:bottom-0 md:left-0  lg:w-[70%] md:w-[60%] w-full">
        {/* <img
          src="public/images/Concierge/karly-jones-601734-unsplash-900x500.jpg"
          alt=""
          className="max-w-[900px] w-full h-auto"
        /> */}

        <Image
          src={karly}
          className="max-w-[900px] w-full h-auto"
          alt="Picture of the author"
        />
      </div>

      <div className="container-fluid">
        <div className="lg:w-[26%] md:w-[30%] w-full md:ml-auto 2xl:pr-0 lg:px-6 px-10 md:py-0 py-6">
          <h2 className="text-[2.1em] font-bold mb-6">Make it special</h2>
          <p className="mb-3 leading-relaxed">
            Nothing makes a stay special like a bottle of champagne in your room
            on arrival, accompanied by chocolates from Canterbury chocolatier
            Madame Oiseau. Choose from the following up to 24 hours before
            arrival:
          </p>
          <p className="mb-3">CHAMPAGNE and two glasses, £50</p>
          <p>CHOCOLATE by Madame Oiseau 100g, £9</p>
        </div>
      </div>
    </section>
  );
};

export default Special;
