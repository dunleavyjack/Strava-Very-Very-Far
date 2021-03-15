import React from 'react'
import stravaButton from '../assets/stravaButton.png'
import demoButton from '../assets/demoButton.png'
import personLogo from '../assets/personLogo.png'

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=46874&response_type=code&redirect_uri=http://localhost:3000/redirect/exchange_token&approval_prompt=force&scope=read`
};

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center content-body">
            <div className="mt-5">
                <img src={personLogo} alt="logo" className="person-logo text-center"></img>
                <title className="d-block bold-poppins purple-text">VERY, VERY FAR</title>
                <h2>Your activities, summed up.</h2>
                <div>
                    <img src={stravaButton} onClick={handleLogin} alt="login" className="login-button mb-3"></img>
                </div>
                <div>
                    <img src={demoButton} alt="demo login" className="login-button"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;