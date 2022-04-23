import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CreatePodPage.css'

function CreatePodPage() {

    const dispatch = useDispatch();
    const [podName, setPodName] = useState('');
    const [keyCode, setKeyCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
    
        const newPod = {
            pod_name: podName,
            key_code: keyCode
        }
        console.log(newPod);
        setPodName('');
        setKeyCode('');
    }

    return (
        <>
            <div className="body">
                <h2>THIS IS THE CREATE A POD PAGE</h2>

                <form>
                    <div>

                        Pod Name:
                        <input
                            type="text"
                            name="podName"
                            value={podName}
                            placeholder='POD NAME'
                            onChange={(event) => setPodName(event.target.value)}
                        />

                    </div>
                    <div>

                        Pod Key Code:
                        <input
                            type="text"
                            name="keyCode"
                            value={keyCode}
                            placeholder='KEY CODE'
                            onChange={(event) => setKeyCode(event.target.value)}
                        />

                    </div>

                    <button onClick={handleSubmit}>CREATE POD</button>
                </form>
            </div>
        </>
    )
}

export default CreatePodPage;