"use clint";
import React from "react";
import Image from "next/image";

function Navber() {
  return (
    <nav className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#F0B71F] after:to-[#E03609] bg-black text-white">
      <div className="container mx-auto flex items-center justify-around border-x-2 border-r-[#F0B71F] border-l-[#E03609] py-[45px]">
        <div>
          <Image src="/Logo.png" width={100} height={100} alt="Logo Image" />
        </div>
        <ul className="flex gap-10 font-medium">
          <li className="leading-6.5 cursor-pointer">Home</li>
          <li className="leading-6.5 cursor-pointer">Page</li>
          <li className="leading-6.5 cursor-pointer">Support</li>
          <li className="leading-6.5 cursor-pointer">Contact</li>
        </ul>

        <button className="px-6 py-3 text-white font-semibold rounded-md bg-linear-to-r from-yellow-500 via-orange-500 to-red-600 cursor-pointer">
          Get started free
        </button>
      </div>
    </nav>
  );
}

export default Navber;
