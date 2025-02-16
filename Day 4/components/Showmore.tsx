import React from 'react'

const Showmore = () => {
  return (
    
         <div className="relative flex items-center mt-[60px] mb-[50px]">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-[156px] h-[44px] cursor-pointer rounded-[4px] flex items-center justify-center bg-[#3563E9] text-[16px] font-[500] text-white">
            Show more car
          </div>
        </div>
        <div className="ml-auto text-[14px] font-[500] text-[#90A3BF]">
          120 car
        </div>
      </div>  
    
  )
}

export default Showmore