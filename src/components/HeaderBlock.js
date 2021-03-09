import React from 'react'
import { CircularProfilePic } from './CircularProfilePic'

const HeaderBlock = ({imageURL}) => {
    return (
        <CircularProfilePic imageURL={imageURL} />
    )
};

export default HeaderBlock