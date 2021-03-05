import { React, useState } from 'react'
import { connect } from 'react-redux'
import { setUserActivities } from '../actions'

const YourDistance = ({ userActivities, userProfile }) => {
    // Toggle between miles and kms. Deafult is kms
    const [isToggled, setToggled] = useState(false)
    const [unitsUsed, setUnitsUsed] = useState(["running"])
    const [totalDistance, setTotalDistance] = useState(parseInt(0))

    const handleClick = () => {
        setToggled(!isToggled)
    }

    const runDistance = () => {
        const { distanceInKms, distanceInMiles } = userActivities.all_run_totals
        return isToggled ? distanceInKms.toString() + " kms" : distanceInMiles + " miles"
    }

    const rideDistance = () => {
        const { distanceInKms, distanceInMiles } = userActivities.all_ride_totals
        return isToggled ? distanceInKms.toString() + " kms" : distanceInMiles + " miles"
    }

    const swimDistance = () => {
        const { distanceInKms, distanceInMiles } = userActivities.all_swim_totals
        return isToggled ? distanceInKms.toString() + " kms" : distanceInMiles + " miles"
    }

    const combinedDistance = () => {
        let result = 0
        if (unitsUsed.includes("running")) {
            result = result + parseInt(runDistance())
        }

        if (unitsUsed.includes("riding")) {
            result = result + parseInt(rideDistance())
        }

        if (unitsUsed.includes("swimming")) {
            result = result + parseInt(swimDistance())
        }
        return result
    }

    const handleRideClick = () => {
        setUnitsUsed([...unitsUsed, "riding"])
    }

    const handleRideDelete = () => {
        const newArray = unitsUsed.filter(unit => unit !== "riding")
        setUnitsUsed(newArray)
    }

    const handleSwitch = () => {
        console.log("switch")
    }


    return (
        <div>
            <h1>Hi, {userProfile.firstname}!</h1>
            <h2>Your running total: {runDistance()}</h2>
            <h2>Your riding total: {rideDistance()}</h2>
            <h2>Your swim total: {swimDistance()}</h2>
            <h2>Combined: {combinedDistance()}</h2>

            <button onClick={handleClick}>Convert</button>
            <button onClick={handleRideClick}>Add Riding</button>
            <button onClick={handleRideDelete}>Delete Riding</button>

            <div className="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onSwitchChange={handleSwitch}/>
                <label class="form-check-label" for="flexSwitchCheckChecked">Swimming</label>
            </div>

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



