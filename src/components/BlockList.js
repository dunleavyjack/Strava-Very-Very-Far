import React from 'react'
import { connect } from 'react-redux'
import HeaderBlock from './HeaderBlock'
import InfoImageBlock from './InfoImageBlock'
import InfoTextBlock from './InfoTextBlock'

import earth from '../assets/earth.jpg'
import track from '../assets/track.jpg'

const BlockList = ({ userProfile }) => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center mt-3 w-100">
            <div className="w-100 px-4">
                    <HeaderBlock />
                    <InfoTextBlock />
                    <InfoImageBlock imageSRC={earth}/>
                    <InfoImageBlock imageSRC={track}/>
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