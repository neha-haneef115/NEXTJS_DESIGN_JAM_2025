

import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Route1 = () => {
  return (
    <div className="relative flex items-center px-[30px] gap-[50px] justify-start">
      <div className="flex flex-col items-start px-6 pb-7 justify-around w-[468px] h-[132px] rounded-[10px] bg-white">
        <div className="flex flex-row items-center mt-[19px] leading-9 justify-start gap-2 ">
          <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#3563E94D]">
            <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-full"></div>
          </div>
          <div className="text-[16px] text-[16px] font-semibold">Pick-Up</div>
        </div>
        <div className="flex items-center justify-start w-[486px] gap-5">
          <div className="flex flex-col items-start justify-center mt-2">
            <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
              Location
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your city
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#C3D4E966]"></div>

          <div className="flex flex-col items-start justify-center mt-2">
            <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
              Date
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your date
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#C3D4E966]"></div>

          <div className="flex flex-col items-start justify-center mt-2">
            <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
              Time
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your time
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center absolute justify-center ml-[462px] cursor-pointer drop-shadow-2xl text-white -rotate-90 text-[20px] font-normal w-[63px] h-[63px] bg-[#3563E9] rounded-[10px]">
       
        <FaArrowRightArrowLeft />
      </div>
      <div className="flex flex-col items-start px-6 pb-7 justify-center w-[468px] h-[132px] rounded-[10px] bg-white">
        <div className="flex flex-row items-center mt-[19px] leading-9 justify-start gap-2 ">
          <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#3563E94D]">
            <div className="w-[8px] h-[8px] bg-[#54A6FF] rounded-full"></div>
          </div>
          <div className="text-[16px] text-[16px] font-semibold">Drop-off</div>
        </div>
        <div className="flex items-center justify-start w-[486px] gap-3">
          <div className="flex flex-col items-start justify-center mt-2">
            <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
              Location
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your city
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#C3D4E966]"></div>

          <div className="flex flex-col items-start justify-center mt-2">
            <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
              Date
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your date
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#C3D4E966]"></div>

          <div className="flex flex-col items-start justify-center mt-2">
            <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
              Time
            </div>
            <div className="flex flex-row items-center gap-8">
              <div className="font-medium text-[12px] text-[#90A3BF]">
                Select your time
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route1;
