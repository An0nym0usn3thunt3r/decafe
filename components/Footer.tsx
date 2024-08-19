import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo.svg';
import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {

  return (
    <>
      <div className="pt-40 flex flex-col max-w-7xl mx-auto bg-[#15181E] text-white">
        <h4 className="text-xl text-[#d67f2e] font-medium text-center">
          Location
        </h4>
        <h1 className="text-2xl text-center md:text-3xl tracking-wide font-semibold">
          How to find us
        </h1>
        <div className="flex flex-row items-center ">
          <div
            className="w-full mt-5 h-px max-w-[40rem]  flex justify-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #d67f2e 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
            }}
          ></div>
          <div className="flex flex-col mt-5 ">
            <div
              className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-b-[10px] border-b-[#d67f2e]
            border-r-[5px] border-r-transparent"
            ></div>
            <div
              className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[10px] border-t-[#d67f2e]
            border-r-[5px] border-r-transparent"
            ></div>
          </div>
          <div
            className="w-full mt-5 h-px max-w-xl  flex justify-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #d67f2e 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row bg-[#292E34]/50 backdrop-blur-lg py-10 px-20 rounded-md mt-10 justify-between items-center">
          <div className="flex flex-col gap-y-2">
          <div className="flex justify-center">
          <Image src={Logo} alt="Logo" className='mr-4' width={300} />
        </div>
            <div className="flex flex-row justify-between items-center mt-8 gap-x-20">
              <h1 className="text-lg font-medium">Hours of Operation</h1>
              <p className="text-green-600 font-medium">Open now</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-md font-medium">Monday to Sunday</h1>
              <div className="flex flex-col">
                <h1 className="sm:text-sm text-md font-medium">11:00pm - 11:00pm</h1>
              </div>
            </div>
            <div className="flex items-center justify-start mt-8 gap-x-12">
              <div className="flex items-center justify-start">
              <h1 className="text-white">Follow us on</h1>
              <div className="ml-2">
              <Link href="/gallery">
                <FaInstagram size={40} color="#ffffff" />
              </Link>
              </div>
              </div>
              <div className="rounded-xl flex justify-start">
            <Link href="tel:+91 9974737255" className="flex items-center gap-x-2">
            <h1 className="text-white">+91 9974737255</h1>
            <FaPhone size={35} color="#ffffff" />
            </Link>
          </div>
            </div>
          <div className="rounded-xl flex justify-end mt-2">
            <Link href="mailto:shreeji.enterprises054@gmail.com" className="flex items-center gap-x-2">
            <h1 className="text-white">shreeji.enterprises054@gmail.com</h1>
            <FaEnvelope size={35} color="#ffffff" />
            </Link>
          </div>
          </div>
          <div className="rounded-xl flex items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2170758043976!2d72.533681!3d23.0525019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e856329f6c819%3A0xe878a076a3fcb171!2sDelicious%20Restro%20Cafe!5e0!3m2!1sen!2sin!4v1724069699521!5m2!1sen!2sin" width="500" height="315" className="sm:w-[500px] sm:h-[315px] w-[300px]"   loading="lazy" ></iframe>
          </div>
        </div>
      <div className="bg-[#181d25] mt-10">
        <div className="flex flex-col gap-y-4 sm:flex-row items-center py-5 max-w-7xl mx-auto px-5 justify-between">
          <div className="flex flex-row gap-x-2 text-white ">
            <p className="text-gray-300">Privacy Policy</p> |
            <p className="text-gray-300">Terms & Conditions</p>
          </div>
          <p className="text-gray-300">Copyright @DELECIOUS 2024</p>
        </div>
      </div>
    </div>
  </>
);
};

export default Footer;
