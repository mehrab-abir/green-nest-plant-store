import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/PlantCard';

const Plants = () => {
    const plants = useLoaderData();
    return (
      <div className="mt-15">
        <title>All Plants</title>
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl">All Plants</h1>
            <p className="text-gray-500 text-lg mt-5">
              Browse our complete collection of indoor plants perfect for your
              home
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 items-stretch">
            {plants.map((plant) => {
              return <PlantCard key={plant.plantId} plant={plant}></PlantCard>;
            })}
          </div>
        </div>
      </div>
    );
};

export default Plants;