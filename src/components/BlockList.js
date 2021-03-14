import React from 'react'
import { connect } from 'react-redux'
import HeaderBlock from './HeaderBlock'
import InfoImageBlock from './InfoImageBlock'
import InfoTextBlock from './InfoTextBlock'
import earth from '../assets/earth.jpg'
import track from '../assets/track.jpg'
import { trackLaps } from '../utils/functions'

const BlockList = ({ userProfile, userActivities, metric, sports }) => {
    const totalRunDisplay = () => {
        if (sports.includes("running"))
            return (
                <InfoTextBlock
                    text={"Running"}
                    distance={userActivities.runTotal}
                    usingMetric={metric}
                />
            )
    }

    const totalRideDisplay = () => {
        if (sports.includes("riding"))
            return (
                <InfoTextBlock
                    text={"Riding"}
                    distance={userActivities.rideTotal}
                    usingMetric={metric}
                />
            )
    }

    const totalSwimDisplay = () => {
        if (sports.includes("swimming"))
            return (
                <InfoTextBlock
                    text={"Swimming"}
                    distance={userActivities.swimTotal}
                    usingMetric={metric}
                />
            )
    }

    return (
        <div className="d-flex justify-content-center align-items-center text-center mt-3 w-100">
            <div className="w-100 px-4">
                <HeaderBlock />
                <h1 className="info-title mt-5">Your Totals</h1>
                {totalRunDisplay()}
                {totalRideDisplay()}
                {totalSwimDisplay()}
                <h1 className="info-title mt-5">How far is that?</h1>
                <InfoImageBlock imageSRC={earth} number={'67.98%'} text={"Around the Earth"} />
                <InfoImageBlock imageSRC={track} number={trackLaps(userActivities.runTotal.kms)} text={"Laps on a Track"} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userActivities: state.userActivities,
        userProfile: state.userProfile,
        metric: state.metric,
        sports: state.sports,
    }
};

export default connect(mapStateToProps)(BlockList)