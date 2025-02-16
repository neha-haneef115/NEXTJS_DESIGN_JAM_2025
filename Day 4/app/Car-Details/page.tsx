import React from 'react';
import Header from '@/components/Header';
import { GiHamburgerMenu } from "react-icons/gi";
import Mainbody2 from '@/components/Mainbody3';
import Footer from '@/components/Footer';
import Filter from '@/components/Filter';
import Cardetails from '@/components/Detailofcar';

const category = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <div className="sm:hidden absolute top-3 left-6">
              <GiHamburgerMenu size={30} />
            </div>
      <Header />
      <div className='flex gap-[10px] bg-[#F6F7F9]'>
       
        
        
          <div className='w-[360px] h-[2016px]'>
            
            <Filter/>
          </div>
          
          <div className='flex gap-[30px] flex-col w-full'>
            
            <div className='w-full'>
              <Cardetails />
            </div>
            <div className='w-full'>
              <Mainbody2 />
            </div>
          </div>
        
        
    
        <div className='hidden sm:block sm:w-[360px] h-[1600px] bg-white'>
        </div>
      </div>
      <Footer />
 </div>
  );
};

export default category;
