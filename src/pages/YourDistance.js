import { React } from 'react';
import { useSelector } from 'react-redux';
import BlockList from '../components/BlockList';

const YourDistance = () => {
    const userProfile = useSelector((state) => state.userProfile);
    if (!userProfile) {
        window.location = '/';
    }

    return (
        <div className="container p-0">
            <BlockList />
        </div>
    );
};

export default YourDistance;
