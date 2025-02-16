import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Route = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-1 justify-center lg-1440:justify-around gap-2 sm-375:gap-4">
      
      <div className="flex flex-col items-start px-4 lg:px-6 pb-5 lg:pb-7 justify-center w-full lg:w-[542px] h-auto lg:h-[132px] rounded-[10px] bg-white">
        <div className="flex flex-row items-center mt-4 lg:mt-[19px] leading-9 justify-start gap-2">
          <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#3563E94D]">
            <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-full"></div>
          </div>
          <div className="text-[14px] lg:text-[16px] font-semibold">Pick-Up</div>
        </div>
        <div className="flex flex-row items-start sm-375:flex-row items-center justify-between gap-2 w-full mt-3">
          {/* Location */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[14px] font-bold">Location</div>
            <div className="flex flex-row items-center gap-2">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your city
              </div>
              <IoIosArrowDown />
            </div>
          </div>
          {/* Date */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[14px] font-bold">Date</div>
            <div className="flex flex-row items-center gap-2">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your date
              </div>
              <IoIosArrowDown />
            </div>
          </div>
          {/* Time */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[14px] font-bold">Time</div>
            <div className="flex flex-row items-center gap-2">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your time
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex items-center justify-center cursor-pointer drop-shadow-2xl text-white rotate-0 lg:-rotate-90 text-[16px] lg:text-[20px] font-normal w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] bg-[#3563E9] rounded-[10px]">
        <FaArrowRightArrowLeft />
      </div>

      {/* Drop-Off Section */}
      <div className="flex flex-col items-start px-4 lg:px-6 pb-5 lg:pb-7 justify-center w-full lg:w-[542px] h-auto lg:h-[132px] rounded-[10px] bg-white">
        <div className="flex flex-row items-center mt-4 lg:mt-[19px] leading-9 justify-start gap-2">
          <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#3563E94D]">
            <div className="w-[8px] h-[8px] bg-[#54A6FF] rounded-full"></div>
          </div>
          <div className="text-[14px] lg:text-[16px] font-semibold">Drop-off</div>
        </div>
        <div className="flex flex-row items-start sm-375:flex-row items-center justify-between gap-2 w-full mt-3">
          {/* Location */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[14px] font-bold">Location</div>
            <div className="flex flex-row items-center gap-2">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your city
              </div>
              <IoIosArrowDown />
            </div>
          </div>
          {/* Date */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[14px] font-bold">Date</div>
            <div className="flex flex-row items-center gap-2">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your date
              </div>
              <IoIosArrowDown />
            </div>
          </div>
          {/* Time */}
          <div className="flex flex-col items-start justify-center">
            <div className="text-[14px] font-bold">Time</div>
            <div className="flex flex-row items-center gap-2">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your time
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
