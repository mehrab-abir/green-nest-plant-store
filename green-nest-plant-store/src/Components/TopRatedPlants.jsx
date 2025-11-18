import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";

const TopRatedPlants = () => {
  const plants = useLoaderData();

    const topRated = plants.slice(0,6);
  return (
    <div className="mt-15">
      <div className="w-11/12 mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl">Top Rated Indoor Plants</h1>
        <p className="text-gray-500 text-lg mt-5">
          Discover our most loved plants, carefully selected for their beauty
          and ease of care
        </p>
      </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 items-stretch">
          {topRated.map((plant) => {
            return <PlantCard key={plant.plantId} plant={plant}></PlantCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopRatedPlants;
