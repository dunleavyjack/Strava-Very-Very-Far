import React from 'react'

const InfoTextBlock = ({text, distance, usingMetric}) => {

    const units = usingMetric ? "Kilometers" : "Miles"
    const totalDistance = usingMetric ? distance.kms : distance.miles
    
    return (
        <div className="mt-5 light-gray w-100 pos-absolute">
            <h1 className="centered-text">
                <h5>{text}</h5>
                {totalDistance}
                <br />
                {units}
            </h1> 
        </div>
    )
};

export default InfoTextBlock


