"use client";

import { useState } from "react";
import DatePicker from "./DatePicker";
import Counter from "./Counter";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#3b3b3b]">
      <nav className="container-fluid">
        <div className="relative flex flex-wrap items-center justify-between mx-auto py-5 px-4">
          <div className="flex flex-wrap items-center gap-20">
            <Link href="/" className="flex items-center space-x-3 w-[155px]">
              <img
                src="https://thehugo.co.uk/wp-content/themes/the-hugo/assets/images/theHugoLogo.svg"
                alt="The Hugo"
                title="The Hugo"
              />
            </Link>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex gap-5 lg:gap-10 xl:gap-12">
                <li>
                  <Link href="/rooms" className="text-[#979797] uppercase">
                    rooms
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="text-[#979797] uppercase">
                    location
                  </Link>
                </li>
                <li>
                  <Link href="/concierge" className="text-[#979797] uppercase">
                    concierge
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#979797] uppercase">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* mobile navbar  */}

          {open && (
            <ul className="absolute z-50 bg-[#F6F6F6] left-0 right-0 top-full w-full grid grid-cols-12">
              <li className="col-span-6 py-10 border-b-[1px] border-r-[1px] border-[#3b3b3b] text-center">
                <Link href="/rooms" className="text-[#979797] uppercase block">
                  rooms
                </Link>
              </li>
              <li className="col-span-6 py-10 border-b-[1px]  border-[#3b3b3b] text-center">
                <Link
                  href="/location"
                  className="text-[#979797] uppercase block"
                >
                  location
                </Link>
              </li>
              <li className="col-span-6 py-10 border-b-[1px] border-r-[1px] border-[#3b3b3b] text-center">
                <Link href="/about" className="text-[#979797] uppercase block">
                  about
                </Link>
              </li>
              <li className="col-span-6 py-10 border-b-[1px]  border-[#3b3b3b] text-center">
                <Link
                  href="/concierge"
                  className="text-[#979797] uppercase block"
                >
                  concierge
                </Link>
              </li>
              <li className="col-span-6 py-10 border-b-[1px] border-r-[1px] border-[#3b3b3b] text-center">
                <Link
                  href="/contact"
                  className="text-[#979797] uppercase block"
                >
                  contact
                </Link>
              </li>

              {/* social links  */}

              <div className="col-span-12 flex items-center justify-center gap-x-6 py-12">
                <Link href="/" className="w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M11.5 19.9v-9h3l.5-3.5h-3.5V5.1c0-1 .3-1.7 1.7-1.7h1.9V.3c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6v2.6h-3v3.5h3v9h3.6z"></path>
                  </svg>
                </Link>

                <Link href="/" className="w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 25">
                    <path
                      d="M31 2.96a12.8 12.8 0 0 1-3.65.99A6.326 6.326 0 0 0 30.14.46a12.8 12.8 0 0 1-4.04 1.53 6.374 6.374 0 0 0-11 4.32 6.236 6.236 0 0 0 .17 1.44 18.073 18.073 0 0 1-13.11-6.6 6.293 6.293 0 0 0 1.97 8.43 6.317 6.317 0 0 1-2.88-.79.22.22 0 0 0-.01.08 6.394 6.394 0 0 0 5.11 6.23 9.19 9.19 0 0 1-1.68.2c-.41 0-.81-.1-1.2-.1a6.235 6.235 0 0 0 5.95 4.3 12.872 12.872 0 0 1-7.9 2.8C1 22.3.5 22.2 0 22.2A18.155 18.155 0 0 0 27.84 7.04c0-.27 0-.54-.01-.81A12.963 12.963 0 0 0 31 2.96z"
                      className="cls-1"
                    ></path>
                  </svg>
                </Link>
                <Link href="/" className="w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 1.9c2.7 0 3 0 4 .1 1 0 1.5.2 1.8.3.5.2.8.4 1.1.7s.6.7.7 1.1c.3.4.5.9.5 1.9 0 1.1.1 1.4.1 4s0 3-.1 4c0 1-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7s-.9.3-1.8.3c-1 0-1.4.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.7-.7-1.1-.5-.2-.6-.8-.7-1.7 0-1.1-.1-1.4-.1-4s0-3 .1-4c0-1 .2-1.5.3-1.8.3-.6.5-.9.8-1.3.3-.3.7-.6 1.1-.7.4-.2.9-.3 1.9-.4h4m0-1.8c-2.7 0-3 0-4.1.1-1.1 0-1.8.2-2.4.5-.6.2-1.2.5-1.7 1.1-.6.5-.9 1.1-1.2 1.7-.2.7-.4 1.4-.5 2.4V10s0 3 .1 4.1c0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.1 1.8.6.6 1.1.9 1.8 1.1.6.2 1.4.4 2.4.5s1.3.1 4 .1 3 0 4.1-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.1.6-.6.9-1.1 1.1-1.8.2-.6.4-1.4.5-2.4 0-1.1.1-1.4.1-4.1s0-3-.1-4.1c0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.1-1.8-.6-.6-1.1-.9-1.8-1.1-.6-.2-1.4-.4-2.4-.5H10z"></path>
                    <path d="M10 4.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.2-5.1-5.1-5.1zm0 8.5c-1.8 0-3.3-1.5-3.3-3.3S8.2 6.7 10 6.7s3.3 1.5 3.3 3.3-1.4 3.4-3.3 3.4z"></path>
                    <circle cx="15.4" cy="4.7" r="1.2"></circle>
                  </svg>
                </Link>
              </div>
            </ul>
          )}

          <div className="flex gap-20 xl:gap-28">
            <div className="hidden lg:flex flex-col items-center">
              <span className="text-[#979797]">Check in/out</span>
              <DatePicker />
            </div>

            <div className="flex items-center gap-x-6 lg:gap-12">
              <div className="hidden lg:flex  flex-col items-center">
                <span className="text-[#979797]">Guests</span>
                <div className="flex items-center gap-4">
                  <Counter />
                </div>
              </div>

              {/* menu btn  */}

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden block text-[#979797] "
              >
                MENU
              </button>

              <button className="bg-[#ff5757] border-b-2 border-[#ff5757] text-white p-[18px]">
                Book
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
