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
            <div>
                <img src={personLogo} alt="logo"  className="person-logo text-center"></img>
                <img src={stravaButton} onClick={handleLogin} alt="login" className="login-button mb-3 d-block"></img>
                <img src={demoButton} alt="demo login d-block" className=""></img>
            </div>
        </div>
    )
}

export default Home;