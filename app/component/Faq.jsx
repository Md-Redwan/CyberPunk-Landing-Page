import React from "react";

const Faq = () => {
  return (
    <div className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#E03609] after:to-[#F0B71F]">
      <div className="container mx-auto px-20 border-x-2 border-amber-600 pb-29.5">
        <h2 className="font-bold text-[55px] leading-17 text-center mx-auto">
          Frequently Asked <br />{" "}
          <span className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="font-medium text-lg leading-8 text-center mx-auto mt-9">
            A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe <br /> of neon lights, gritty streets, and cybernetic enhancements. 
        </p>
        <div className="flex flex-wrap gap-19 mt-24">
          <div className="lg:w-[520px] flex gap-9">
            <h1 className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent text-5xl font-medium">
              01.
            </h1>
            <div className="border-b-2 border-amber-700 pb-5.5">
              <h2 className="font-semibold text-2xl">
                How I stay updated on new content and events?
              </h2>
              <p className="font-medium text-lg leading-8 mt-6.5">
                A realm where advanced technology meets dystopian reality. Our website is your gateway....
              </p>
            </div>
          </div>
          <div className="lg:w-[520px] flex gap-9">
            <h1 className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent text-5xl font-medium">
              02.
            </h1>
            <div className="border-b-2 border-amber-700 pb-5.5">
              <h2 className="font-semibold text-2xl">
                How can I contact customer cyber punk support?
              </h2>
              <p className="font-medium text-lg leading-8 mt-6.5">
                A realm where advanced technology meets dystopian reality. Our website is your gateway....
              </p>
            </div>
          </div>
          <div className="lg:w-[520px] flex gap-9">
            <h1 className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent text-5xl font-medium">
              03.
            </h1>
            <div className="border-b-2 border-amber-700 pb-5.5">
              <h2 className="font-semibold text-2xl">
                Can I purchase cyberpunk-themed merchandise?
              </h2>
              <p className="font-medium text-lg leading-8 mt-6.5">
                A realm where advanced technology meets dystopian reality. Our website is your gateway....
              </p>
            </div>
          </div>
          <div className="lg:w-[520px] flex gap-9">
            <h1 className="bg-linear-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent text-5xl font-medium">
              04.
            </h1>
            <div className="border-b-2 border-amber-700 pb-5.5">
              <h2 className="font-semibold text-2xl">
                Are there any rules or guidelines for participating in the community?
              </h2>
              <p className="font-medium text-lg leading-8 mt-6.5">
                A realm where advanced technology meets dystopian reality. Our website is your gateway....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
