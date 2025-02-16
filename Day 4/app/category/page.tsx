"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Route from "@/components/Route";
import Route1 from "@/components/Route1";
import { client } from "../../sanity/lib/client";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import Image from "next/image";
import icon1 from "@/public/Vectxsor.png";
import icon2 from "@/public/Car (5).png";
import icon3 from "@/public/profile-2user.png";
import Button from "@/components/Mybutton";

// Notice seatingCapacity remains a string here
interface Car {
  id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  imageUrl: string;
}

// Update FilterState so that capacities is a Record<string, boolean>
// This will hold strings like "4 People" or "5 seats"
interface FilterState {
  types: {
    Sport: boolean;
    SUV: boolean;
    MPV: boolean;
    Sedan: boolean;
    Coupe: boolean;
    Hatchback: boolean;
    Gasoline: boolean;
    Hybrid: boolean;
    Electric: boolean;
    Diesel: boolean;
  };
  capacities: Record<string, boolean>;
  maxPrice: number;
}

const Category = () => {
  const [AllCars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [likedCars, setLikedCars] = useState<Record<string, boolean>>({});
  const [notification, setNotification] = useState<string | null>(null);
  // We'll store unique capacity strings here
  const [uniqueCapacities, setUniqueCapacities] = useState<string[]>([]);
  
  const [filters, setFilters] = useState<FilterState>({
    types: {
      Sport: false,
      SUV: false,
      MPV: false,
      Sedan: false,
      Coupe: false,
      Hatchback: false,
      Gasoline: false,
      Hybrid: false,
      Electric: false,
      Diesel: false,
    },
    capacities: {},
    maxPrice: 200, // Default maximum price
  });

  // Load liked cars from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem("likedCars");
    if (storedLikes) {
      setLikedCars(JSON.parse(storedLikes));
    }
  }, []);

  // Fetch cars from Sanity (seatingCapacity remains as a string)
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const CarData = await client.fetch(
          `*[_type == "car"] | order(id asc) {
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
        if (CarData.length > 0) {
          console.log("Fetched cars:", CarData.length);
          setCars(CarData);
          setFilteredCars(CarData);
          
          // Extract and sort unique capacities as strings.
          // We extract the numeric value for sorting purposes.
          const capacitiesSet = new Set(CarData.map((car: any) => car.seatingCapacity));
          const capacitiesArray = Array.from(capacitiesSet) as string[];
          capacitiesArray.sort((a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            return numA - numB;
          });
          setUniqueCapacities(capacitiesArray);
          
          // Initialize capacity filters with all capacities set to false
          const initialCapacities: Record<string, boolean> = {};
          capacitiesArray.forEach((capacity) => {
            initialCapacities[capacity] = false;
          });
          setFilters((prev) => ({ ...prev, capacities: initialCapacities }));
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  // Handle filtering: same logic as type filtering but for capacities (as strings)
  useEffect(() => {
    let filtered = [...AllCars];

    // Type filtering
    const selectedTypes = Object.entries(filters.types)
      .filter(([_, isSelected]) => isSelected)
      .map(([type]) => type);
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((car) =>
        selectedTypes.includes(car.type) ||
        selectedTypes.includes(car.fuelCapacity)
      );
    }

    // Capacity filtering: get selected capacity strings
    const selectedCapacities = Object.entries(filters.capacities)
      .filter(([_, isSelected]) => isSelected)
      .map(([capacity]) => capacity);
    if (selectedCapacities.length > 0) {
      filtered = filtered.filter((car) =>
        selectedCapacities.includes(car.seatingCapacity)
      );
    }

    // Price filtering
    filtered = filtered.filter((car) => {
      const price = parseFloat(car.pricePerDay.replace(/[^0-9.]/g, ""));
      return price <= filters.maxPrice;
    });

    setFilteredCars(filtered);
    // Reset visible count when filters change
    setVisibleCount(9);
  }, [filters, AllCars]);

  const handleTypeChange = (type: keyof FilterState["types"]) => {
    setFilters((prev) => ({
      ...prev,
      types: { ...prev.types, [type]: !prev.types[type] },
    }));
  };

  const handleCapacityChange = (capacity: string) => {
    setFilters((prev) => ({
      ...prev,
      capacities: { ...prev.capacities, [capacity]: !prev.capacities[capacity] },
    }));
  };

  const handlePriceChange = (price: number) => {
    setFilters((prev) => ({ ...prev, maxPrice: price }));
  };

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

  const toggleShowMore = () => {
    setVisibleCount((prev) => (prev === 9 ? filteredCars.length : 9));
  };

  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <div className="flex flex-col lg:flex-row w-full bg-white">
        {/* Filters Section */}
        <div className="w-[360px] h-full p-[32px] bg-white rounded-[8px] shadow-md hidden md:block">
          {/* Type Filters */}
          <div className="w-[176px] h-[352px] mb-[28px]">
            <h3 className="text-[12px] font-bold mb-[16px] text-[#596780]">Type</h3>
            <div className="flex flex-col gap-[12px]">
              {Object.entries(filters.types).map(([type, isChecked]) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      handleTypeChange(type as keyof FilterState["types"])
                    }
                    className="accent-[#3563E9]"
                  />
                  <span className="font-[600] text-[20px] text-[#596780]">
                    {type}
                  </span>
                  <span className="font-[500] text-[20px] text-[#90A3BF]">
                    (
                    {AllCars.filter(
                      (car) =>
                        car.type === type || car.fuelCapacity === type
                    ).length}
                    )
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Filters */}
          <div className="w-[176px] h-auto mt-[170px] mb-[28px]">
            <h3 className="text-[12px] font-bold mb-[16px] text-[#90A3BF]">
              Capacity
            </h3>
            <div className="flex flex-col gap-[12px]">
              {uniqueCapacities.map((capacity) => (
                <label key={capacity} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.capacities[capacity] || false}
                    onChange={() => handleCapacityChange(String(capacity))}
                    className="accent-[#3563E9]"
                  />
                  <span className="font-[600] text-[15px] text-[#596780]">
                    {capacity} Person
                  </span>
                  <span className="font-[500] text-[20px] text-[#90A3BF]">
                    (
                    {AllCars.filter(
                      (car) => car.seatingCapacity === String(capacity)
                    ).length || AllCars.filter(
                      (car) => parseInt(car.seatingCapacity) === capacity
                    ).length}
                    )
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-[12px] font-bold mb-[16px] text-[#90A3BF]">
              Price
            </h3>
            <div className="flex flex-col gap-[12px]">
              <input
                type="range"
                min="0"
                max="200"
                value={filters.maxPrice}
                onChange={(e) => handlePriceChange(parseInt(e.target.value))}
                className="w-[176px] accent-[#3563E9]"
              />
              <div className="font-[600] text-[20px] text-[#596780]">
                Max. ${filters.maxPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        {/* Filters Section End */}

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <div className="block lg:hidden">
            <Route />
          </div>
          <div className="hidden lg:block">
            <Route1 />
          </div>
          <div className="w-full px-[30px] py-[20px] relative">
            {notification && (
              <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#3563E9] text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-500">
                {notification}
              </div>
            )}
            {filteredCars.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[30px] mt-[20px]">
                  {filteredCars.slice(0, visibleCount).map((car) => (
                    <CarCard
                      key={car.id}
                      car={car}
                      liked={likedCars[car.id]}
                      onLike={() => toggleLike(car.id, car.name)}
                    />
                  ))}
                </div>
                <div className="flex justify-center mt-[40px]">
                  {filteredCars.length > 9 && (
                    <button
                      onClick={toggleShowMore}
                      className="w-[156px] h-[44px] cursor-pointer rounded-[4px] flex items-center justify-center bg-[#3563E9] text-[16px] font-[500] text-white"
                    >
                      {visibleCount === 9 ? "Show More Cars" : "Show Less"}
                    </button>
                  )}
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500 mt-10">
                {AllCars.length === 0 ? "Loading cars..." : "No cars match your filters"}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

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
            className={`cursor-pointer text-[24px] transition-colors duration-300 ${liked ? "text-[#ED3F3F]" : "text-[#000000]"}`}
            onClick={onLike}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
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
            <div className="text-[20px] font-[700] text-[#1A202C]">
              {car.pricePerDay.replace("/day", "").trim()}/
            </div>
            <div className="text-[14px] font-[700] text-[#90A3BF] ml-[2px]">day</div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Category;
