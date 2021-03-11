import React from 'react'
import { connect } from 'react-redux'
import HeaderBlock from './HeaderBlock'
import InfoBlock from './InfoBlock'

import earth from '../assets/earth.jpg'
import track from '../assets/track.jpg'

const BlockList = ({ userProfile }) => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center mt-3 w-100">
            <div className="w-100 px-4">
                    <HeaderBlock />
                    <InfoBlock imageSRC={earth}/>
                    <InfoBlock imageSRC={track}/>
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