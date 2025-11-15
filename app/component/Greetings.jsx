import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidRectangle } from "react-icons/bi";


const Greetings = () => {
  return (
    <div className='relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#E03609] after:to-[#F0B71F]'>
      <div className='container mx-auto border-x-2 border-amber-600 greetings-bgImg px-21 pt-42.5 flex gap-5 '>
        <div className='w-[60%]'>
            <h1 className='font-bold text-[68px] leading-19'>
                Greetings! Dive <br /> into the Cybernetic Universe
            </h1>
            <p className='font-medium text-lg leading-8 mt-20'>
                Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.
            </p>
        </div>
        <div className='w-[40%] backdrop-blur-xl'>
          <div className='w-[431px] h-[465px] border-2 border-[#F0B71F] rounded-[20px] py-[58px] px-[62px] flex flex-col gap-6.5 items-start justify-between'>
            <div className='flex items-start '>
              <div className='flex gap-4.5 items-start'>
                <BiSolidRectangle className='text-[#F0B71F] text-2xl'/>
                <h2 className='font-semibold text-2xl leading-7'>Join The Revolution</h2>
              </div>
              <FaArrowRight className='text-[34px] cursor-pointer'/>
            </div>


            <div className='flex gap-14.5 items-start '>
              <div className='flex gap-4.5 items-start'>
                <BiSolidRectangle className='text-[#E03609] text-2xl'/>
                <h2 className='font-semibold text-2xl leading-7'>Art And Design</h2>
              </div>
              <FaArrowRight className='text-[34px] cursor-pointer'/>
            </div>


            <div className='flex gap-14.5 items-start '>
              <div className='flex gap-4.5 items-start'>
                <BiSolidRectangle className='text-[#F0B71F] text-2xl'/>
                <h2 className='font-semibold text-2xl leading-7'>Tech And Gear</h2>
              </div>
              <FaArrowRight className='text-[34px] cursor-pointer'/>
            </div>


            <div className='flex gap-14.5 items-start '>
              <div className='flex gap-4.5 items-start'>
                <BiSolidRectangle className='text-[#E03609] text-2xl'/>
                <h2 className='font-semibold text-2xl leading-7'>Stories And Lore</h2>
              </div>
              <FaArrowRight className='text-[34px] cursor-pointer'/>
            </div>

          </div>
       </div>
      </div>
    </div>
  )
}

export default Greetings
