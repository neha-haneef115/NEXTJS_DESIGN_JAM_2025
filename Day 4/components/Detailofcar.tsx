import Image from 'next/image';
import Stars from '@/components/Stars';
import React from 'react';
import Link from 'next/link';
import car2 from "@/image/image 8.png";
import rectangle from "@/public/Rectangle 23780.svg";
import thumbnail1 from '@/image/View 1.png';
import thumbnail2 from '@/image/View 2.png';
import thumbnail3 from '@/image/View 3.png';
import { GoHeartFill } from 'react-icons/go';
import user1 from '@/image/Profill.png';
import user2 from '@/image/Profill (1).png';
import { FaAngleDown } from "react-icons/fa6";

const CarDetails = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-[30px]  lg:items-center lg:flex-row">
        <div className="flex flex-col gap-[20px]">
          <div className="relative w-[480px] h-[360px] gap-0 rounded-[10px] bg-[#3563E9]">
            <div className="grid grid-cols-8 absolute grid-rows-3 gap-x-2 gap-y-4">
              {[...Array(24)].map((_, idx) => (
                <div key={idx} className="overflow-hidden flex justify-center items-center">
                  <Image
                    src={rectangle}
                    alt="rectangle"
                    height={120}
                    width={75}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="w-[372px] h-[160px] mx-7 absolute z-11">
              <div className="font-medium h-[96px] w-[372px] mt-[10px] text-white py-4 text-[32px] leading-[40px] tracking-[-0.03em]">
                Sports car with the best design and acceleration
              </div>
              <div className="w-[284px] h-[48px] text-[16px] font-medium py-4 leading-[24px] tracking-[-0.02em] text-white">
                Safety and comfort while driving a futuristic and elegant sports car
              </div>
              <div className="absolute top-[180px] left-[0px]"></div>
            </div>
            <div className="absolute top-[232px] left-[85px] z-10">
              <Image src={car2} alt="car image" height={108} width={340} />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex justify-center items-center border border-[#3563E9] rounded-md border-[2px] w-[148px] h-[124px]">
              <Image
                src={thumbnail1}
                alt="Car Thumbnail 2"
                width={132}
                height={108}
                className="rounded-md"
              />
            </div>
            <Image
              src={thumbnail2}
              alt="Car Thumbnail 2"
              width={148}
              height={124}
              className="rounded-md"
            />
            <Image
              src={thumbnail3}
              alt="Car Thumbnail 3"
              width={148}
              height={124}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-[442px] h-[520px]">
          <div className="flex mt-[20px] justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#1A202C] font-[700] text-[20px]">Nissan GT - R</div>
              <div className="flex text-[14px] text-[#596780] font-[550]"><Stars /> 440+ Reviews</div>
            </div>
            <div className="text-[24px] flex items-center justify-center">
              <div className="text-[#ED3F3F] text-[24px]"><GoHeartFill /></div>
            </div>
          </div>
          <div className="text-gray-600 w-[414px] text-[18px] mt-[40px]">
            NISMO has become the embodiment of Nissan’s outstanding performance, inspired by the most unforgiving proving ground, the "race track."
          </div>
          <div className="grid grid-cols-2 mt-[40px] gap-4 text-sm text-gray-600">
            <div>
              Type Car<span className="font-bold ml-[20px] text-[18px]"> Sport</span>
            </div>
            <div>
              Capacity <span className="font-bold ml-[20px] text-[18px]">2 Person</span>
            </div>
            <div>
              Steering <span className="font-bold ml-[20px] text-[18px]">Manual</span>
            </div>
            <div>
              Gasoline <span className="font-bold ml-[20px] text-[18px]">70L</span>
            </div>
          </div>
          <div className="flex justify-between mt-[130px]">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="text-[28px] font-[700] text-[#1A202C]">$80.00/</div>
                <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]"> day</div>
              </div>
              <div className="text-[16px] font-[700] line-through text-[#90A3BF] ml-[2px]">$100.00</div>
            </div>
            <Link href='/payment'>
              <div className="w-[140px] cursor-pointer text-[16px] h-[56px] px-[20px] py-0 rounded-[5px] flex items-center justify-center bg-[#3563E9] text-white">
                Rent now
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 rounded-[7px] bg-white p-[20px]">
        <div className="flex items-center gap-4 w-[136px] h-[28px] mt-[20px] mb-[50px]">
          <div className="text-xl text-[#1A202C] font-bold">Reviews</div>
          <div className="flex items-center justify-center rounded-[3px] bg-[#3563E9] text-[14px] w-[44px] h-[28px] text-white">13</div>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex items-center justify-center rounded-4xl rounded-full w-[56px] h-[56px]">
            <Image
              src={user1}
              alt="User 1"
              width={56}
              height={56}
              className="object-cover rounded-full"
            />
          </div>
          <div className="w-[868px]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="text-[#1A202C] font-[700] text-[20px]">Alex Stanton</div>
                <div className="flex text-[14px] text-[#90A3BF] font-[500]">CEO at Bukalapak</div>
              </div>
              <div className="flex flex-col items-end"><span className="text-sm text-gray-500 mr-[14px]">21 July 2022</span><Stars /></div>
            </div>
            <p className="text-gray-600 mt-[20px]">
              We are very happy with the service from the MORENT app. Morent has a low price and a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
          </div>
        </div>
        <div className="flex mt-[20px] gap-4">
          <div className="flex items-center justify-center rounded-4xl rounded-full w-[56px] h-[56px]">
            <Image
              src={user2}
              alt="User 1"
              width={56}
              height={56}
              className="object-cover rounded-full"
            />
          </div>
          <div className="w-[868px]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="text-[#1A202C] font-[700] text-[20px]">Alex Stanton</div>
                <div className="flex text-[14px] text-[#90A3BF] font-[500]">CEO at Bukalapak</div>
              </div>
              <div className="flex flex-col items-end"><span className="text-sm text-gray-500 mr-[14px]">21 July 2022</span><Stars /></div>
            </div>
            <p className="text-gray-600 mt-[20px]">
              We are greatly helped by the services of the MORENT application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
          </div>
        </div>
        <div className="flex items-center ml-[460px] mt-4 text-[#90A3BF] font-[600]">Show All <div className="ml-[10px]"><FaAngleDown /></div></div>
      </div>
    </div>
  );
};

export default CarDetails;
