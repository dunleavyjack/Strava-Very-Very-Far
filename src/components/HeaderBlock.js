import { React } from 'react';
import CircularProfilePic from './CircularProfilePic';
import { useSelector } from 'react-redux';
import blankAvatar from '../assets/blankAvatar.jpeg';

const HeaderBlock = () => {
    const userProfile = useSelector((state) => state.userProfile);
    const profileImage = userProfile.profile || blankAvatar;
    return (
        <div className="mt-5">
            <CircularProfilePic imageURL={profileImage} />
        </div>
    );
};

export default HeaderBlock;
