import React from "react";
import { GoHeartFill } from 'react-icons/go';
import Image from "next/image";
import car1 from '@/image/car.png'
import car2 from '@/image/car (1).png'
import car3 from '@/image/Car (2).png'
import car5 from '@/image/Car (4).png'
import car6 from '@/image/Car (5).png'
import car7 from '@/image/Car (6).png'
import Heart from '@/public/Like.svg'
import icon1 from '@/public/Vectxsor.png'
import icon2 from '@/public/Car (5).png'
import icon3 from '@/public/profile-2user.png'
import Button from '@/components/Mybutton'

const Mainbody1 = () => {
  return (
    <div className="w-[1312px]  py-[20px]">



      <div className="flex items-center mt-[20px] px-[30px] gap-[30px] justify-start">
        {/* 1 */}
        <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
          <div className="flex  px-[20px] mt-[20px] justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#1A202C] font-[700] text-[20px]">Koenigsegg</div>
              <div className="text-[14px] text-[#90A3BF] font-[700]">Sport</div>
            </div>
            <div className="text-[#ED3F3F] text-[24px]"><GoHeartFill /></div>
          </div>

          <div className="flex items-center justify-center mt-[60px]"><Image src={car1} alt="car 1" height={72} width={232} /></div>
          <div className="flex items-center justify-around mt-[65px]">
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon1} alt="icon1" height={24} width={24} />90L</div>
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon2} alt="icon2" height={24} width={24} />Manual</div>
            <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon3} alt="icon3" height={24} width={24} />2 People</div>
          </div>

          <div className="flex justify-around mt-[30px]">
            <div className="flex items-center">
              <div className="text-[20px] font-[700] text-[#1A202C]">$99.00/</div>
              <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]"> day</div>
            </div>
            <div><Button /></div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
          <div className="flex  px-[20px] mt-[20px] justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#1A202C] font-[700] text-[20px]">Nissan GT - R</div>
              <div className="text-[14px] text-[#90A3BF] font-[700]">Sport</div>
            </div>
            <div className="text-[24px] flex items-center justify-center ">
              <Image src={Heart} alt="heart icon" height={24} width={24} />
            </div>
          </div>

          <div className="flex items-center justify-center mt-[60px]"><Image src={car2} alt="car 1" height={72} width={232} /></div>
          <div className="flex items-center justify-around mt-[65px]">
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon1} alt="icon1" height={24} width={24} />80L</div>
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon2} alt="icon2" height={24} width={24} />Manual</div>
            <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon3} alt="icon3" height={24} width={24} />2 People</div>
          </div>

          <div className="flex justify-around mt-[30px]">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="text-[20px] font-[700] text-[#1A202C]">$80.00/</div>
                <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]"> day</div>
              </div>
              <div className="text-[14px] font-[700] line-through text-[#90A3BF] ml-[2px]">$100.00</div>
            </div>
            <div><Button /></div>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
          <div className="flex  px-[20px] mt-[20px] justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#1A202C] font-[700] text-[20px]">Rolls - Royce</div>
              <div className="text-[14px] text-[#90A3BF] font-[700]">Sedan</div>
            </div>
            <div className="text-[#ED3F3F] text-[24px]"><GoHeartFill /></div>
          </div>

          <div className="flex items-center justify-center mt-[60px]"><Image src={car3} alt="car 1" height={72} width={232} /></div>
          <div className="flex items-center justify-around mt-[65px]">
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon1} alt="icon1" height={24} width={24} />70L</div>
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon2} alt="icon2" height={24} width={24} />Manual</div>
            <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon3} alt="icon3" height={24} width={24} />4 People</div>
          </div>

          <div className="flex justify-around mt-[30px]">
            <div className="flex items-center">
              <div className="text-[20px] font-[700] text-[#1A202C]">$96.00/</div>
              <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]"> day</div>
            </div>
            <div><Button /></div>
          </div>
        </div>
      </div>

      
      <div className="flex items-center mt-[20px] px-[30px] gap-[30px] justify-start">
        {/* 5 */}
        <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
          <div className="flex  px-[20px] mt-[20px] justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#1A202C] font-[700] text-[20px]">All New Rush</div>
              <div className="text-[14px] text-[#90A3BF] font-[700]">SUV</div>
            </div>
            <Image src={Heart} alt="heart icon" height={24} width={24} />
          </div>

          <div className="flex items-center justify-center mt-[60px]"><Image src={car5} alt="car 1" height={72} width={232} /></div>
          <div className="flex items-center justify-around mt-[40px]">
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon1} alt="icon1" height={24} width={24} />70L</div>
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon2} alt="icon2" height={24} width={24} />Manual</div>
            <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon3} alt="icon3" height={24} width={24} />6 People</div>
          </div>

          <div className="flex justify-around mt-[20px]">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="text-[20px] font-[700] text-[#1A202C]">$72.00/</div>
                <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]"> day</div>
              </div>
              <div className="text-[14px] font-[700] line-through text-[#90A3BF] ml-[2px]">$80.00</div>
            </div>
            <div><Button /></div>
          </div>
        </div>

        {/* 6 */}
        <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
          <div className="flex  px-[20px] mt-[20px] justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#1A202C] font-[700] text-[20px]">CR  - V</div>
              <div className="text-[14px] text-[#90A3BF] font-[700]">SUV</div>
            </div>
            <div className="text-[#ED3F3F] text-[24px]"><GoHeartFill /></div>
          </div>

          <div className="flex items-center justify-center mt-[60px]"><Image src={car6} alt="car 1" height={72} width={232} /></div>
          <div className="flex items-center justify-around mt-[40px]">
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon1} alt="icon1" height={24} width={24} />80L</div>
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon2} alt="icon2" height={24} width={24} />Manual</div>
            <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon3} alt="icon3" height={24} width={24} />6 People</div>
          </div>

          <div className="flex justify-around mt-[30px]">
            <div className="flex items-center">
              <div className="text-[20px] font-[700] text-[#1A202C]">$80.00/</div>
              <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]"> day</div>
            </div>
            <div><Button /></div>
          </div>
        </div>

        {/* 7 */}
        <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
          <div className="flex  px-[20px] mt-[20px] justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#1A202C] font-[700] text-[20px]">All New Terios</div>
              <div className="text-[14px] text-[#90A3BF] font-[700]">SUV</div>
            </div>
            <Image src={Heart} alt="heart icon" height={24} width={24} />
          </div>

          <div className="flex items-center justify-center mt-[60px]"><Image src={car7} alt="car 1" height={72} width={232} /></div>
          <div className="flex items-center justify-around mt-[40px]">
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon1} alt="icon1" height={24} width={24} />90L</div>
            <div className=" flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon2} alt="icon2" height={24} width={24} />Manual</div>
            <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]"><Image src={icon3} alt="icon3" height={24} width={24} />7 People</div>
          </div>

          <div className="flex justify-around mt-[30px]">
            <div className="flex items-center">
              <div className="text-[20px] font-[700] text-[#1A202C]">$75.00/</div>
              <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]"> day</div>
            </div>
            <div><Button /></div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Mainbody1;
