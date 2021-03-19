import React from "react";

const About = () => {
    return (
        <div className="black-body d-flex justify-content-center align-items-center content-body text-center content-body">
            <div className="container flex-fill mt-5 fixed-container">
                <h5 className="black-body whiteish">
                    <a className="custom-link" href="https://github.com/dunleavyjack">@jack &#9729;&#65039;</a>

                    <br />
                    <br />
                    Made with
                <a className="custom-link" href="https://reactjs.org/"> React</a>,
                <a className="custom-link" href="https://redux.js.org/"> Redux</a>,
                <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"> Bootstrap 5</a>, and
                <a className="custom-link" href="https://developers.strava.com/docs/reference/"> Strava OAuth2 Authentication</a>. Designed in
                <a className="custom-link" href="https://www.figma.com/design/"> Figma</a> and hosted with
                <a className="custom-link" href="https://vercel.com/"> Vercel. </a> Full code available
                <a className="custom-link" href="https://github.com/dunleavyjack/Strava-Very-Very-Far"> here</a> on Github.
            </h5>
                <br />
                <h5 className="mb-5 black-body whiteish">Strava's full Privacy Policy, which covers approved projects like this one, is available <a className="custom-link" href="https://www.strava.com/legal/privacy">here</a>. </h5>
                <h5 className="black-body whiteish mb-5">Seoul 2021 :)</h5>
            </div>
        </div>
    );
};

export default About;