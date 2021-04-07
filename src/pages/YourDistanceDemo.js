import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserProfile, setUserActivities } from '../actions';
import BlockList from '../components/BlockList';
import Loading from '../components/Loading';
import { demoProfileData, demoUserActivitiesData } from '../utils/demoData';

const YourDistanceDemo = () => {
    const [finishedLoading, setFinishedLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserProfile(demoProfileData));
        dispatch(setUserActivities(demoUserActivitiesData));
        setTimeout(() => {
            setFinishedLoading(true);
        }, 1500);
    });

    if (finishedLoading === false) {
        return (
            <div>
                <Loading text={'Talking to Strava.'} />
            </div>
        );
    }
    return (
        <div className="container p-0">
            <BlockList />
        </div>
    );
};

export default YourDistanceDemo;
