import React from "react";
import { connect } from "react-redux";
import {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance,
} from "../actions";
import SportButton from "./SportButton";

const SelectionBlock = ({ changeUnits, metric }) => {
    const handleClick = () => {
        changeUnits();
    };

    const conversionButton = () => {
        return metric ? "Kms" : "Miles";
    };

    return (
        <div className="fixed-bottom mb-3">
            <SportButton text={"running"} />
            <SportButton text={"riding"} />
            <SportButton text={"swimming"} />
            <button
                className="button-purple mt-3 mb-3 ms-3"
                onClick={handleClick}
            >
                {conversionButton()}
            </button>
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
})(SelectionBlock);