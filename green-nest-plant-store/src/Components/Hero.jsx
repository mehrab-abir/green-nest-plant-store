import React from 'react';
import hero1 from '../assets/images/hero-img/hero-img (1).jpg'
import { Link } from 'react-router';

const Hero = () => {
    return (
      <div className="relative w-full h-[85vh]">
        <img src={hero1} alt="" className="w-full object-cover h-full" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20" />
        <div className="flex flex-col space-y-4 absolute top-30 left-14">
          <p className="text-xl font-bold text-white">Welcome to GreenNest</p>
          <h1 className="text-5xl font-bold my-6 text-white">
            Nurture Your Space With Beautiful Indoor Plants
          </h1>
          <Link to="/plants" className="btn bg-green-600 text-white border-none shadow-none mt-6 w-fit hover:scale-95 transition duration-200">
            Explore Plants
          </Link>
        </div>
      </div>
    );
};

export default Hero;