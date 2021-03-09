export const setUserActivities = data => {
    return {
        type: 'SET_USER_ACTIVITIES',
        payload: data
    }
}

export const setUserProfile = data => {
    return {
        type: 'SET_USER_PROFILE',
        payload: data
    }
}

export const setTotalDistance = data => {
    return {
        type: 'SET_TOTAL_DISTANCE',
        payload: data
    }
}

export const changeUnits = () => {
    return {
        type: 'CHANGE_UNITS'
    }
}

export const addSport = sport => {
    return {
        type: 'ADD_SPORT',
        payload: sport
    }
}

export const removeSport = sport => {
    return {
        type: 'REMOVE_SPORT',
        payload: sport
    }
}