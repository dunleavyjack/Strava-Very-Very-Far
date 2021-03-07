import { React, useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { setUserActivities } from '../actions'

const YourDistance = ({ userActivities, userProfile }) => {
    // Toggle between miles and kms. Deafult is kms
    const [isToggled, setToggled] = useState(false)
    
    
    const [unitsUsed, setUnitsUsed] = useState([])
    // const [totalDistance, setTotalDistance] = useState(parseInt(0))

    useEffect(() => {
        document.getElementById("flexSwitchCheckChecked").click()
    }, [])

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

    const addSport = (sport) => {
        setUnitsUsed([...unitsUsed, sport])
    }

    const removeSport = (sport) => {
        const newArray = unitsUsed.filter(unit => unit !== sport)
        setUnitsUsed(newArray)
    }

    const switchSport = (sport) => {
        if (unitsUsed.includes(sport)){
            removeSport(sport)
        } else {
            addSport(sport)
        }
    }


    return (
        <div>
            <h1>Hi, {userProfile.firstname}!</h1>
            <h2>Your running total: {runDistance()}</h2>
            <h2>Your riding total: {rideDistance()}</h2>
            <h2>Your swim total: {swimDistance()}</h2>
            <h2>Total: {combinedDistance()}</h2>
            <h2>redux distance here</h2>

            <button onClick={handleClick}>Convert</button>
            {/* <button onClick={addRiding}>Add Riding</button>
            <button onClick={removeRiding}>Delete Riding</button> */}

            
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={() => switchSport("running")}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Running</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => switchSport("riding")}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Riding</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => switchSport("swimming")}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Swimming</label>
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

export default connect(mapStateToProps,
    {
        setToggle
    })(YourDistance)



