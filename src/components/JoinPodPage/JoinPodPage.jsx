import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './JoinPodPage.css'

function JoinPodPage() {

    const pod = useSelector(store => store.findPodReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log(pod.id);

        dispatch({
            type: 'JOIN_POD',
            payload: pod.id
        })
    }

    return (
        <>
            <div className="body">
                <h2>THIS IS THE JOIN POD PAGE</h2>

                <h3>You are attempting to join:</h3> 
                    <h2>{pod.pod_name}</h2>
                <h3>If this is correct, hit 'JOIN POD'.</h3>
                <h3>If this is incorrect, hit the 'BACK' button and enter your Key Code again.</h3>
                <button onClick={handleSubmit}>JOIN POD</button>
                <button onClick={() => {history.push('/findpod');}}>BACK</button>
            </div>
        </>
    )
}


export default JoinPodPage;