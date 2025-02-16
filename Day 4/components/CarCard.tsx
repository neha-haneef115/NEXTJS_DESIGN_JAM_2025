import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import Image from "next/image";

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

const CarCard = ({ car, liked, onLike }: { car: Car; liked: boolean; onLike: () => void }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <Image src={car.imageUrl} alt={car.name} width={300} height={200} className="rounded-lg" />
      <h3 className="text-lg font-semibold">{car.name}</h3>
      <p className="text-sm text-gray-500">{car.brand}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-md font-bold">${car.pricePerDay} / day</p>
        <button onClick={onLike} className="text-red-500">
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
