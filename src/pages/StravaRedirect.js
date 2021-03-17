import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { setUserProfile, setUserActivities } from '../actions'
import Loading from '../components/Loading'
import { cleanUpAuthToken, testAuthGetter, getUserData, convertToMiles } from '../utils/functions'

class StravaRedirect extends React.Component {
    componentDidMount() {
        const authenticate = async () => {
            const { history, location } = this.props
            try {
                // If not redirected to Strava, return to home
                if (_.isEmpty(location)) {
                    return history.push('/');
                }

                // Save the Auth Token to the Store (it's located under 'search' for some reason)
                const stravaAuthToken = cleanUpAuthToken(location.search)

                // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
                const responseTokens = await testAuthGetter(stravaAuthToken)
                this.props.setUserProfile(responseTokens.athlete)
                const accessToken = responseTokens.access_token
                const userID = responseTokens.athlete.id

                // Axios request to get users info
                const userActivities = await getUserData(userID, accessToken)

                this.props.setUserActivities({
                    runTotal: {
                        kms: (userActivities.data.all_run_totals.distance / 1000).toFixed(2),
                        miles: convertToMiles(userActivities.data.all_run_totals.distance).toFixed(2),
                        count: userActivities.data.all_run_totals.count
                    },
                    rideTotal: {
                        kms: (userActivities.data.all_ride_totals.distance / 1000).toFixed(2),
                        miles: convertToMiles(userActivities.data.all_ride_totals.distance).toFixed(2),
                        count: userActivities.data.all_ride_totals.count
                    },
                    swimTotal: {
                        kms: (userActivities.data.all_swim_totals.distance / 1000).toFixed(2),
                        miles: convertToMiles(userActivities.data.all_swim_totals.distance).toFixed(2),
                        count: userActivities.data.all_swim_totals.count
                    }
                })

                // Once complete, go to display page
                history.push('/yourdistance');
            } catch (error) {
                //If error, go back home
                history.push('/');
            }
        }
        authenticate()
    }

    render() {
        return (
            <div>
                <Loading text={"Talking to Strava."} />
            </div>
        )
    };
};

const mapStateToProps = state => {
    return { authTokenURL: state.authTokenURL };
}

export default connect(mapStateToProps, {
    setUserActivities,
    setUserProfile
})(StravaRedirect);