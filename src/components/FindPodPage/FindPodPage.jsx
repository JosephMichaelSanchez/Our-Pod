import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './FindPodPage.css'

function FindPodPage() {

    const [keyCode, setKeyCode] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'FIND_POD',
            payload: keyCode
        })

        history.push('/joinpod');
    }

    return (
        <>
            <div className="body">
                <h2>Find your Pod</h2>
                <h4>Enter the Key Code of the Pod you would like to join.</h4>
                <input className="codeInput" type="text" name="keyCode" placeholder='KEY CODE' onChange={(event) => setKeyCode(event.target.value)} /> <button className="btn btn-success" onClick={handleSubmit}>FIND POD</button>

            </div>
        </>
    )
}


export default FindPodPage;