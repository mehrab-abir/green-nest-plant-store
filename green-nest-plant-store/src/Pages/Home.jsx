import React from 'react';
import Hero from '../Components/Hero';
import TopRatedPlants from '../Components/TopRatedPlants';
import PlantCareTips from '../Components/PlantCareTips';
import PlantExpert from '../Components/PlantExpert';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TopRatedPlants></TopRatedPlants>
            <PlantCareTips></PlantCareTips>
            <PlantExpert></PlantExpert>
        </div>
    );
};

export default Home;