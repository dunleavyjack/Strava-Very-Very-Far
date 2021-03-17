import React from 'react'
import { connect } from 'react-redux'
import { changeUnits, addSport, removeSport, setTotalDistance } from '../actions'
import BlockList from '../components/BlockList'

const YourDistance = ({ userActivities: { runTotal, rideTotal, swimTotal }, userProfile, changeUnits, addSport, sports, metric, removeSport, setTotalDistance }) => {
    return (
        <div>
            <BlockList />
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

export default connect(mapStateToProps, {
    changeUnits,
    addSport,
    removeSport,
    setTotalDistance
})(YourDistance)



