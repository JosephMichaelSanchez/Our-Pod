import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreatePodPage.css';
import swal from 'sweetalert';
import Chance from 'chance';

function CreatePodPage() {

    const dispatch = useDispatch();
    const [podName, setPodName] = useState('');
    // const [keyCode, setKeyCode] = useState('');
    const history = useHistory();
    const keyCode = useSelector(store => store.keyCodeReducer);




    const handleKeyCode = () => {

        console.log('clicked');
        let codeString = chance.string({ pool: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', length: 8 })
        console.log(keyCode);

        dispatch({ type: 'SET_KEYCODE', payload: codeString })
    }

        const handleSubmit = (event) => {
            event.preventDefault()

            const newPod = {
                pod_name: podName,
                key_code: keyCode
            }
            console.log(newPod);
            setPodName('');
            // setKeyCode('');

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

            dispatch({ type: 'CLEAR_KEYCODE'})

            history.push('/user');
        }

        return (
            <>
                <div className="body">
                    <h2>Create your Pod!</h2>
                    <div></div>
                    <h4>Step 1: Generate a Key Code for your new pod.</h4>
                    <h5>You will share this Key Code with people you invite to your pod.</h5>
                    <h5>You and the people you invite will use the code to join the pod.</h5>
                    <div></div>
                    <button className="btn btn-danger" onClick={handleKeyCode}>GENERATE MY KEY CODE!</button>
                    <h4>Your Key Code is: {keyCode}</h4>
                    <h4 className="stepTwo">Step 2: Give your pod a name to go by.</h4>

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