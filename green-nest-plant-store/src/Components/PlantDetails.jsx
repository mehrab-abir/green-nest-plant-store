import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Header from './Header';
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Footer from './Footer';
import Booking from './Booking';

const PlantDetails = () => {
    const {id} = useParams();

    const allPlants = useLoaderData();

    const thisPlant = allPlants.find(plant => plant.plantId === Number(id));

    const {image,category,plantName,availableStock,price, careLevel, rating, providerName, description} = thisPlant;

    return (
      <div>
        <title>{plantName}</title>
        <Header></Header>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-around items-center p-1 pt-32">
          <div className="md:w-1/2 relative flex items-center justify-center mt-5 md:mt-0">
            <img
              src={image}
              alt=""
              className="w-3/4 object-cover rounded-2xl shadow-lg"
            />
            <div className='absolute top-3 right-15 md:right-24 bg-white text-green-500 px-6 py-2 rounded-lg'>
                <span className='font-semibold' title='care level'>{careLevel}</span>
            </div>
          </div>
          <div className='mt-5 md:mt-0'>
            <p className="text-green-600 text-lg bg-green-100 p-2 w-fit rounded-lg" title='category'>{category}</p>
            <h2 className="text-5xl font-bold my-3">{plantName}</h2>

            <h2 className="text-4xl text-green-600 font-bold mt-8">${price}</h2>
            <h4 className="font-bold text-lg mt-6 text-gray-500">Description</h4>
            <p className="mb-4">{description}</p>

            <div className="flex justify-between mt-8">
              <p className="text-lg text-red-500 font-bold">In Stock: {availableStock}</p>
              <p className="text-lg font-bold">Rating: <span className='text-orange-500'>{rating}</span></p>
            </div>

            <div className="mt-4 bg-green-200 flex items-center py-2 rounded-md px-3">
              <HiOutlineBadgeCheck className='text-lg font-bold' />
              <p className='font-bold'>Provided By -&nbsp;</p>
              <p className="flex items-center"> {providerName}</p>
            </div>

            <div className='hidden md:block mt-4 bg-black text-white py-1 px-3 w-fit rounded-lg hover:bg-gray-800 hover:px-4 transition-all duration-300'>
                <Link to='/plants' >← Back</Link>
            </div>
            
          </div>
        </div>

        <Booking></Booking>

        <Footer></Footer>
      </div>
    );
};

export default PlantDetails;