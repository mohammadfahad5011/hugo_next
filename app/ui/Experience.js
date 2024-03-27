import React from "react";

const Experience = () => {
  return (
    <section class="py-[100px] relative">
      <div class="container-fluid">
        <div class="grid justify-end mr-[120px]">
          <div class="max-w-[530px] w-full">
            <h2 class="text-[2.1em] font-bold mb-2">
              Beautiful sleeping quarters combined with the City's best bars,
              restaurants and experiences.
            </h2>

            <p class="py-4 text-[14px] font-[300] leading-[1.6]">
              The Hugo Hotel Canterbury is your luxury hotel room, whilst
              Canterbury itself provides stunning cocktail and champagne bars,
              eateries, fine dining restaurants and world heritage sites
              including Canterbury Cathedral all on your doorstep. We have
              contemporary style in spades with furniture and styling from
              BoConcept, high speed Internet access, Nespresso coffee systems,
              air conditioning and toiletries from Temple Spa that’ll transform
              your shower into a soothing spa experience.
            </p>

            <button class="bg-[#ff5757] border-b-2 border-[#ff5757] text-white p-[18px]">
              Book
            </button>
          </div>
        </div>
      </div>

      <div class="shape h-[300px] w-[46%] border-t-[20px] border-r-[20px] border-[#bfb8b0] absolute left-0 bottom-0 z-0"></div>
    </section>
  );
};

export default Experience;
