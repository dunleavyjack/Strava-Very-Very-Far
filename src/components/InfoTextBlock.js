import React from 'react'

const InfoTextBlock = ({ text, distance, usingMetric }) => {

    const units = usingMetric ? 'Kilometers' : 'Miles';
    const totalDistance = usingMetric ? distance.kms : distance.miles;

    return (
        <div className="mt-5 orange-border w-100 pos-absolute">
            <div className="centered-text">
                <h5 className="sport-info-orange">{text}</h5>
                <h5 className="bold-poppins">{totalDistance}</h5>
                <h5 className="sport-info-black">{units}</h5>
            </div>
        </div>
    )
};

export default InfoTextBlock;