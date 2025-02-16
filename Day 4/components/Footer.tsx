import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-auto bg-white px-4 sm:px-6 py-8">
  
    <div className="flex flex-col sm:flex-row justify-between">
      
      <div className="flex flex-col mb-6 sm:mb-0 sm:w-[50%]">
        <div className="text-[#3563E9] text-[24px] sm:text-[32px] font-[700] mb-4">
          MORENT
        </div>
        <div className="text-[#13131399] sm:w-[300px] text-[14px] sm:text-[16px] font-[600]">
          Our vision is to provide convenience and help increase your sales
          business.
        </div>
      </div>
  
      {/* Links Section */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        
        {/* About */}
        <div className="flex flex-col mb-6 sm:mb-0">
          <div className="text-[18px] sm:text-[20px] font-[600] mb-4">
            About
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            How it works
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Featured
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Partnership
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] text-[#13131399]">
            Business Relation
          </div>
        </div>
  
        {/* Socials */}
        <div className="flex flex-col mb-6 sm:mb-0 sm:w-full">
          <div className="text-[18px] sm:text-[20px] font-[600] mb-4">
            Socials
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Discord
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Instagram
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Twitter
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] text-[#13131399]">
            Facebook
          </div>
        </div>
  
        {/* Community */}
        <div className="flex flex-col mb-6 sm:mb-0 sm:w-full">
          <div className="text-[18px] sm:text-[20px] font-[600] mb-4">
            Community
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Events
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Blogs
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] mb-2 text-[#13131399]">
            Podcasts
          </div>
          <div className="text-[14px] sm:text-[16px] font-[550] text-[#13131399]">
            Invite a friend
          </div>
        </div>
      </div>
    </div>
  
    {/* Divider */}
    <div className="bg-[#13131329] my-6 w-full h-[1px]"></div>
  
    {/* Bottom Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-[#1A202C] text-[14px] sm:text-[16px] font-[600] text-center sm:text-left">
        ©2022 MORENT. All rights reserved
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <div className="text-[#1A202C] text-[14px] sm:text-[16px] font-[600] text-center">
          Privacy & Policy
        </div>
        <div className="text-[#1A202C] text-[14px] sm:text-[16px] font-[600] text-center">
          Terms & Condition
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Footer;
