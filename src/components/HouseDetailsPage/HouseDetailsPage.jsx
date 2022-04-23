import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './HouseDetailsPage.css'

function HouseDetailsPage() {

    const user = useSelector((store) => store.user);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log(firstName);
    }

    return (
        <>
            <div className="body">
                <h2>THIS IS THE HOUSE DETAILS PAGE</h2>
                <form>
                    <div>

                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder='FIRST NAME'
                            onChange={(event) => setFirstName(event.target.value)}
                        />

                    </div>
                    <div>

                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            placeholder='LAST NAME'
                            onChange={(event) => setLastName(event.target.value)}
                        />

                    </div>
                    <div>

                        Street Address:
                        <input
                            type="text"
                            name="streetAddress"
                            value={streetAddress}
                            placeholder='STREET ADDRESS'
                            onChange={(event) => setStreetAddress(event.target.value)}
                        />

                    </div>
                    <div>

                        Phone #:
                        <input
                            type="text"
                            name="phone"
                            value={phoneNumber}
                            placeholder='PHONE #'
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />

                    </div>
                    <div>

                        E-Mail:
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder='EMAIL'
                            onChange={(event) => setEmail(event.target.value)}
                        />

                    </div>
                    <button onClick={handleSubmit}>SUBMIT DETAILS</button>
                </form>
            </div>
        </>
    )
}

export default HouseDetailsPage;