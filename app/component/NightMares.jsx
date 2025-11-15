import React from "react";
import Image from "next/image";

const NightMares = () => {
  return (
    <div className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#E03609] after:to-[#F0B71F]">
      <div className="container mx-auto flex gap-9 px-10 pt-19.5 border-x-2 border-amber-600">
        <div className="w-[50%] pt-14">
          <h1 className="font-bold text-[56px] leading-16">
            Where{" "}
            <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
              Neon Dreams{" "}
            </span>{" "}
            <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
              & Digital
            </span>{" "}
            Nightmares Converge.
          </h1>
          <p className="font-medium text-lg leading-8 my-8">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty
            streets, and cybernetic enhancements. Explore the high-tech,
            low-life world where the lines between humanity and machinery blur.
          </p>
          <div className="flex gap-17.5">
            <div>
              <h3 className="font-semibold text-[47px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                89,2K+
              </h3>
              <p className="font-medium text-[17px]">Discover the Future</p>
            </div>
            <div>
              <h3 className="font-semibold text-[47px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                7001+
              </h3>
              <p className="font-medium text-[17px]">Stories and Lore</p>
            </div>
            <div>
              <h3 className="font-semibold text-[47px] bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                3,124+
              </h3>
              <p className="font-medium text-[17px]">Art and Design</p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <Image
            src="/NightMaresImg1.png"
            width={690}
            height={752}
            alt="Night Mares Image 1"
          />
        </div>
      </div>
      <div className="container mx-auto flex gap-9 px-10 pt-10.5 border-x-2 border-amber-600 pb-28">
        <div className="w-[50%]">
          <Image
            src="/NightMaresImg2.png"
            width={656}
            height={818}
            alt="Night Mares Image 1"
          />
        </div>
        <div className="w-[50%] pt-14">
          <h1 className="font-bold text-[56px] leading-16">
            Unveil{" "}
            <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
              the Secrets
            </span><br />
            <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
              of the
            </span>{" "}
            Cybernetic Underworld
          </h1>
          <p className="font-medium text-lg leading-8 my-8">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty
            streets, and cybernetic enhancements.
          </p>
          <div className="flex gap-12 items-center py-8 px-10 border border-[#F0B71F] rounded-[20px]">
            <div className="w-[40%]">
              <Image
                src="/NightMaresImg3.png"
                width={200}
                height={198}
                alt="Night Mares Image 1"
              />
            </div>
            <div className="w-[60%]">
              <h4 className="font-medium text-[28px]">Join the Revolution</h4>
              <p className="font-medium text-lg leading-8">
                Explore the high-tech, low-life world where the lines between humanity and machinery blur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightMares;
