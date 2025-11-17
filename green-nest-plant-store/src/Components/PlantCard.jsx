import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({plant}) => {
    const { plantId,plantName, price, availableStock, image, category, careLevel } = plant;

    return (
      <div className="shadow-md rounded-md overflow-hidden h-full relative">
        <img
          src={image}
          alt=""
          className="w-full object-cover h-52 md:h-[375px] hover:scale-105 cursor-pointer transition-transform duration-300"
        />
        <div className="p-4 flex flex-col">
          <p className="text-gray-500">{category}</p>
          <h2 className="text-lg md:text-2xl font-bold my-4 leading-snug min-h-12">
            {plantName}
          </h2>
          <div className="flex items-center justify-between mt-auto">
            <span className="font-bold text-xl text-green-500">${price}</span>
            <span className="text-lg">In Stock: {availableStock}</span>
          </div>
          <Link
            to={`/plantdetails/${plantId}`}
            className="btn bg-green-600 text-white w-full hover:scale-95 transition duration-200 mt-2"
          >
            View Details
          </Link>
        </div>
        <div className='absolute top-3 right-3 bg-white p-1 rounded-xl' title='care level'>
          <span className='text-green-500'>{careLevel}</span>
        </div>
      </div>
    );
};

export default PlantCard;