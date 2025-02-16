import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import car1 from "@/image/image 7.png";
import car2 from "@/image/image 8.png";
import Button from "@/components/Mybutton";
import rectangle from "@/public/Rectangle 23780.svg";
import Route from "@/components/Route";
import Mainbody from "@/components/Mainbody";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-[Plus Jakarta Sans, sans-serif]">
        <Header />

        {/* body start */}
        <div className="bg-[#F6F7F9]">
          <div className="flex justify-center gap-7 py-8">
            <div className="relative overflow-hidden w-[610px] h-[360px] gap-0 rounded-[10px] bg-[#54A6FF]">
              <div className="absolute rounded-full w-[150px] h-[150px] top-[230px] left-[155px] gap-0 border-[20px] border-solid border-[#FFFFFF0F]"></div>
              <div className="absolute rounded-full w-[275px] h-[275px] top-[167px] left-[93px] gap-0 border-[20px] border-solid border-[#FFFFFF0F]"></div>
              <div className="absolute rounded-full w-[400px] h-[400px] top-[105px] left-[30px] gap-0 border-[20px] border-solid border-[#FFFFFF0F]"></div>
              <div className="absolute rounded-full w-[525px] h-[525px] top-[42px] left-[-32px] gap-0 border-[20px] border-solid border-[#FFFFFF0F]"></div>
              <div className="absolute rounded-full w-[650px] h-[650px] top-[-20px] left-[-95px] gap-0 border-[20px] border-solid border-[#FFFFFF0F]"></div>
              <div className="absolute rounded-full w-[775px] h-[775px] top-[-83px] left-[-157px] gap-0 border-[20px] border-solid border-[#FFFFFF0F]"></div>
              <div className="w-[284px] h-[160px] mx-7">
                <div className="font-medium h-[96px] w-[272px] text-[#FFFFFF] py-4 text-[32px] leading-[40px] tracking-[-0.03em]">
                  The Best Platform for Car Rental
                </div>
                <div className="w-[284px] h-[48px] text-[16px] font-medium py-4 leading-[24px] tracking-[-0.02em] text-white">
                  Ease of doing a car rental safely and reliably. Of course at a low price.
                </div>
                <div className="absolute top-[180px]">
                  <Button />
                </div>
              </div>
              <div className=" absolute top-[234px] left-[137px]">
                <Image src={car1} alt="car image" height={116} width={406} />
              </div>
            </div>


            <div className="relative overflow-hidden w-[630px] h-[360px]  gap-0 hidden sm-375:block rounded-[10px] bg-[#3563E9]">
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

  <div className="w-[284px] h-[160px] mx-7 absolute z-11">
    <div className="font-medium h-[96px] w-[272px] text-white py-4 text-[32px] leading-[40px] tracking-[-0.03em]">
      Easy way to rent a car at a low price
    </div>
    <div className="w-[284px] h-[48px] text-[16px] font-medium py-4 leading-[24px] tracking-[-0.02em] text-white">
      Providing cheap car rental services and safe and comfortable facilities.
    </div>
    <div className="absolute top-[180px] left-[0px]">
      <div className="w-[120px] cursor-pointer h-[44px] px-[20px] py-0 rounded-[5px] flex items-center justify-center bg-[#54A6FF] text-white">
        Rent now
      </div>
    </div>
  </div>

  <div className="absolute top-[232px] left-[185px] z-10">
    <Image src={car2} alt="car image" height={108} width={340} />
  </div>
</div>


          </div>
          <Route />
          <Mainbody />
        </div>

        <Footer />
      </div>
    </>
  );
}
