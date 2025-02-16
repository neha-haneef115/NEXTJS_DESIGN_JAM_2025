"use client";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import Image from "next/image";
import icon1 from "@/public/Vectxsor.png";
import icon2 from "@/public/Car (5).png";
import icon3 from "@/public/profile-2user.png";
import Button from "@/components/Mybutton";

interface Car {
  id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: string;
  originalPrice: string;
  imageUrl: string;
}

export function Mainbody() {
  const [popularCars, setPopularCars] = useState<Car[]>([]);
  const [recommendedCars, setRecommendedCars] = useState<Car[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [likedCars, setLikedCars] = useState<Record<string, boolean>>({});
  const [showAllRecommended, setShowAllRecommended] = useState(false);
  const [showAllPopular, setShowAllPopular] = useState(false);

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedCars");
    if (storedLikes) {
      setLikedCars(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const popularData = await client.fetch(
          `*[_type == "car" && "popular" in tags] | order(id asc) {
            id,
            name,
            brand,
            type,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice,
            "imageUrl": image.asset->url
          }`
        );

        const recommendedData = await client.fetch(
          `*[_type == "car" && "recommended" in tags] | order(id asc) {
            id,
            name,
            brand,
            type,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice,
            "imageUrl": image.asset->url
          }`
        );

        setPopularCars(popularData);
        setRecommendedCars(recommendedData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const toggleLike = (carId: string, carName: string) => {
    setLikedCars((prev) => {
      const updatedLikes = { ...prev, [carId]: !prev[carId] };
      localStorage.setItem("likedCars", JSON.stringify(updatedLikes));

      if (!prev[carId]) {
        setNotification(`${carName} added to favorites`);
        setTimeout(() => setNotification(null), 2000);
      }

      return updatedLikes;
    });
  };

  return (
    <div className="w-[1312px] px-[30px] py-[20px] relative">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#3563E9] text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-500">
          {notification}
        </div>
      )}

    {/* Popular Cars Section */}
<div className="flex justify-between px-[20px] leading-10">
  <div className="font-[550] text-[#90A3BF] text-[16px]">Popular Cars</div>
  <div
    className="font-[550] text-[16px] text-[#3563E9] cursor-pointer"
    onClick={() => setShowAllPopular((prev) => !prev)}
  >
    {showAllPopular ? "View Less" : "View All"}
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[20px]">
  {popularCars.slice(0, showAllPopular ? popularCars.length : 4).map((car) => (
    <CarCard key={car.id} car={car} liked={likedCars[car.id]} onLike={() => toggleLike(car.id, car.name)} />
  ))}
</div>

{/* Only show the "View More / View Less" button if there are more than 4 cars */}
{popularCars.length > 4 && (
  <div className="relative flex items-center mt-[40px] mb-[50px]">
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <div
        className="w-[156px] h-[44px] cursor-pointer rounded-[4px] flex items-center justify-center bg-[#3563E9] text-[16px] font-[500] text-white"
        onClick={() => setShowAllPopular(!showAllPopular)}
      >
        {showAllPopular ? "View Less" : "View More"}
      </div>
    </div>
  </div>
)}


      {/* Recommended Cars Section */}
      <div className="font-[550] text-[#90A3BF] py-[30px] text-[16px]">Recommended</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[20px]">
        {recommendedCars.slice(0, showAllRecommended ? recommendedCars.length : 8).map((car) => (
          <CarCard key={car.id} car={car} liked={likedCars[car.id]} onLike={() => toggleLike(car.id, car.name)} />
        ))}
      </div>

      {/* Show More Cars Button */}
      {recommendedCars.length > 8 && (
        <div className="relative flex items-center mt-[40px] mb-[50px]">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div
              className="w-[156px] h-[44px] cursor-pointer rounded-[4px] flex items-center justify-center bg-[#3563E9] text-[16px] font-[500] text-white"
              onClick={() => setShowAllRecommended(!showAllRecommended)}
            >
              {showAllRecommended ? "Show Less" : "Show More"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface CarCardProps {
  car: Car;
  liked?: boolean;
  onLike: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, liked = false, onLike }) => {
  return (
    <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF] shadow-md">
      <div>
        <div className="flex px-[20px] mt-[20px] justify-between items-center">
          <div className="flex flex-col">
            <div className="text-[#1A202C] font-[700] text-[20px]">{car.name}</div>
            <div className="text-[14px] text-[#90A3BF] font-[700]">{car.type}</div>
          </div>
          <div
            className={`cursor-pointer text-[24px] transition-colors duration-300 ${
              liked ? "text-[#ED3F3F]" : "text-[#000000]"
            }`}
            onClick={onLike}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>

        {/* Updated Image Styling */}
        <div className="flex items-center justify-center mt-[20px]">
          <div className="w-[232px] h-[140px] flex items-center justify-center overflow-hidden">
            <Image
              src={car.imageUrl}
              alt={car.name}
              width={232}
              height={140}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center justify-around mt-[65px]">
          <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]">
            <Image src={icon1} alt="Fuel" height={24} width={24} />
            {car.fuelCapacity}
          </div>
          <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]">
            <Image src={icon2} alt="Transmission" height={24} width={24} />
            {car.transmission}
          </div>
          <div className="flex gap-1 text-[#90A3BF] text-[14px] font-[500]">
            <Image src={icon3} alt="Seats" height={24} width={24} />
            {car.seatingCapacity}
          </div>
        </div>

        <div className="flex justify-around py-[15px]">
          <div className="flex items-center">
            <div className="text-[20px] font-[700] text-[#1A202C]">{car.pricePerDay.replace("/day", "").trim()}/</div>
            <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]">day</div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
