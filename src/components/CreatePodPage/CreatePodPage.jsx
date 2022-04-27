import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreatePodPage.css';
import swal from 'sweetalert';

function CreatePodPage() {

    const dispatch = useDispatch();
    const [podName, setPodName] = useState('');
    const [keyCode, setKeyCode] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault()
    
        const newPod = {
            pod_name: podName,
            key_code: keyCode
        }
        console.log(newPod);
        setPodName('');
        setKeyCode('');

        dispatch({
            type: 'CREATE_POD',
            payload: newPod
        })

        swal({
            title: "Pod Created!",
            text: `You have created the ${podName} pod!`,
            icon: "success",
            button: "OK!",
          });

          history.push('/user');
    }

    return (
        <>
            <div className="body">
                <h2>Create your Pod!</h2>
                <h4>Give your pod a name to go by.</h4>

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

                    <button className="btn btn-success" onClick={handleSubmit}>CREATE POD</button>
                    <div>
                        <button className="btn btn-secondary">BACK</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreatePodPage;