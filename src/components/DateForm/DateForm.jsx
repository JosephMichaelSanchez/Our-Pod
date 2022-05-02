import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './DateForm.css'
import swal from 'sweetalert';

function DateForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podInfo = useSelector(store => store.podInfoReducer);
    const [newDate, setNewDate] = useState('');

    // useEffect(() => {
    //     dispatch({
    //         type: 'GET_USER_POD',
    //         payload: user.pod_id
    //     })
    //     dispatch({
    //         type: 'GET_POD_INFO',
    //         payload: user.pod_id
    //     })
    // }, [])
   

    const handleSubmit = () => {

        if (newDate.length === 10) {
            console.log(newDate);

            const Id = podInfo.id

            const newHostingDate = {
                date: newDate,
                podId: Id
            }

            console.log(newHostingDate);

            dispatch({
                type: 'ADD_NEW_DATE',
                payload: newHostingDate
            })

        } else {
            console.log('not long enough');
        }

        setNewDate('');

        swal({
            title: "Success!",
            text: `New date added!`,
            icon: "success",
            button: "OK!",
          });



    }





    return (
        <>
            <div className="body">
                <h3>ADD NEW DATES</h3>
                <form>
                    <div>
                        <label htmlFor="newdate">
                            Add New Date:
                            <input
                                type="date"
                                name="newdate"
                                className="formInput"
                                value={newDate}
                                placeholder='YYYY/MM/DD'
                                onChange={(event) => setNewDate(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={handleSubmit}>ADD DATE</button>
                        <div>
                            <button className="btn btn-secondary" onClick={() => { history.push(`/mypod`) }}>BACK TO POD PAGE</button>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}



export default DateForm;