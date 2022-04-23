import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './HouseDetailsPage.css'

function HouseDetailsPage() {

    const user = useSelector((store) => store.user);

    return (
        <>
            <div className="body">
                <h2>THIS IS THE HOUSE DETAILS PAGE</h2>
            </div>
        </>
    )
}

export default HouseDetailsPage;