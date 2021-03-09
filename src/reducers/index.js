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
    switch (action.type){
        case 'SET_USER_ACTIVITIES':
            return action.payload
        default:
            return userActivities
    }    
}

const changeUnitsReducer = (metric=true, action) => {
    switch(action.type){
        case 'CHANGE_UNITS':
            return !metric
        default:
            return metric
    }
}

const setSportsReducer = (sports=["running"], action) => {
    switch(action.type){
        case 'ADD_SPORT':
            return [...sports, action.payload]
        default:
            return sports
    }
}

export default combineReducers({
    userProfile: setUserProfileReducer,
    userActivities: setUserActivitiesReducer,
    metric: changeUnitsReducer,
    sports: setSportsReducer
})