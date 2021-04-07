import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSport, removeSport, setTotalDistance } from '../actions';

const SportButton = ({ text, clickMe }) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (clickMe === true) {
            document.getElementsByClassName('redux-clicker')[0].click();
        }
    }, [clickMe]);

    const { runTotal, rideTotal, swimTotal } = useSelector(
        (state) => state.userActivities,
    );
    const sports = useSelector((state) => state.sports);
    const dispatch = useDispatch();

    const combinedDistance = () => {
        let result = 0;
        if (sports.includes('running')) {
            result = result + parseInt(runTotal.kms);
        }

        if (sports.includes('riding')) {
            result = result + parseInt(rideTotal.kms);
        }

        if (sports.includes('swimming')) {
            result = result + parseInt(swimTotal.kms);
        }
        dispatch(setTotalDistance(result));
        return result;
    };
    combinedDistance();

    const toggleSport = (sport) => {
        setSelected(!selected);
        if (sports.includes(sport)) {
            dispatch(removeSport(sport));
        } else {
            dispatch(addSport(sport));
        }
    };

    const emoji = (text) => {
        if (text === 'running') {
            return <h3>&#127939;</h3>;
        } else if (text === 'riding') {
            return <h3>&#128692;</h3>;
        } else {
            return <h3>&#127946;</h3>;
        }
    };

    if (selected === true) {
        return (
            <button
                className="redux-clicker button-orange mt-3 mb-3 ms-3"
                onClick={() => toggleSport(text)}
            >
                {emoji(text)}
            </button>
        );
    } else {
        return (
            <button
                className="redux-clicker button-orange-unselected mt-3 mb-3 ms-3"
                onClick={() => toggleSport(text)}
            >
                {emoji(text)}
            </button>
        );
    }
};

export default SportButton;
