import { React, useState, useEffect } from 'react';
import { connect } from "react-redux";
import { setUserProfile, setUserActivities } from "../actions";
import BlockList from "../components/BlockList";
import Loading from '../components/Loading'
import { demoProfileData, demoUserActivitiesData } from '../utils/demoData'

const YourDistanceDemo = ({ setUserActivities, setUserProfile }) => {
    const [finishedLoading, setFinishedLoading] = useState(false)

    useEffect(() => {
        setUserProfile(demoProfileData)
        setUserActivities(demoUserActivitiesData)
        setTimeout(() => {
            setFinishedLoading(true)
        }, 1500)
    })


    if (finishedLoading === false) {
        return (
            <div>
                <Loading text={"Talking to Strava."} />
            </div>
        )
    }
    return (
        <div className="container p-0">
            <BlockList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { authTokenURL: state.authTokenURL };
};

export default connect(mapStateToProps, {
    setUserActivities,
    setUserProfile,
})(YourDistanceDemo);