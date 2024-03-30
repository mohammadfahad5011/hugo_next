import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#3b3b3b] pt-16">
      <div className="container-fluid">
        <div className="grid grid-cols-12">
          <div className="col-span-5 pt-[100px]">
            <div className="ml-16 max-w-[520px] pb-5 z-10 relative">
              <h1 className="text-[3em] text-white font-bold">
                Modern luxury hotel concept in the heart of Canterbury.
              </h1>
              <a
                className="block scrollDown text-[#bfb8b0] mt-28 lowercase"
                href="#"
              >
                Scroll Down <i className="fa-solid fa-arrow-down text-lg"></i>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="shape h-[400px] w-[550px] left-[-123%] border-t-[20px] border-r-[20px] border-l-[20px] border-[#ff5757] absolute right-0 bottom-0 z-0"></div>
          </div>

          <div className="col-span-6">
            <div className="block h-[400px] relative overflow-hidden w-full top-28">
              <img
                src="https://thehugo.co.uk/wp-content/uploads/2018/03/7M3A7557-900x500.jpg"
                width="900"
                height="500"
                alt="Modern luxury hotel concept in the heart of Canterbury."
                title="Modern luxury hotel concept in the heart of Canterbury."
                className="bottom-0 left-0 m-auto absolute right-0 top-0 w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
