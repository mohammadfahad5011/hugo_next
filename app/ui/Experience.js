import React from "react";

const Experience = () => {
  return (
    <section className="md:pt-[100px] pt-20 md:pb-[100px] pb-0 relative">
      <div className="container-fluid">
        <div className="grid md:justify-end lg:mr-[120px] md:mr-20 mr-10 md:ml-0 ml-10">
          <div className="lg:max-w-[530px] md:max-w-[380px] max-w-full w-full">
            <h2 className="text-[2.1em] font-bold mb-2">
              Beautiful sleeping quarters combined with the City's best bars,
              restaurants and experiences.
            </h2>

            <p className="py-4 text-[14px] font-[300] leading-[1.6]">
              The Hugo Hotel Canterbury is your luxury hotel room, whilst
              Canterbury itself provides stunning cocktail and champagne bars,
              eateries, fine dining restaurants and world heritage sites
              including Canterbury Cathedral all on your doorstep. We have
              contemporary style in spades with furniture and styling from
              BoConcept, high speed Internet access, Nespresso coffee systems,
              air conditioning and toiletries from Temple Spa that’ll transform
              your shower into a soothing spa experience.
            </p>

            <button className="bg-[#ff5757] border-b-2 border-[#ff5757] text-white p-[18px]">
              Book
            </button>
          </div>
        </div>
      </div>

      <div className="shape md:h-[300px] h-[100px] lg:w-[46%] md:w-[30%] w-[60%] border-t-[20px] border-r-[20px] border-[#bfb8b0] md:absolute relative left-0 bottom-0 -z-10 md:mt-0 mt-12"></div>
    </section>
  );
};

export default Experience;
