import React from "react";

const FilterSidebar = () => {
  return (
    <div className="w-[360px] h-full p-[32px] bg-white rounded-[8px] shadow-md hidden md:block">
      <div className="w-[176px] h-[352px] mb-[28px]">
        <h3 className="text-[12px] font-bold mb-[16px] text-[#596780]">Type</h3>
        <div className="flex flex-col gap-[12px]">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">Sport</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(10)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">SUV</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(12)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">MPV</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(16)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">Sedan</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(20)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">Coupe</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(14)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">Hatchback</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(14)</span>
          </label>
        </div>
      </div>

      <div className="w-[176px] h-[240px] mb-[28px]">
        <h3 className="text-[12px] font-bold mb-[16px] text-[#90A3BF]">Capacity</h3>
        <div className="flex flex-col gap-[12px]">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">2 Person</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(10)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">4 Person</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(14)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">6 Person</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(12)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-[#3563E9]" />
            <span className="font-[600] text-[20px] text-[#596780]">8 or More</span>
            <span className="font-[500] text-[20px] text-[#90A3BF]">(16)</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-[12px] font-bold mb-[16px] text-[#90A3BF]">Price</h3>
        <div className="flex flex-col gap-[12px]">
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-[176px] accent-[#3563E9]"
          />
          <div className="font-[600] text-[20px] text-[#596780]">Max. $100.00</div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;