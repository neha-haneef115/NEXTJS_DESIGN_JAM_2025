"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";

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

const Likedpage = () => {
  const [likedCars, setLikedCars] = useState<Car[]>([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedCars");
    if (storedLikes) {
      setLikedCars(Object.values(JSON.parse(storedLikes))); // Convert object to array
    }
  }, []);

  const removeLike = (carId: string) => {
    const updatedLikes = likedCars.filter((car) => car.id !== carId);
    setLikedCars(updatedLikes);
    localStorage.setItem("likedCars", JSON.stringify(updatedLikes.reduce((acc, car) => {
      acc[car.id] = car;
      return acc;
    }, {} as Record<string, Car>))); // Store as an object again
  };

  return (
    <div className="w-[1312px] px-[30px] py-[20px]">
      <h2 className="font-bold text-[20px] text-[#1A202C] mb-4">Liked Cars</h2>

      {likedCars.length === 0 ? (
        <p className="text-[#90A3BF]">No cars liked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {likedCars.map((car) => (
            <div key={car.id} className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF] shadow-md p-4 relative">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-[#1A202C] font-bold text-[20px]">{car.name}</h3>
                  <p className="text-[14px] text-[#90A3BF] font-semibold">{car.type}</p>
                </div>
                <button onClick={() => removeLike(car.id)} className="text-[#ED3F3F] text-[24px]">
                  <FaHeart />
                </button>
              </div>

              <div className="flex justify-center mt-4">
                <Image src={car.imageUrl} alt={car.name} width={232} height={140} className="object-cover" />
              </div>

              <div className="flex justify-between text-[#90A3BF] text-[14px] mt-4">
                <span>{car.fuelCapacity} Fuel</span>
                <span>{car.transmission}</span>
                <span>{car.seatingCapacity} Seats</span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[20px] font-bold text-[#1A202C]">{car.pricePerDay}</span>
                <button onClick={() => removeLike(car.id)} className="text-[#ED3F3F] text-[14px] font-semibold">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Likedpage;
