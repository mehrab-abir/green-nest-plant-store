import React from 'react';
import { SlBadge } from "react-icons/sl";
import monstera from '../assets/images/plant-img/monstera-deliciosa-white.jfif'

const PlantOfTheWeek = () => {
    return (
      <div className="bg-green-600 py-8">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-white flex gap-2 items-center text-2xl">
              <img
                src="https://img.icons8.com/3d-fluency/94/guarantee.png"
                alt=""
                className="w-10"
              />{" "}
              <span>PLant of the Week</span>
            </p>
            <h3 className="text-3xl font-semibold text-white my-5">
              Monstera Deliciosa
            </h3>
            <p className="text-white w-full md:w-3/4">
              This week's featured plant is perfect for adding a tropical touch
              to your home. With its iconic split leaves and easy care
              requirements, the Monstera has become a beloved choice for plant
              enthusiasts worldwide.
            </p>
            <div className="flex mt-10 gap-4">
              <div className="bg-green-800 p-2 rounded-xl">
                <p className="text-sm text-green-100">Care Level</p>
                <p className="text-white">Medium</p>
              </div>
              <div className="bg-green-800 p-2 rounded-xl">
                <p className="text-sm text-green-100">Special Price</p>
                <p className="text-white">$35</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex items-center justify-center bg-white md:bg-green-600 rounded-2xl">
            <img src={monstera} alt="" className="w-1/2 md:w-full h-3/4 md:rounded-4xl" />
          </div>
        </div>
      </div>
    );
};

export default PlantOfTheWeek;