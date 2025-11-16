import React from 'react'
import { MdCopyright } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <div>
      <div className='container mx-auto border-x-2 border-amber-600 pt-22 pb-15 px-18'>
        <div className='flex gap-[113px]'>
            <div className='w-[478px]'>
                <h3 className='font-semibold text-[22px]'>
                    Cyber.AI - Cyber Punk Website
                </h3>
                <p className='font-medium text-lg leading-8 mt-7'>
                    Explore the high-tech, low-life world where the lines between humanity 
                </p>
            </div>
            <div className='w-40'>
                <h3 className='font-semibold text-lg'>
                    Information
                </h3>
                <ul className='text-[#CBCBCB] mt-[9px] flex flex-col gap-0.5'>
                    <li>Press Centre</li>
                    <li>Our Blog</li>
                    <li>Term and Condition</li>
                </ul>
            </div>
            <div className='w-19.5'>
                <h3 className='font-semibold text-lg'>
                    Menu
                </h3>
                <ul className='text-[#CBCBCB] mt-[9px] flex flex-col gap-0.5'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='w-48'>
                <h3 className='font-semibold text-lg'>
                    Contact
                </h3>
                <ul className='text-[#CBCBCB] mt-[9px] flex flex-col gap-0.5'>
                    <li>Phone : +123 456 789</li>
                    <li>Email   : @example.com</li>
                    <li>Address Line 01</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-between mt-25'>
            <div className='flex items-center w-[454px]'>
                <MdCopyright />
                <p className='font-medium text-lg'>Cyber.AI - Cyber Punk 2024. All rights reserved.</p>
            </div>
            <div className='font-medium text-lg flex gap-12.5 w-[308px]'>
                <h5>Terms</h5>
                <h5>Privacy</h5>
                <h5>Cookies</h5>
            </div>
            <div className='w-48 flex gap-8 justify-center items-center text-xl'>
                <FaLinkedinIn />
                <FaFacebookF />
                <FaTwitter />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
