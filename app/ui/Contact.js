import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="bg-[#bfb8b0] py-12 px-12">
      <div className="container-fluid">
        <div className="grid grid-cols-12 md:gap-0 gap-y-10">
          <div className="lg:col-span-6 md:col-span-5 col-span-12 md:order-1 order-2">
            <div className="flex flex-col md:items-start items-center">
              <ul className="flex lg:gap-10 md:gap-7 gap-6 mb-10">
                <li>
                  <a href="#" className="hover:text-white uppercase">
                    concierge
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white uppercase">
                    location
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white uppercase">
                    about
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white uppercase">
                    contact
                  </a>
                </li>
              </ul>

              <ul className="flex gap-6 mb-10">
                <li>
                  <a
                    href="#"
                    className="w-4 inline-block hover:text-white text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M11.5 19.9v-9h3l.5-3.5h-3.5V5.1c0-1 .3-1.7 1.7-1.7h1.9V.3c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6v2.6h-3v3.5h3v9h3.6z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-4 inline-block hover:text-white text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 25">
                      <path
                        d="M31 2.96a12.8 12.8 0 0 1-3.65.99A6.326 6.326 0 0 0 30.14.46a12.8 12.8 0 0 1-4.04 1.53 6.374 6.374 0 0 0-11 4.32 6.236 6.236 0 0 0 .17 1.44 18.073 18.073 0 0 1-13.11-6.6 6.293 6.293 0 0 0 1.97 8.43 6.317 6.317 0 0 1-2.88-.79.22.22 0 0 0-.01.08 6.394 6.394 0 0 0 5.11 6.23 9.19 9.19 0 0 1-1.68.2c-.41 0-.81-.1-1.2-.1a6.235 6.235 0 0 0 5.95 4.3 12.872 12.872 0 0 1-7.9 2.8C1 22.3.5 22.2 0 22.2A18.155 18.155 0 0 0 27.84 7.04c0-.27 0-.54-.01-.81A12.963 12.963 0 0 0 31 2.96z"
                        className="cls-1"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-4 inline-block hover:text-white text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 1.9c2.7 0 3 0 4 .1 1 0 1.5.2 1.8.3.5.2.8.4 1.1.7s.6.7.7 1.1c.3.4.5.9.5 1.9 0 1.1.1 1.4.1 4s0 3-.1 4c0 1-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7s-.9.3-1.8.3c-1 0-1.4.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.7-.7-1.1-.5-.2-.6-.8-.7-1.7 0-1.1-.1-1.4-.1-4s0-3 .1-4c0-1 .2-1.5.3-1.8.3-.6.5-.9.8-1.3.3-.3.7-.6 1.1-.7.4-.2.9-.3 1.9-.4h4m0-1.8c-2.7 0-3 0-4.1.1-1.1 0-1.8.2-2.4.5-.6.2-1.2.5-1.7 1.1-.6.5-.9 1.1-1.2 1.7-.2.7-.4 1.4-.5 2.4V10s0 3 .1 4.1c0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.1 1.8.6.6 1.1.9 1.8 1.1.6.2 1.4.4 2.4.5s1.3.1 4 .1 3 0 4.1-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.1.6-.6.9-1.1 1.1-1.8.2-.6.4-1.4.5-2.4 0-1.1.1-1.4.1-4.1s0-3-.1-4.1c0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.1-1.8-.6-.6-1.1-.9-1.8-1.1-.6-.2-1.4-.4-2.4-.5H10z"></path>
                      <path d="M10 4.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.2-5.1-5.1-5.1zm0 8.5c-1.8 0-3.3-1.5-3.3-3.3S8.2 6.7 10 6.7s3.3 1.5 3.3 3.3-1.4 3.4-3.3 3.4z"></path>
                      <circle cx="15.4" cy="4.7" r="1.2"></circle>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 md:order-2"></div>
          <div className="lg:col-span-4 md:col-span-5 col-span-12 md:order-3 order-1">
            <div className="flex flex-col items-start">
              <h3 className="text-[1.15em] mb-2">
                Get the latest offers from The Hugo
              </h3>
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Enter email here..."
                  className="w-full bg-transparent border-b-2 border-[#3b3b3b] py-4 outline-none pr-8"
                />

                <button className="absolute right-0 bottom-0 py-4 pl-5 text-2xl hover:text-white">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ fontSize: "24px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
