import { React } from "react";
import CircularProfilePic from "./CircularProfilePic";
import { connect } from "react-redux";
import {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance,
} from "../actions";

const HeaderBlock = ({
    userActivities: { runTotal, rideTotal, swimTotal },
    userProfile,
    changeUnits,
    addSport,
    sports,
    metric,
    removeSport,
    setTotalDistance,
}) => {
    return (
        <div className="mt-5 light-gray-border">
            <CircularProfilePic imageURL={userProfile.profile} />
            <h1 className="bold-poppins purple mt-4">
                Hi, {userProfile.firstname}
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userActivities: state.userActivities,
        userProfile: state.userProfile,
        metric: state.metric,
        sports: state.sports,
    };
};

export default connect(mapStateToProps, {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance,
})(HeaderBlock);

