import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PodMember from '../PodMember/PodMember';
import TableRow from '../TableRow/TableRow';

import './MyPodPage.css'

function MyPodPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { pod_id } = useParams();
    const user = useSelector(store => store.user);
    const podList = useSelector(store => store.myPodReducer);
    const dateList = useSelector(store => store.podDatesReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_USER_POD'
        })
        // dispatch({
        //     type: 'GET_POD_INFO',
        //     payload: user.pod_id
        // })
        dispatch({
            type: 'GET_DATES'
        })
    }, [])



    return (
        <>
            <div className="body">
                <h2>MY POD PAGE</h2>
                <div className="podMemberContainer">
                    {podList.map(member => {
                        return (
                            <PodMember
                                key={member.id}
                                member={member}
                            />
                        )
                    })}

                </div>
                <div>
                    <table className="dateTable">
                        <tr>
                            <td>DATE</td>
                            <td>HOST</td>
                            <td>ADMIN</td>
                        </tr>
                        {dateList.map(date => {
                            return (
                                <TableRow
                                    key={date.id}
                                    date={date}
                                />
                            )
                        })}



                    </table>


                </div>

            </div>
        </>
    )
}


export default MyPodPage;