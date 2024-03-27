"use client";

import DatePicker from "./DatePicker";
import Counter from "./Counter";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#3b3b3b]">
      <nav class="container-fluid">
        <div class=" flex flex-wrap items-center justify-between mx-auto py-5 px-4">
          <div class="flex flex-wrap items-center gap-20">
            <Link href="/" class="flex items-center space-x-3 w-[155px]">
              <img
                src="https://thehugo.co.uk/wp-content/themes/the-hugo/assets/images/theHugoLogo.svg"
                alt="The Hugo"
                title="The Hugo"
              />
            </Link>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul class="flex gap-12">
                <li>
                  <Link href="/rooms" class="text-[#979797] uppercase">
                    rooms
                  </Link>
                </li>
                <li>
                  <Link href="/location" class="text-[#979797] uppercase">
                    location
                  </Link>
                </li>
                <li>
                  <Link href="/concierge" class="text-[#979797] uppercase">
                    concierge
                  </Link>
                </li>
                <li>
                  <Link href="/contact" class="text-[#979797] uppercase">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex gap-28">
            <div class="flex flex-col items-center">
              <span class="text-[#979797]">Check in/out</span>
              <DatePicker />
            </div>

            <div class="flex items-center gap-12">
              <div class="flex flex-col items-center">
                <span class="text-[#979797]">Guests</span>
                <div class="flex items-center gap-4">
                  <Counter />
                </div>
              </div>

              <button class="bg-[#ff5757] border-b-2 border-[#ff5757] text-white p-[18px]">
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
