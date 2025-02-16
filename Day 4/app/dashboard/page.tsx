import React from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import { GiHamburgerMenu } from "react-icons/gi";

const page = () => {
  return (
    <div>
      <div className="sm:hidden absolute top-3 left-6">
        <GiHamburgerMenu size={30} />
      </div>
      <Header />
      
      

            <div>
              <Dashboard/>
            </div>
    </div>
  );
};

export default page;
