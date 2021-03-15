import { React, useEffect } from 'react'
import { connect } from 'react-redux'
import { changeUnits, addSport, removeSport, setTotalDistance } from '../actions'

const SelectionBlock = ({ userActivities: { runTotal, rideTotal, swimTotal }, changeUnits, addSport, sports, metric, removeSport, setTotalDistance }) => {
    // Select running as default activity
    useEffect(() => {
        document.getElementsByClassName("redux-clicker")[0].click()
    }, [])

    const handleClick = () => {
        changeUnits()
    }

    const runDistance = () => {
        const { miles, kms } = runTotal
        return metric ? kms.toString() + " kms" : miles + " miles"
    }

    const rideDistance = () => {
        const { miles, kms } = rideTotal
        return metric ? kms.toString() + " kms" : miles + " miles"
    }

    const swimDistance = () => {
        const { miles, kms } = swimTotal
        return metric ? kms.toString() + " kms" : miles + " miles"
    }

    const combinedDistance = () => {
        let result = 0
        if (sports.includes("running")) {
            result = result + parseInt(runDistance())
        }

        if (sports.includes("riding")) {
            result = result + parseInt(rideDistance())
        }

        if (sports.includes("swimming")) {
            result = result + parseInt(swimDistance())
        }
        setTotalDistance(result)
        return result
    }
    combinedDistance()

    const toggleSport = sport => {
        if (sports.includes(sport)) {
            removeSport(sport)
        } else {
            addSport(sport)
        }
    }

    const conversionButton = () => {
        return metric ? "Use Miles" : "Use Kilometers"
    }

    return (
        <div className="selection-block mt-5">
                <button className="redux-clicker strava-orange" onClick={() => toggleSport("running")}>Running</button>
                <button onClick={() => toggleSport("riding")}>Riding</button>
                <button onClick={() => toggleSport("swimming")}>Swimming</button>
                <button className="mb-5" onClick={handleClick}>{conversionButton()}</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userActivities: state.userActivities,
        userProfile: state.userProfile,
        metric: state.metric,
        sports: state.sports,
    }
};

export default connect(mapStateToProps, {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance
})(SelectionBlock)