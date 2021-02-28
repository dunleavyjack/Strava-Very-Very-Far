import axios from 'axios'

const {
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET
} = process.env

export const getParamValues = (url) => {
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const cleanUpAuthToken = str => {
    return str
        .split('&')[1]
        .slice(5)
};

export const testAuthGetter = async (authTok) => {
    try {
        const response = await axios.post(`https://www.strava.com/api/v3/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authTok}&grant_type=authorization_code`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getUserData = async (userID, accessToken) => {
    try {
        const response = await axios.get(`https://www.strava.com/api/v3/athletes/${userID}/stats`, { headers: { Authorization: `Bearer ${accessToken}`}})
        return response
    } catch (error) {
        console.log(error)
    }
}