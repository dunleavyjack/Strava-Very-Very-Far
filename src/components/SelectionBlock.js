import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUnits } from '../actions';
import SportButton from './SportButton';

const SelectionBlock = () => {
    const metric = useSelector((state) => state.metric);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeUnits());
    };

    const conversionButton = () => {
        return metric ? 'Kms' : 'Miles';
    };

    return (
        <div className="fixed-bottom mb-3 small-width ms-auto mx-2">
            <SportButton text={'running'} clickMe={true} />
            <SportButton text={'riding'} clickMe={false} />
            <SportButton text={'swimming'} clickMe={false} />
            <button
                className="button-purple mt-3 mb-3 ms-3"
                onClick={handleClick}
            >
                {conversionButton()}
            </button>
        </div>
    );
};

export default SelectionBlock;
