import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './HouseDetailsPage.css';



function HouseDetailsPage() {


    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        
        const houseDetails = {
            first_name: firstName,
            last_name: lastName,
            address: streetAddress,
            phone: phoneNumber,
            email: email
        }
        console.log(houseDetails);

        dispatch({
            type: 'ADD_DETAILS',
            payload: houseDetails
        })

        swal({
            title: "Success!",
            text: `Details updated!`,
            icon: "success",
            button: "OK!",
          });
        
        history.push('/user');
    }

    return (
        <>
            <div className="body">
                <h2 className="title">Your House Details</h2>
                <form className="detailsForm">
                    <div>

                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            className="formInput"
                            value={firstName}
                            placeholder={user.first_name}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div>

                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            className="formInput"
                            value={lastName}
                            placeholder={user.last_name}
                            onChange={(event) => setLastName(event.target.value)}
                        />

                    </div>
                    <div>

                        Street Address:
                        <input
                            type="text"
                            name="streetAddress"
                            className="formInput"
                            value={streetAddress}
                            placeholder={user.address}
                            onChange={(event) => setStreetAddress(event.target.value)}
                        />

                    </div>
                    <div>

                        Phone #:
                        <input
                            type="text"
                            name="phone"
                            className="formInput"
                            value={phoneNumber}
                            placeholder={user.phone}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />

                    </div>
                    <div>

                        E-Mail:
                        <input
                            type="text"
                            name="email"
                            className="formInput"
                            value={email}
                            placeholder={user.email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                    </div>
                    <button className="btn btn-success" onClick={handleSubmit}>SUBMIT DETAILS</button>
                    <div>
                    <button className="btn btn-secondary" onClick={() => {history.push('/user');}}>BACK</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HouseDetailsPage;