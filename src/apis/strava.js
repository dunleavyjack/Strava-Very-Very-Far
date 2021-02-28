import axios from 'axios'

// export default axios.create({
//     baseURL: "https://www.strava.com/api/v3/athletes/{id}/stats" "Authorization: Bearer [[token]]"
// })

export const setAuthHeader = () => {
    try {
        const authToken = ""
        if (authToken) {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${authToken}`;
        }
    } catch (error) {
        console.log('Error setting auth', error)
    }
}
// "https://www.strava.com/api/v3/athletes/{id}/stats" "Authorization: Bearer [[token]]"