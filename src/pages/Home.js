import React from 'react'

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=46874&response_type=code&redirect_uri=http://localhost:3000/redirect/exchange_token&approval_prompt=force&scope=read`
};

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Connect with Strava</button>
        </div>
    )
}

export default Home;