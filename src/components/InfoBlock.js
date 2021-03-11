import React from 'react'

const InfoBlock = ({imageSRC}) => {
    return (
        <div className="mt-5 light-gray w-100">
            <img src={imageSRC} alt="earth" className="infoBlockImg"></img>
            {/* <h1 className="centered-text">hi</h1> */}
        </div>
    )
}

export default InfoBlock