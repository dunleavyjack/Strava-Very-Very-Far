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

const setTotalDistanceReducer = (totalDistance=0, action) => {
    switch(action.type){
        case 'SET_TOTAL_DISTANCE':
            return action.payload
        default: 
            return totalDistance
    }
}

const setSportsReducer = (sports=[], action) => {
    switch(action.type){
        case 'ADD_SPORT':
            return [...sports, action.payload]
        case 'REMOVE_SPORT':
            return sports.filter(unit => unit !== action.payload)
        default:
            return sports
    }
}

export default combineReducers({
    userProfile: setUserProfileReducer,
    userActivities: setUserActivitiesReducer,
    metric: changeUnitsReducer,
    sports: setSportsReducer,
    totalDistance: setTotalDistanceReducer
})