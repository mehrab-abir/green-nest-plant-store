import React from 'react';
import expert1 from '../assets/images/plant-experts/expert1.png'
import expert2 from '../assets/images/plant-experts/expert2.jpg'
import expert3 from '../assets/images/plant-experts/expert3.png'
import expert4 from '../assets/images/plant-experts/expert4.png'

const PlantExpert = () => {
    return (
      <div className="bg-white pt-6 pb-10 mt-15">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-bold text-2xl">Meet Our Green Experts</h1>
            <p className="text-gray-500 text-lg mt-5">
              Get personalized advice from our team of certified plant care
              specialists
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 space-y-4 md:space-y-0">
            <div className="flex flex-col items-center justify-center h-70 w-full px-3 bg-white rounded-xl shadow-xl">
              <img src={expert2} alt="" className="w-48" />
              <p className="text-xl my-2 font-semibold">Sarah Green</p>
              <p className="text-gray-500 text-center">Succulents & Cacti</p>
            </div>
            
            <div className="flex flex-col items-center justify-center h-70 w-full px-3 bg-white rounded-xl shadow-xl">
              <img src={expert1} alt="" className="w-48" />
              <p className="text-xl my-2 font-semibold">Michael Leaf</p>
              <p className="text-gray-500 text-center">Tropical Plants</p>
            </div>

            <div className="flex flex-col items-center justify-center h-70 w-full px-3 bg-white rounded-xl shadow-xl">
              <img src={expert3} alt="" className="w-48" />
              <p className="text-xl my-2 font-semibold">Emma Brynn</p>
              <p className="text-gray-500 text-center">Air Purifying Plants</p>
            </div>

            <div className="flex flex-col items-center justify-center h-70 w-full px-3 bg-white rounded-xl shadow-xl">
              <img src={expert4} alt="" className="w-48" />
              <p className="text-xl my-2 font-semibold">David Root</p>
              <p className="text-gray-500 text-center">Air Purifying Plants</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PlantExpert;