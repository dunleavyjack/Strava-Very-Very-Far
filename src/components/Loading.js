import React from "react";

const Loading = ({ text }) => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center content-body">
            <div>
                <div className="spinner-border strava-orange" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h3 className="mt-3 tan about-header">{text}</h3>
            </div>
        </div>
    );
};

export default Loading;