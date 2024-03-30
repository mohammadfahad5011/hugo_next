import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-4">
      <div className="flex items-center justify-center gap-3">
        <span>© The Hugo 2024</span>
        <span>|</span>
        <a href="#" className="text-[#ff5757]">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
