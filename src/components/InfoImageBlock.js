import React from 'react'

const InfoImageBlock = ({imageSRC, text, number}) => {
    return (
        <div className="mt-5 light-gray w-100 pos-absolute">
            <img src={imageSRC} alt="earth" className="infoBlockImg"></img>
            <h1 className="centered-text">
                {number}
                <br/>
                {text}   
            </h1>
            
        </div>
    )
}

export default InfoImageBlock