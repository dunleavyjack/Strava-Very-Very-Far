import {React, useState} from 'react'
import { connect } from 'react-redux'

const YourDistance = ({userActivities, userProfile }) => {
    // Toggle between miles and kms. Deafult is kms
    const [isToggled, setToggled] = useState(false)

    const handleClick = () => {
        setToggled(!isToggled)
    }

    return (
        <div>
            <h1>Hi, {userProfile.firstname}!</h1>
            { isToggled ? <h2>{userActivities.all_run_totals.distance}</h2> : <h2>{userActivities.all_run_totals.distanceInMiles}</h2> }
            <h2>{userActivities.all_ride_totals.distance}</h2>
            <h2>{userActivities.all_swim_totals.distance}</h2>
            <button onClick={handleClick}>Convert</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        userActivities: state.userActivities,
        userProfile: state.userProfile 
    }
};

export default connect(mapStateToProps)(YourDistance)





const YourDistance = ({distanceKms, distanceMiles}) => {
    const [isToggled, setToggled] = useState(false)

    return (
        <div>
            { isToggled ? <h2>{distanceKms}</h2> : <h2>{distanceMiles}</h2> }
            <button onClick={() => setToggled(!isToggled)}>Kms to Miles</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        userActivities: state.userActivities,
    }
};
