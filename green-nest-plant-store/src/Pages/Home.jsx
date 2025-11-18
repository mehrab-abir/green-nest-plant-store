import React, { use } from 'react';
import Hero from '../Components/Hero';
import TopRatedPlants from '../Components/TopRatedPlants';
import PlantCareTips from '../Components/PlantCareTips';
import PlantExpert from '../Components/PlantExpert';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';
import { AuthContext } from '../Authentication/AuthContext';
import Loader from '../Components/Loader';

const Home = () => {
    const {loading} = use(AuthContext)
    if(loading){
        return <Loader></Loader>
    }
    
    return (
        <div>
            <title>GreenNest- Home</title>
            <Hero></Hero>
            <TopRatedPlants></TopRatedPlants>
            <PlantCareTips></PlantCareTips>
            <PlantOfTheWeek></PlantOfTheWeek>
            <PlantExpert></PlantExpert>
        </div>
    );
};

export default Home;