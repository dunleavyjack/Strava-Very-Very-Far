import axios from "axios";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

export const getParamValues = (url) => {
    return url
        .slice(1)
        .split("&")
        .reduce((prev, curr) => {
            const [title, value] = curr.split("=");
            prev[title] = value;
            return prev;
        }, {});
};

export const cleanUpAuthToken = (str) => {
    return str.split("&")[1].slice(5);
};

export const testAuthGetter = async (authTok) => {
    try {
        const response = await axios.post(
            `https://www.strava.com/api/v3/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authTok}&grant_type=authorization_code`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserData = async (userID, accessToken) => {
    try {
        const response = await axios.get(
            `https://www.strava.com/api/v3/athletes/${userID}/stats`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const convertToMiles = (meters) => {
    return (meters * 0.621371) / 1000;
};

// Distance Functions

export const trackLaps = (kms) => {
    return fixNumber(kms * 2.5);
};

export const poolLaps = (kms) => {
    return fixNumber(kms * 20);
};

export const earthLaps = (kms) => {
    const earthCircumfrence = 40075; // In kms
    const result = (kms / earthCircumfrence) * 100;
    return fixNumber(result) + "%";
};

export const burjLaps = (kms) => {
    const burjHeight = .83 * 2 // Up and down
    const result = (kms / burjHeight)
    return fixNumber(result)
}

export const tourLaps = (kms) => {
    const tourLength = 3500
    const result = (kms / tourLength)
    return fixNumber(result)
}

export const mountEverestLaps = (kms) => {
    const mountEverestHeight = 8.849
    const result = (kms / mountEverestHeight)
    return fixNumber(result)
}

export const americaLaps = (kms) => {
    const americaLength = 4662
    const result = (kms / americaLength)
    return fixNumberTwoDigits(result)
}

export const southKoreaLaps = (kms) => {
    const southKoreaLength = 1200
    const result = (kms / southKoreaLength)
    return fixNumberTwoDigits(result)
}

export const moonLaps = (kms) => {
    const moonDistance = 384400
    const result = (kms / moonDistance) * 100
    return fixNumberTwoDigits(result) + "%"
}

const fixNumber = (x) => {
    return x
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const fixNumberTwoDigits = (x) => {
    return x
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

