import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

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

        swal({
            title: "Success!",
            text: `You have joined ${pod.pod_name} !`,
            icon: "success",
            button: "OK!",
          });
        
        history.push('/user');

    }

    return (
        <>
            <div className="body">
                <h2>JOIN YOUR POD</h2>

                <h3>You are attempting to join:</h3> 
                    <h2>{pod.pod_name}</h2>
                <h3>If this is correct, hit 'JOIN POD'.</h3>
                <h3>If this is incorrect, hit the 'BACK' button and enter your Key Code again.</h3>
                <button className="btn btn-success" onClick={handleSubmit}>JOIN POD</button>
                <button className="btn btn-secondary" onClick={() => {history.push('/findpod');}}>BACK</button>
            </div>
        </>
    )
}


export default JoinPodPage;