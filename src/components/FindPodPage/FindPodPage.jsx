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

        // history.push('/joinpod');
    }

    return (
        <>
            <div className="body">
                <h2>THIS IS THE FIND POD PAGE</h2>
                <h3>ENTER THE KEY CODE OF THE POD YOU WOULD LIKE TO JOIN</h3>
                <input type="text" name="keyCode" placeholder='KEY CODE' onChange={(event) => setKeyCode(event.target.value)} /> <button onClick={handleSubmit}>FIND POD</button>

            </div>
        </>
    )
}


export default FindPodPage;