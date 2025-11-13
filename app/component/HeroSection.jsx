import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#E03609] after:to-[#F0B71F]">
      <div className="container mx-auto pt-13.5 relative border-x-2 border-amber-600">
      <div className="h-[1000px]">
        <div className="hero-bg flex px-13 ">
          <div className="mt-90 w-67.5">
            <ul>
              <li className="font-semibold text-[24.86px] list-disc">
                Stories & Lore
              </li>
            </ul>
            <p className="font-medium mt-4.5">
              Dive into compelling narratives <br /> set in a dystopian future.
            </p>
          </div>
          <div>
            <Image
              src="/HeroImg1.png"
              width={862}
              height={811}
              alt="Hero Section Image"
            />
          </div>
          <div className="mt-85 w-86 text-end">
            <h2 className="uppercase text-4xl">
              Events and <br /> <span className="font-semibold">Updates</span>
            </h2>
            <p className="font-medium leading-8 mt-5 mb-7">
              Explore the high-tech, low-life world <br /> where the lines
              between humanity <br /> and machinery blur.
            </p>
            <button className="px-6 py-3 text-white font-semibold rounded-md bg-linear-to-r from-yellow-500 via-orange-500 to-red-600 cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6.5 items-end absolute top-[643px] left-[23px]">
        <div className="w-[655px] h-82 rounded-[20px] border-2 border-amber-700 px-8.5 py-8 flex gap-11 bg-[#0000007e]">
          <Image
            src="/HeroImg2.png"
            width={200}
            height={260}
            alt="Hero Section Image"
          />
          <div>
            <h1 className="text-[58px] font-semibold bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
              76,285K+
            </h1>
            <h2 className="font-medium text-[28px] my-5.5">
              Experience the Future
            </h2>
            <p className="text-lg font-medium leading-8">
              Explore the high-tech, low-life world <br /> where the lines
              between
            </p>
          </div>
        </div>
        <div className="w-66 h-57">
          <h1 className="text-[36px]">
            Art and <br />
            <span className="font-semibold">Design</span>
          </h1>
          <p className="font-medium text-lg leading-8 mt-5">
            Feast your eyes on stunning visuals and concept art that bring the
            cyberpunk
          </p>
        </div>
        <div className="w-64.5 h-63 border-2 border-amber-700 rounded-[19px] py-7 px-8.5">
          <h1 className="text-[58px] font-semibold bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
            17+
          </h1>
          <h4 className="font-medium text-[28px]">Years of Experiences</h4>
        </div>
      </div>
    </div>
    </div>
  );
}
