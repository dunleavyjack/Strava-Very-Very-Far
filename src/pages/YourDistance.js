import { React } from "react";
import { connect } from "react-redux";
import BlockList from "../components/BlockList";

const YourDistance = ({ userProfile }) => {
    //If refreshed, return home
    if (!userProfile) {
        window.location = "/"
    }

    return (
        <div className="container p-0">
            <BlockList />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile
    };
};

export default connect(mapStateToProps, {
})(YourDistance);