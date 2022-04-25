import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import KickMember from '../KickMember/KickMember';

function RemoveMember() {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podList = useSelector(store => store.myPodReducer);
    const podInfo = useSelector(store => store.podInfoReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_USER_POD'
        })
        dispatch({
            type: 'GET_POD_INFO'
        })        
    }, [])

    return (
        <>
            <div className="body">
                <h2>THIS IS THE REMOVE MEMBER PAGE</h2>
                <div className="podMemberContainer">
                    {podList.map(member => {
                        return (
                            <KickMember
                                key={member.id}
                                member={member}
                            />
                        )
                    })}

                </div>
            </div>
        </>
    )

}

export default RemoveMember;