import { React } from "react";
import CircularProfilePic from "./CircularProfilePic";
import { connect } from "react-redux";
import blankAvatar from '../assets/blankAvatar.jpeg'
import {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance,
} from "../actions";

const HeaderBlock = ({ userProfile }) => {

    const profileImage = userProfile.profile || blankAvatar;

    return (
        <div className="mt-5">
            <CircularProfilePic imageURL={profileImage} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
    };
};

export default connect(mapStateToProps, {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance,
})(HeaderBlock);

