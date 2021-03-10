import React from 'react'
import { connect } from 'react-redux'
import HeaderBlock from './HeaderBlock'

const BlockList = ({ userProfile }) => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center mt-3">
            <HeaderBlock />
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