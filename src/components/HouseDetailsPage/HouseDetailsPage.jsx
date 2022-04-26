import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HouseDetailsPage.css'


function HouseDetailsPage() {


    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [streetAddress, setStreetAddress] = useState(user.address)
    const [phoneNumber, setPhoneNumber] = useState(user.phone)
    const [email, setEmail] = useState(user.email)

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
    }

    return (
        <>
            <div className="body">
                <h2>THIS IS THE HOUSE DETAILS PAGE</h2>
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
                </form>
            </div>
        </>
    )
}

export default HouseDetailsPage;