import React from 'react'
import { connect } from 'react-redux'

const YourDistance = ({user, returnTokens }) => {
    return (
        <div>
            <h1>Hi, {returnTokens.athlete.firstname}!</h1>
            <h2>{user.data.all_run_totals.distance}</h2>
            <h2>{user.data.all_ride_totals.distance}</h2>
            <h2>{user.data.all_swim_totals.distance}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        user: state.user,
        returnTokens: state.returnTokens 
    }
};

export default connect(mapStateToProps)(YourDistance)