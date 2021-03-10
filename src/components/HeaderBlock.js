import React from 'react'
import CircularProfilePic from './CircularProfilePic'

const HeaderBlock = ({imageURL}) => {
    return (
        <div className="mt-5 light-gray">
            <CircularProfilePic imageURL={imageURL} />
        </div>
    )
};

export default HeaderBlock

