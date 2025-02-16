import React from "react";
import chart from '@/image/Chart.png'
import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaCar,
  FaChartBar,
  FaWallet,
  FaEnvelope,
  FaCalendarAlt,
  FaCog,
  FaMoon,
} from "react-icons/fa";
import Image from "next/image";
import car1 from "@/image/Car (10).png";
import car2 from "@/image/Car (10).png";
import car3 from "@/image/Car (10).png";
import car4 from "@/image/Car (10).png";
import car from "@/image/View 1.png";
import map from "@/image/Maps.png";

const Dashboard = () => {
    const transactions = [
        { car: car1, model: "Nissan GT - R", type: "Sport Car", date: "20 July", price: "$80.00" },
        { car: car2, model: "Koenigsegg", type: "Sport Car", date: "19 July", price: "$99.00" },
        { car: car3, model: "Rolls - Royce", type: "Sport Car", date: "18 July", price: "$96.00" },
        { car: car4, model: "CR - V", type: "SUV", date: "17 July", price: "$80.00" },
      ];
      const data = [
        { type: "Sport Car", value: "17,439", color: "bg-sport" },
        { type: "SUV", value: "9,478", color: "bg-suv" },
        { type: "Coupe", value: "18,197", color: "bg-coupe" },
        { type: "Hatchback", value: "12,510", color: "bg-hatchback" },
        { type: "MPV", value: "14,406", color: "bg-mpv" },
      ];
      
      

  return (
    <div className="flex gap-[20px] w-full bg-[#F6F7F9]">
      {/* Sidebar starts */}
      <div className="sidebar flex flex-col justify-between bg-white w-[250px] leading-9 h-[900px] p-6">
        <div>
          <h4 className="text-[#94A7CB66] text-[12px] font-semibold mb-6">
            MAIN MENU
          </h4>
          <ul className="menu">
            <li className="mb-4 ml-[-7px] flex items-center bg-[#3563E9] text-white p-2 rounded-[5px] font-medium">
              <FaCar className="mr-3" />
              <span className="active-link">Dashboard</span>
            </li>
            <li className="mb-4 flex items-center text-[#90A3BF] font-medium">
              <FaCar className="mr-3" />
              <span>Car Rent</span>
            </li>
            <li className="mb-4 flex items-center text-[#90A3BF] font-medium">
              <FaChartBar className="mr-3" />
              <span>Insight</span>
            </li>
            <li className="mb-4 flex items-center text-[#90A3BF] font-medium">
              <FaWallet className="mr-3" />
              <span>Reimburse</span>
            </li>
            <li className="mb-4 flex items-center text-[#90A3BF] font-medium">
              <FaEnvelope className="mr-3" />
              <span>Inbox</span>
            </li>
            <li className="flex items-center text-[#90A3BF] font-medium">
              <FaCalendarAlt className="mr-3" />
              <span>Calendar</span>
            </li>
          </ul>
        </div>

        <div className="preferences">
          <h4 className="text-[#94A7CB66] text-[12px] font-semibold mb-6">
            PREFERENCES
          </h4>
          <ul>
            <li className="flex items-center mb-4 text-[#90A3BF] font-medium">
              <FaCog className="mr-3" />
              <span>Settings</span>
            </li>
            <li className="flex items-center text-[#90A3BF] font-medium">
              <FaMoon className="mr-3" />
              <span>Dark Mode</span>
              <div className="ml-auto flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#3563E9]">
                <FaMoon className="text-white" />
              </div>
            </li>
          </ul>
        </div>

        <div className="logout flex items-center mt-6 text-[#90A3BF]">
          <TbLogout2 className="mr-3" />
          <span>Log Out</span>
        </div>
      </div>
      {/* Sidebar ends */}

      {/* Main Dashbody starts */}
      <div className="flex gap-[20px]">
        <div className="p-6 w-[534px] rounded-lg shadow-lg h-[836px] bg-white mt-[32px]">
          <div className="text-[#1A202C] text-[20px] mb-[20px] font-[700]">
            Details Rental
          </div>
          <div>
            <Image
              src={map}
              alt="maps"
              width={486}
              height={272}
              className="rounded-[10px] border border-[#FFFFFF]"
            />
          </div>

          <div className="flex flex-col items-center gap-4 mt-[20px] mb-4">
            <div className="flex justify-between  gap-[200px]">
              <div className="flex gap-[20px]">
                <div>
                  <Image
                    src={car}
                    alt="Car Thumbnail"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="flex ">
                      <div className="font-bold text-lg">Nissan GT – R</div>
                    </div>

                    <div className="text-[14px] text-[#3D5278]">Sport Car</div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500">#9761</div>
            </div>

            <div className="flex flex-col items-start px-6 pb-7 justify-center w-[542px] h-[132px] rounded-[10px]">
              <div className="flex flex-row items-center mt-[19px] leading-9 justify-start gap-2 ">
                <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#3563E94D]">
                  <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-full"></div>
                </div>
                <div className="text-[16px] text-[16px] font-semibold">
                  Pick-Up
                </div>
              </div>
              <div className="flex items-center justify-start w-[486px] gap-5">
                <div className="flex flex-col items-start justify-center mt-2">
                  <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
                    Location
                  </div>
                  <div className="flex flex-row items-center gap-8">
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
                  <div className="flex flex-row items-center gap-8">
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
           

            <div className="flex flex-col items-start px-6 pb-7 justify-center w-[542px] h-[132px] rounded-[10px] ">
                    <div className="flex flex-row items-center mt-[19px] leading-9 justify-start gap-2 ">
                      <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#3563E94D]">
                        <div className="w-[8px] h-[8px] bg-[#54A6FF] rounded-full"></div>
                      </div>
                      <div className="text-[16px] text-[16px] font-semibold">Drop-off</div>
                    </div>
                    <div className="flex items-center justify-start w-[486px] gap-5">
                      <div className="flex flex-col items-start justify-center mt-2">
                        <div className="text-[16px] text[#1A202C] font-bold leading-3 py-[10px]">
                          Location
                        </div>
                        <div className="flex flex-row items-center gap-8">
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
                        <div className="flex flex-row items-center gap-8">
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
      

            <div className="flex justify-between w-[500px] mt-[20px] font-bold text-lg">
                <div className="w-full">
                    <div>Total Rental Price</div>
                    <div className="text-[14px] w-full text-[#90A3BF] font-[500]">Overall price and includes rental discount</div>
                </div>
            
                <span className="text-[32px]">$80.00</span>
              </div>
          </div>
        </div>
        <div>

            <div className="flex flex-col mt-[30px] gap-[40px] items-center">
            <div className="bg-white p-6 w-[504px] h-[324px] rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Top 5 Car Rental</h3>
      <div className="flex items-center gap-2">
       <Image src={chart} alt="chart" height={220} width={220}/>
        
          <div className=" absolute mt-[10px] ml-[80px] flex flex-col gap-[10px]">
            <p className="text-xl font-[700]">72,030</p>
            <p className="text-gray-500 text-sm">Rental Car</p>
          </div>
       

       
        <ul className="space-y-5">
  {data.map((item, index) => (
    <li key={index} className="flex items-center gap-[70px] ml-[20px] justify-between text-sm">
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
        <span className="text-gray-500">{item.type}</span>
      </div>
      <span className="font-semibold">{item.value}</span>
    </li>
  ))}
</ul>


      </div>
    </div>
    <div className="bg-white w-[504px] h-[480px] p-6 rounded-lg shadow-lg">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-semibold">Recent Transactions</h3>
    <a href="#" className="text-blue-500 text-sm">View All</a>
  </div>
  <ul className="space-y-4 mt-[30px]">
    {transactions.map((transaction, index) => (
      <React.Fragment key={index}>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={transaction.car}
              alt={transaction.model}
              width={50}
              height={30}
              className="rounded-lg"
            />
            <div className="ml-4">
              <p className="font-bold">{transaction.model}</p>
              <p className="text-gray-500 text-sm">{transaction.type}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">{transaction.date}</p>
            <p className="font-bold">{transaction.price}</p>
          </div>
        </li>
       
        {index < transactions.length - 1 && (
          <div className="bg-[#13131329] w-full h-[1px] my-4"></div>
        )}
      </React.Fragment>
    ))}
  </ul>
</div>

            </div>
        </div>
      </div>
     
    </div>
  );
};

export default Dashboard;
