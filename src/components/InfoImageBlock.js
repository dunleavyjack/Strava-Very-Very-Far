import React from "react";

const InfoImageBlock = ({ imageSRC, text, number, usingMetric, kms, miles }) => {
    const totalDistance = usingMetric ? kms : miles;

    return (
        <div className="mt-5 light-gray w-100 pos-absolute">
            <img src={imageSRC} alt="earth" className="infoBlockImg"></img>
            <div className="centered-text">
                <h1 className="bold-poppins-white">{number}</h1>
                <h1 className="bold-poppins-white-small">{text}</h1>
                <h5 className="bold-poppins-white-smaller">{totalDistance}</h5>
            </div>
        </div>
    );
};

export default InfoImageBlock;