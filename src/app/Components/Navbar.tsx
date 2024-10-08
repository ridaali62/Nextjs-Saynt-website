"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import useOnClickOutside from './UseOnClickOutside';

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleCloseMenu = () => {
    setActive(false);
  };

  const handleClick = () => {
    setActive(!active);
  };

  useOnClickOutside(menuRef, handleCloseMenu, menuButtonRef);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 pt-[20px] mx-[150px] mblres:px-[20px] md:px-[100px] md:mx-0 mblres:mx-0">
      <nav className="flex justify-between bg-transparent ">
        <div className="flex items-center">
          <Link href="/Home">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[65px] mblres:w-[45px] md:w-[45px]"
            />
          </Link>
          <p className="text-[#E5F5D8] text-[25px] font-bold pl-2 pr-5 py-2 mblres:text-[25px] mblres:py-0 mblres:font-semibold md:text-[25px] md:py-0 md:font-semibold">
            SAYNT AI
          </p>
        </div>
        <div
          ref={menuRef}
          className={`${active ? "" : "mblres:hidden md:hidden"}`}
        >
          <ul className="flex flex-row mt-3 text-[#E5F5D8] text-[20px] font-bold gap-10 mblres:gap-3 mblres:text-[25px] mblres:font-thin mblres:text-white mblres:flex-col mblres:absolute mblres:right-0 mblres:bg-[#1B3639] mblres:p-10 mblres:top-12 mblres:text-start mblres:h-lvh mblres:w-[50%] mblres:rounded-tl-xl md:gap-3 md:text-[25px] md:font-thin md:text-white md:flex-col md:absolute md:right-0 md:bg-[#1B3639] md:p-10 md:top-12 md:text-start md:h-lvh md:w-[50%] md:rounded-tl-xl">
            <li>
              <Link href="/Home">Home</Link>
            </li>
            <li>
              <Link href="/About">About Us</Link>
            </li>
            <li>
              <Link href="/Product">Our Products</Link>
            </li>
            <li>
              <Link href="/Career">Careers</Link>
            </li>
            <li>
              <Link href="/Blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link href="/Home#contact">
          <div className="bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] p-5 text-[15px] text-white font-bold rounded-lg mblres:p-1 mblres:text-[10px] mblres:hidden md:p-1 md:text-[10px] md:hidden">
            Contact Us
          </div>
        </Link>
        <button
          ref={menuButtonRef}
          onClick={handleClick}
          className="text-white mblres:block md:block hidden text-3xl"
        >
          <CiMenuFries />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
