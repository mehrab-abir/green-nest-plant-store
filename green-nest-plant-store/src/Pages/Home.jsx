import React from 'react';
import Hero from '../Components/Hero';
import TopRatedPlants from '../Components/TopRatedPlants';
import PlantCareTips from '../Components/PlantCareTips';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TopRatedPlants></TopRatedPlants>
            <PlantCareTips></PlantCareTips>
        </div>
    );
};

export default Home;