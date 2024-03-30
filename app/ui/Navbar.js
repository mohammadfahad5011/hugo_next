"use client";

import DatePicker from "./DatePicker";
import Counter from "./Counter";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#3b3b3b]">
      <nav className="container-fluid">
        <div className=" flex flex-wrap items-center justify-between mx-auto py-5 px-4">
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
              <ul className="flex gap-12">
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

          <div className="flex gap-28">
            <div className="flex flex-col items-center">
              <span className="text-[#979797]">Check in/out</span>
              <DatePicker />
            </div>

            <div className="flex items-center gap-12">
              <div className="flex flex-col items-center">
                <span className="text-[#979797]">Guests</span>
                <div className="flex items-center gap-4">
                  <Counter />
                </div>
              </div>

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
