import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PodMember.css'

function PodMember({member}) {

    return (
        <>
            <div key={member.id} className="memberDiv">
                <p>{member.first_name}</p>
                <p>{member.last_name}</p>
                <p>{member.address}</p>
                <p>{member.phone}</p>
                <p>{member.email}</p>

            </div>
        </>

    )
}

export default PodMember;