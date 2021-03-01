import { combineReducers } from 'redux'

const setUserProfileReducer = (user=null, action) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':
            return action.payload
        default:
            return user
    }
}

const setUserActivitiesReducer = (userActivities=null, action) => {
    if(action.type === 'SET_USER_ACTIVITIES'){
        return action.payload
    }
    return userActivities
}

export default combineReducers({
    userProfile: setUserProfileReducer,
    userActivities: setUserActivitiesReducer
})