import React from "react";

const SingleFacilities = () => {
  return (
    <div className="flex items-center justify-center flex-col col-span-4">
      <span className="w-[50px] h-[50px] mb-3">
        <img
          src="public/images/icons/champagne-1.svg"
          alt="Facility - Keyless Entry"
          title="Facility - Keyless Entry"
        />
      </span>
      <h3 className="text-base mb-0 text-[#f6f6f6]">Keyless Entry</h3>
    </div>
  );
};

export default SingleFacilities;
