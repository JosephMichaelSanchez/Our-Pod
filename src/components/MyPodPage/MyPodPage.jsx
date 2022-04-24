import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './MyPodPage.css'

function MyPodPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {pod_id} = useParams();
    const user = useSelector(store => store.user);

    


    return (
        <>
            <div className="body">
                <h2>MY POD PAGE</h2>
            </div>
        </>
    )
}


export default MyPodPage;