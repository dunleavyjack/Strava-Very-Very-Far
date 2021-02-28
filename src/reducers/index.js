import { combineReducers } from 'redux'

const setUserReducer = (tokens=null, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload
        default:
            return tokens
    }
}

const setUserActivitiesReducer = (user=null, action) => {
    if(action.type === 'SET_USER_ACTIVITIES'){
        return action.payload
    }
    return user
}

export default combineReducers({
    returnTokens: setUserReducer,
    user: setUserActivitiesReducer
})