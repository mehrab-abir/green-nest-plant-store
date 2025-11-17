import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";

const TopRatedPlants = () => {
  const plants = useLoaderData();
  console.log(plants);

    const topRated = plants.slice(0,5);
  return (
    <div className="mt-5">
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold">Top Rated Plants</h1>
        <div>
            {
                topRated.map((plant)=>{
                    return <PlantCard key={plant.plantId} plant={plant}></PlantCard>;
                })
            }
        </div>
      </div>
    </div>
  );
};

export default TopRatedPlants;
