import { React } from "react";
import CircularProfilePic from "./CircularProfilePic";
import { connect } from "react-redux";
import {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance,
} from "../actions";

const HeaderBlock = ({ userProfile }) => {
    return (
        <div className="mt-5">
            <CircularProfilePic imageURL={userProfile.profile} />
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

