import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance,
} from "../actions";

const SportButton = ({
    userActivities: { runTotal, rideTotal, swimTotal },
    addSport,
    sports,
    removeSport,
    setTotalDistance,
    text,
    clickMe
}) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (clickMe === true) {
            document.getElementsByClassName("redux-clicker")[0].click();
        }
    }, [clickMe]);

    const combinedDistance = () => {
        let result = 0;
        if (sports.includes("running")) {
            result = result + parseInt(runTotal.kms);
        }

        if (sports.includes("riding")) {
            result = result + parseInt(rideTotal.kms);
        }

        if (sports.includes("swimming")) {
            result = result + parseInt(swimTotal.kms);
        }
        setTotalDistance(result);
        return result;
    };
    combinedDistance();

    const toggleSport = (sport) => {
        setSelected(!selected);
        if (sports.includes(sport)) {
            removeSport(sport);
        } else {
            addSport(sport);
        }
    };

    const emoji = (text) => {
        if (text === "running") {
            return <h3>&#127939;</h3>
        } else if (text === "riding") {
            return <h3>&#128692;</h3>
        } else {
            return <h3>&#127946;</h3>
        }
    }

    if (selected === true) {
        return (
            <button
                className="redux-clicker button-orange mt-3 mb-3 ms-3"
                onClick={() => toggleSport(text)}
            >
                {emoji(text)}
            </button>
        );
    } else {
        return (
            <button
                className="redux-clicker button-orange-unselected mt-3 mb-3 ms-3"
                onClick={() => toggleSport(text)}
            >
                {emoji(text)}
            </button>
        );
    }
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
})(SportButton);