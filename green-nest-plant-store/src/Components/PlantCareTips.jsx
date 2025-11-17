import React from 'react';
import { GiPlantWatering } from "react-icons/gi";
import { PiSunLight } from "react-icons/pi";
import { GiPlantsAndAnimals } from "react-icons/gi";

const PlantCareTips = () => {
    return (
      <div className="bg-green-100 py-15 mt-15">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-bold text-2xl">Essential Plant Care Tips</h1>
            <p className="text-gray-500 text-lg mt-5">
              Master the basics of plant care to keep your green friends
              thriving
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="flex flex-col items-center justify-center h-70 px-3 bg-white rounded-xl shadow-xl">
              <GiPlantWatering className='text-5xl text-blue-500 mb-4' />
              <p className="text-xl my-4">Watering</p>
              <p className="text-gray-500 text-center">
                Most indoor plants prefer soil that's moist but not waterlogged.
                Check the top inch of soil before watering.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center h-70 px-3 bg-white rounded-xl shadow-xl">
              <PiSunLight className='text-5xl text-yellow-400 mb-4' />
              <p className="text-xl my-4">Sunlight</p>
              <p className="text-gray-500 text-center">
                Place plants according to their light needs. Most thrive in
                bright, indirect light away from harsh sun.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center h-70 px-3 bg-white rounded-xl shadow-xl">
              <GiPlantsAndAnimals className='text-5xl text-green-600 mb-4' />
              <p className="text-xl my-4">Fertilizing</p>
              <p className="text-gray-500 text-center">
                Feed your plants during growing season (spring and summer) with
                balanced liquid fertilizer monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PlantCareTips;