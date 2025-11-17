import React from 'react';

const PlantCard = ({plant}) => {
    const {plantName,price,availableStock,image,category} = plant;

    return (
        <div>
            <h1 className="font-bold">{plantName}</h1>
        </div>
    );
};

export default PlantCard;