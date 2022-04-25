import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './KickMember.css'

function KickMember({member}) {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podInfo = useSelector(store => store.podInfoReducer);

    return (
        <>
            <div key={member.id} className="memberDiv">
                <p>{member.first_name}</p>
                <p>{member.last_name}</p>
                <p>{member.address}</p>
                <p>{member.phone}</p>
                <p>{member.email}</p>
                <p>{member.last_name != user.last_name ? <button>REMOVE</button> : <span>ADMIN</span>}</p>

            </div>
        </>

    )
}

export default KickMember;