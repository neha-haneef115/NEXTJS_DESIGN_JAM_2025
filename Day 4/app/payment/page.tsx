import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/image/Layer.png";
import Button from "@/components/Mybutton";
import Image from "next/image";
import paypal from "@/image/visa.png";
import visa from "@/image/paypal.png";
import mastercard from "@/image/mastercard.png";
import bitcoin from "@/image/Bitcoin (1).png";
import car from "@/image/View 1.png";

const RentalForm = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-[10px]">
        <div>
          <div className="container mx-auto p-6 space-y-8 flex flex-row gap-8 items-start">
            
<div className="flex-1 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Billing Info</h2>
                <p className="text-gray-500 mb-4">Please enter your billing info</p>
                <div className="flex flex-wrap gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border rounded-lg bg-[#F6F7F9] p-3 w-full lg:w-[48%]"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="border rounded-lg p-3 bg-[#F6F7F9] w-full lg:w-[48%]"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="border rounded-lg p-3 bg-[#F6F7F9] w-full lg:w-[48%]"
                  />
                  <input
                    type="text"
                    placeholder="Town / City"
                    className="border rounded-lg p-3 w-full bg-[#F6F7F9] lg:w-[48%]"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Rental Info</h2>
                <p className="text-gray-500 mb-4">Please select your rental date</p>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Pick-Up</h3>
                    <div className="flex flex-col gap-4">
                      <select className="border rounded-lg bg-[#F6F7F9] p-3 w-full">
                        <option>Select your city</option>
                      </select>
                      <input
                        type="date"
                        className="border rounded-lg p-3 bg-[#F6F7F9] w-full"
                      />
                      <select className="border bg-[#F6F7F9] rounded-lg p-3 w-full">
                        <option>Select your time</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Drop-Off</h3>
                    <div className="flex flex-col gap-4">
                      <select className="border bg-[#F6F7F9] rounded-lg p-3 w-full">
                        <option>Select your city</option>
                      </select>
                      <input
                        type="date"
                        className="border bg-[#F6F7F9] rounded-lg p-3 w-full"
                      />
                      <select className="border bg-[#F6F7F9] rounded-lg p-3 w-full">
                        <option>Select your time</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <p className="text-gray-500 mb-4">Please enter your payment method</p>
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F6F7F9] p-2 rounded-[14px]">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-row items-center mt-[19px] leading-9 justify-start gap-2">
                        <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#3563E94D]">
                          <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-full"></div>
                        </div>
                        <div className="text-[16px] font-semibold">Credit Card</div>
                      </div>
                      <div className="flex items-center justify-center gap-[5px]">
                        <div>
                          <Image
                            src={visa}
                            alt="Visa/Mastercard"
                            height={16}
                            width={48}
                          />
                        </div>
                        <div>
                          <Image
                            src={mastercard}
                            alt="Visa/Mastercard"
                            width={32}
                            height={20}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <input
                        type="text"
                        placeholder="Card number"
                        className="border rounded-lg p-3 w-full lg:w-[48%]"
                      />
                      <input
                        type="text"
                        placeholder="DD/MM/YY"
                        className="border rounded-lg p-3 w-full lg:w-[48%]"
                      />
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="border rounded-lg p-3 w-full lg:w-[48%]"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="border rounded-lg p-3 w-full lg:w-[48%]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#F6F7F9] p-4 rounded-[10px] gap-4 mt-6">
                    <div className="flex gap-[20px]">
                      <div>
                        <input type="radio" name="payment" />
                      </div>
                      <div className="text-[#1A202C] font-[600]">Paypal</div>
                    </div>
                    <Image src={paypal} alt="PayPal" height={24} width={100} />
                  </div>
                  <div className="flex items-center justify-between bg-[#F6F7F9] p-4 rounded-[10px] gap-4 mt-6">
                    <div className="flex gap-[20px]">
                      <div>
                        <input type="radio" name="payment" />
                      </div>
                      <div className="text-[#1A202C] font-[600]">Bitcoin</div>
                    </div>
                    <Image src={bitcoin} alt="PayPal" height={4} width={100} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Confirmation</h2>
                <p className="text-gray-500 mb-4">
                  We are getting to the end. Just a few clicks and your rental is ready!
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>
                      I agree with sending marketing and newsletter emails. No spam, promised!
                    </span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>
                      I agree with our terms and conditions and privacy policy.
                    </span>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <Button />
                </div>
                <div className="flex flex-col mt-[30px] gap-[10px]">
                  <Image src={Icon} alt="Icon" height={28} width={26} />
                  <div className="text-[16px] text-[#1A202C] mt-1 font-[600]">
                    All your data are safe.
                  </div>
                  <div className="text-gray-500">
                    We are using the most advanced security to provide you the best experience ever.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
                <p className="text-gray-500 mb-4">
                  Prices may change depending on the length of the rental and the
                  price of your rental car.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={car}
                    alt="Car Thumbnail"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Nissan GT – R</h3>
                    <p className="text-sm text-gray-500">440+ Reviewers</p>
                  </div>
                </div>
                <div className="border-t py-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-[600] ">$80.00</span>
                  </div>
                  <div className="flex justify-between mt-[10px] text-gray-700">
                    <span>Tax</span>
                    <span className="font-[600]">$0</span>
                  </div>
                  <div className=" flex justify-between border rounded-lg mt-[10px] bg-[#F6F7F9] p-3 w-[444px] ">
                    <div>Apply promo code</div>
                    <div className="font-[600]">Apply now</div>
                  </div>
                  <div className="flex justify-between mt-[20px] font-bold text-lg">
                    <div>
                      <div>Total Rental Price</div>
                      <div className="text-[14px] text-[#90A3BF] font-[500]">Overall price and includes rental discount</div>
                    </div>
                    <span className="text-[32px]">$80.00</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div>
         
        </div>
      </div> <Footer />
    </div>
  );
};

export default RentalForm;
