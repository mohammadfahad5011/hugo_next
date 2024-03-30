import React from "react";

import Image from "next/image";
import slide_1 from "../../../public/images/slide-1.jpg";

const SingleSlideItems = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1"></div>
      <div className="col-span-3">
        <div className="flex h-full flex-col justify-between">
          <h2 className="mt-[100px] text-[2.8em] leading-[1.4] font-semibold">
            No. 4 King Junior Suite
          </h2>
          <a
            href="#"
            className="relative inline-block after:absolute after:w-200 after:h-2 after:bg-black after:bottom-0 after:left-0"
          >
            View Link
          </a>

          <div className="flex gap-2 justify-center">
            <button className="bg-[#ff5757] transition-all border-b-2 hover:border-[#3B3B3B] text-white p-[18px]">
              Book
            </button>
            <button className="bg-[#3B3B3B] transition-all border-b-2 hover:border-[#ff5757] text-white p-[18px]">
              Enquire
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-8">
        <Image
          src={slide_1}
          alt="Picture of the author"
          // width={300}
          // height={300}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default SingleSlideItems;
