import React from 'react';
import { useSelector } from 'react-redux';

function HouseDetailsPage() {

    const user = useSelector((store) => store.user);

    return (
        <>
            <h2>THIS IS THE HOUSE DETAILS PAGE</h2>
        </>
    )
}

export default HouseDetailsPage;