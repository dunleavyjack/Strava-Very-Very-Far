import React from "react";
import stravaButton4X from "../assets/stravaButton4X.png";
import demoButton4X from "../assets/demoButton4X.png";
import personLogo from "../assets/personLogo.png";

const productionURL = "https://veryveryfar.vercel.app/redirect"
// const developmentURL = "http://localhost:3000/redirect"

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=46874&response_type=code&redirect_uri=${productionURL}/exchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center content-body">
            <div className="mt-5">
                <img
                    src={personLogo}
                    alt="logo"
                    className="person-logo text-center"
                ></img>
                <h2 className="bold-poppins-small mt-3 mb-3">
                    Your activities, summed up.
                </h2>
                <div>
                    <img
                        src={stravaButton4X}
                        onClick={handleLogin}
                        alt="login"
                        className="login-button mb-3"
                    ></img>
                </div>
                <div>
                    <img
                        src={demoButton4X}
                        alt="demo login"
                        className="login-button"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Home;