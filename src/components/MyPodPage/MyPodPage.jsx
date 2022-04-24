import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './MyPodPage.css'

function MyPodPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {pod_id} = useParams();
    const user = useSelector(store => store.user);

    useEffect(() => {
        dispatch({
            type: 'GET_USER_POD',
            payload: pod_id
        })
        // dispatch({
        //     type: 'GET_POD_INFO',
        //     payload: user.pod_id
        // })
        // dispatch({
        //     type: 'GET_DATES',
        //     payload: id
        // })
    }, [])

        const handleLog = () => {
            console.log(pod_id);
        }



    return (
        <>
            <div className="body">
                <h2>MY POD PAGE</h2>
                <button onClick={handleLog}>BUTTON</button>
            </div>
        </>
    )
}


export default MyPodPage;