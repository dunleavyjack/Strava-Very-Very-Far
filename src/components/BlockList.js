import React from "react";
import { connect } from "react-redux";
import HeaderBlock from "./HeaderBlock";
import InfoImageBlock from "./InfoImageBlock";
import InfoTextBlock from "./InfoTextBlock";
import earth from "../assets/earth.jpg";
import track from "../assets/track.jpg";
import burj from '../assets/burj.jpeg';
import usa from '../assets/usa.jpeg'
import seoul from '../assets/seoul.jpeg'
import moon from '../assets/moon.jpeg'
import mountEverest from '../assets/mountEverest.jpeg'
import {
    earthLaps,
    trackLaps,
    burjLaps,
    americaLaps,
    southKoreaLaps,
    mountEverestLaps,
    moonLaps
} from "../utils/functions";
import SelectionBlock from "./SelectionBlock";

const BlockList = ({
    userProfile,
    userActivities,
    metric,
    sports,
    totalDistance,
}) => {
    const totalRunDisplay = () => {
        if (sports.includes("running")) {
            return (
                <InfoTextBlock
                    text={"Running"}
                    distance={userActivities.runTotal}
                    usingMetric={metric}
                />
            );
        }
    };

    const totalRideDisplay = () => {
        if (sports.includes("riding")) {
            return (
                <InfoTextBlock
                    text={"Riding"}
                    distance={userActivities.rideTotal}
                    usingMetric={metric}
                />
            );
        }
    };

    const totalSwimDisplay = () => {
        if (sports.includes("swimming")) {
            return (
                <InfoTextBlock
                    text={"Swimming"}
                    distance={userActivities.swimTotal}
                    usingMetric={metric}
                />
            );
        }
    };

    // If no sport selected, return "Choose a sport" message
    const pageDisplay = () => {
        if (sports.length === 0) {
            return (
                <h1 className="info-title mt-5 content-body">
                    Select a Sport to Continue
                </h1>
            );
        } else {
            return (
                <>
                    <h1 className="info-title mt-5">Your Totals</h1>
                    {totalRunDisplay()}
                    {totalRideDisplay()}
                    {totalSwimDisplay()}
                    <h1 className="info-title mt-5">How far have you gone?</h1>
                    <InfoImageBlock
                        imageSRC={track}
                        number={trackLaps(totalDistance)}
                        text={"Laps on a Track"}
                    />
                    <InfoImageBlock
                        imageSRC={earth}
                        number={earthLaps(totalDistance)}
                        text={"Around the Earth"}
                    />
                    <InfoImageBlock
                        imageSRC={usa}
                        number={americaLaps(totalDistance)}
                        text={"Times Across America"}
                    />
                    <InfoImageBlock
                        imageSRC={burj}
                        number={burjLaps(totalDistance)}
                        text={"Trips Up and Down the Burj Khalifa"}
                    />
                    <InfoImageBlock
                        imageSRC={seoul}
                        number={southKoreaLaps(totalDistance)}
                        text={"Times Across South Korea"}
                    />
                    <InfoImageBlock
                        imageSRC={mountEverest}
                        number={mountEverestLaps(totalDistance)}
                        text={"Mount Everests"}
                    />
                    <InfoImageBlock
                        imageSRC={moon}
                        number={moonLaps(totalDistance)}
                        text={"To the Moon"}
                    />
                </>
            );
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center text-center mt-3 w-100">
            <div className="w-100 px-4">
                <HeaderBlock />
                <SelectionBlock />
                {pageDisplay()}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userActivities: state.userActivities,
        userProfile: state.userProfile,
        metric: state.metric,
        sports: state.sports,
        totalDistance: state.totalDistance,
    };
};

export default connect(mapStateToProps)(BlockList);