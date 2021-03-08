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

export const changeUnits = () => {
    return {
        type: 'CHANGE_UNITS'
    }
}