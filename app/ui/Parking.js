"use client";
import React from "react";
import Image from "next/image";
import img from "../../public/images/Concierge/avantgarde-concept-634223-unsplash-900x500.jpg";

const Parking = () => {
  return (
    <>
      <section className="relative flex md:flex-row flex-col items-start justify-center md:mt-10 md:pb-[100px]">
        <div className="md:block hidden absolute border-r-[20px] border-b-[20px] border-[#bfb8b0] w-[40%] h-[30%] left-0 -bottom-10"></div>
        <div className="md:absolute relative md:top-0 md:bottom-0 md:left-0  lg:w-[70%] md:w-[60%] w-full">
          <Image
            src={img}
            className="max-w-[900px] w-full h-auto"
            alt="Picture of the author"
          />
        </div>

        <div className="container-fluid">
          <div className="lg:w-[24%] md:w-[30%] w-full md:ml-auto 2xl:pr-0 lg:px-6 px-10 md:py-0 py-6">
            <h2 className="text-[2.1em] font-bold mb-6">Parking</h2>
            <p className="mb-4 leading-relaxed">
              Pound Lane Car Park CT1 2BZ is the nearest public car park and is
              very close to The Hugo. It is operated by Canterbury City Council
              and is Pay-when-you-leave.
            </p>
            <p className="mb-4">Other nearby car parks are:</p>
            <p className="mb-4">
              North Lane CT2 7EB (Pay and Display, RingGo) <br />
              Millers Field CT2 7EF (Ticketless) <br />
              St Radigunds CT1 2AA (Ticketless)
            </p>
            <p className="mb-4">
              These car parks typically cost £2.50 per hour between 7:30am and
              9pm with a £2 overnight charge. They are capped at £20 per 24
              hours.
            </p>
            <p className="mb-4">
              For great value parking for the duration of your stay, choose
              Station Road West Multi-Storey Car Park at CT2 8AN. This costs
              £1.80 per hour, capped at £10 per 24 hours, and is approximately
              five minutes walk away.
            </p>
            <p className="mb-4">
              Canterbury has Park & Ride facilities at New Dover Road CT1 1AD
              and Wincheap CT1 3TQ. This costs £4 per day, with a regular bus
              service in and out of the city Monday-Saturday – please check the
              service online for Sunday hours.
            </p>
            <p>For further help with parking, please contact Concierge.</p>
          </div>
        </div>
      </section>
      <div class="md:py-[100px] py-16 text-center">
        <a
          href="#"
          class="border-b-2 border-b-[#ff5757] bg-[#ff5757] text-white cursor-pointer inline-block uppercase px-6 pt-5 pb-4 hover:border-b-[#3b3b3b]"
        >
          Contact Concierge
        </a>
      </div>
    </>
  );
};

export default Parking;
