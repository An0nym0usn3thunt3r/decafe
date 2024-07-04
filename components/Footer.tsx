import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="pt-40 flex flex-col max-w-7xl mx-auto bg-[#15181E] text-white">
        <h4 className="text-xl text-[#AB8A54] font-medium text-center">
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
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #AB8A54 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
            }}
          ></div>
          <div className="flex flex-col mt-5 ">
            <div
              className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-b-[10px] border-b-[#AB8A54]
            border-r-[5px] border-r-transparent"
            ></div>
            <div
              className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[10px] border-t-[#AB8A54]
            border-r-[5px] border-r-transparent"
            ></div>
          </div>
          <div
            className="w-full mt-5 h-px max-w-xl  flex justify-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #AB8A54 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row bg-[#292E34]/50 backdrop-blur-lg py-10 px-20 rounded-md mt-10 justify-between items-center">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-lg font-medium">Hours of Operation</h1>
              <p className="text-green-600 font-medium">Open now</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-md font-medium">Monday</h1>
              <div className="flex flex-col">
                <p className="sm:text-sm text-xs">02:30pm - 07:30am</p>
                <p className="sm:text-sm text-xs">04:30pm - 08:00pm</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-md font-medium">Tuesday</h1>
              <div className="flex flex-col">
                <p className="sm:text-sm text-xs">02:30pm - 07:30am</p>
                <p className="sm:text-sm text-xs">04:30pm - 08:00pm</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-md font-medium">Wednesday</h1>
              <div className="flex flex-col">
                <p className="sm:text-sm text-xs">02:30pm - 07:30am</p>
                <p className="sm:text-sm text-xs">04:30pm - 08:00pm</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-md font-medium">Thursday</h1>
              <div className="flex flex-col">
                <p className="sm:text-sm text-xs">02:30pm - 07:30am</p>
                <p className="sm:text-sm text-xs">04:30pm - 08:00pm</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-md font-medium">Friday</h1>
              <div className="flex flex-col">
                <p className="sm:text-sm text-xs">02:30pm - 07:30am</p>
                <p className="sm:text-sm text-xs">04:30pm - 08:00pm</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-20">
              <h1 className="text-md font-medium">Saturday</h1>
              <div className="flex flex-col">
                <p className="sm:text-sm text-xs">02:30pm - 07:30am</p>
                <p className="sm:text-sm text-xs">04:30pm - 08:00pm</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl flex items-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d940058.2646300801!2d72.52456360000001!3d23.0200049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719430119382!5m2!1sen!2sin" width="500" height="315" className="sm:w-[500px] sm:h-[315px] w-[300px]"   loading="lazy" ></iframe>
          </div>
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
    </>
  );
};

export default Footer;
