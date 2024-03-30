import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#bfb8b0] py-12 px-[60px]">
      <div className="container-fluid">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex flex-col items-start">
              <ul className="flex gap-10 mb-10">
                <li>
                  <a href="#">concierge</a>
                </li>
                <li>
                  <a href="#">location</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>

              <ul className="flex gap-5 mb-10">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-6 ml-auto">
            <div className="w-[532px]">
              <div className="flex flex-col items-start">
                <h3 className="text-[1.15em] mb-2">
                  Get the latest offers from The Hugo
                </h3>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Enter email here..."
                    className="w-full bg-transparent border-b-2 border-[#3b3b3b] py-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
