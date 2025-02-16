import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import heart from "@/public/Vector.svg";
import slider from "@/public/filter.svg";
import search from "@/public/search-normal.svg";
import notification from "@/public/notification.svg";
import setting from "@/public/setting-2.svg";
import Sidebar from "./ui/Sidebar";


const Header = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="border-b border-black border-opacity-40 py-[10px]">
        <div className="w-screen overflow-x-hidden h-[104px]  flex items-center justify-between px-4 lg:px-10">
     
          <div className="flex items-center justify-start gap-4 lg:gap-20">
            <div className="text-left text-[#3563E9] font-bold text-[24px] lg:text-[32px] leading-[36px] lg:leading-[48px] tracking-[-0.03em]">
              MORENT
            </div>
            <div className="hidden lg:flex w-full max-w-[492px] h-[44px] text-[#596780] rounded-full border border-[#C3D4E966] px-4 items-center">
              <Image src={search} alt="Search Icon" width={24} height={24} />
              <input
                type="text"
                placeholder="Search something here"
                className="flex-1 text-sm font-medium placeholder-[#596780] outline-none ml-4"
              />
              <Image src={slider} alt="Filter Icon" width={24} height={24} />
            </div>
          </div>

        
          <div className="flex items-center gap-2">
 <Link href={"/liked"}> <div className="flex items-center hidden sm-375:flex justify-center border border-[#C3D4E966] rounded-full w-[36px] lg:w-[44px] h-[36px] lg:h-[44px]">
    <Image src={heart} alt="Heart Icon" width={20} height={20} />
  </div></Link> 
  <div className="relative hidden sm-375:flex flex items-center justify-center border border-[#C3D4E966] rounded-full w-[36px] lg:w-[44px] h-[36px] lg:h-[44px]">
    <Image src={notification} alt="Notification Icon" width={20} height={20} />
    <div className="absolute top-1 right-1 w-[8px] lg:w-[11px] h-[8px] lg:h-[11px] bg-[#FF4423] rounded-full"></div>
  </div>
 <div className="flex hidden sm-375:flex  items-center justify-center border border-[#C3D4E966] rounded-full w-[36px] lg:w-[44px] h-[36px] lg:h-[44px]">
    <Image src={setting} alt="Setting Icon" width={20} height={20} />
  </div>
  <Sidebar />
</div>

        </div>

     
        <div className="lg:hidden w-full px-4 mt-4">
          <div className="w-full h-[44px] text-[#596780] rounded-full border border-[#C3D4E966] flex items-center px-4">
            <Image src={search} alt="Search Icon" width={24} height={24} />
            <input
              type="text"
              placeholder="Search something here"
              className="flex-1 text-sm font-medium placeholder-[#596780] outline-none ml-4"
            />
            <Image src={slider} alt="Filter Icon" width={24} height={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
