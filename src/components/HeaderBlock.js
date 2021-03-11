import { React, useEffect } from 'react'
import CircularProfilePic from './CircularProfilePic'
import { connect } from 'react-redux'
import { changeUnits, addSport, removeSport, setTotalDistance } from '../actions'

const HeaderBlock = ({ userActivities: { runTotal, rideTotal, swimTotal }, userProfile, changeUnits, addSport, sports, metric, removeSport, setTotalDistance }) => {
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
        <div className="mt-5 light-gray">
            <CircularProfilePic imageURL={userProfile.profile} />
            <button onClick={handleClick}>{conversionButton()}</button>
            <div className="form-check form-switch">
                <input className="form-check-input redux-clicker" type="checkbox" id="flexSwitchCheckChecked" onClick={() => toggleSport("running")} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Running</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => toggleSport("riding")} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Riding</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => toggleSport("swimming")} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Swimming</label>
            </div>


            {/* <button type="button" className="btn btn-primary redux-clicker" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                &#127939;
            </button>
            <button type="button" className="btn btn-primary" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                &#128690;
            </button>
            <button type="button" className="btn btn-primary" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
                &#128692;
            </button> */}


            {/* <div className="form-check form-switch">
                <input className="form-check-input redux-clicker" type="checkbox" id="flexSwitchCheckChecked" onClick={() => toggleSport("running")} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Running</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => toggleSport("riding")} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Riding</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => toggleSport("swimming")} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Swimming</label>
            </div> */}
        </div>
    )
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
})(HeaderBlock)

