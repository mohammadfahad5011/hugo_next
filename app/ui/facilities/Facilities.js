import React from "react";
import Image from "next/image";
import i_1 from "../../../public/icons/smartDoorEntry.svg";
import i_2 from "../../../public/icons/wifi.svg";
import i_3 from "../../../public/icons/checkin-1.svg";
import i_4 from "../../../public/icons/tv-1.svg";
import i_5 from "../../../public/icons/champagne-1.svg";
import i_6 from "../../../public/icons/concierge.svg";

const facilitiesData = [
  { icon: i_1, text: "Keyless Entry" },
  { icon: i_2, text: "Free WiFi" },
  { icon: i_3, text: "All-night checkin" },
  { icon: i_4, text: "Internet TVs" },
  { icon: i_5, text: "Luxury Amenities" },
  { icon: i_6, text: "E-Concierge" },
];

const Facilities = () => {
  return (
    <section className="bg-[#3b3b3b] py-20">
      <div className="container-fluid">
        <h2 className="text-center text-white text-[2.2em] mb-12">
          Facilities
        </h2>

        <div className="grid grid-cols-12 justify-between items-center gap-x-5 gap-y-14 w-full">
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col col-span-4"
            >
              <span className="w-[50px] h-[50px] mb-3">
                <Image
                  src={facility.icon}
                  alt={facility.text}
                  width={50}
                  height={50}
                />
              </span>
              <h3 className="text-base mb-0 text-[#f6f6f6]">{facility.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
