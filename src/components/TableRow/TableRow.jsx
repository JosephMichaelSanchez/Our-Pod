import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './TableRow.css'

function TableRow({ date }) {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podInfo = useSelector(store => store.podInfoReducer);

    const day = moment(date.date).format("MMM Do YY");

    const handleDelete = () => {
        console.log('the date id is', date.id);

        dispatch({
            type: 'DELETE_DATE',
            payload: date.id
        })


    }

    const handleAddHost = () => {
        dispatch({
            type: 'ADD_NEW_HOST',
            payload: date.id

        })
    }

    const handleCancel = () => {
        dispatch({
            type: 'CANCEL_HOST',
            payload: date.id
        })
    }



    return (
        <>
        {date.host == 'NEEDS HOST' ?
            <tr className="needsHost">
                <td>{day}</td>
                <td>{date.host == 'NEEDS HOST' ? <button className="btn btn-success" onClick={handleAddHost}>HOST</button> : <p>{date.host}</p>}</td>
                <td>{date.host == user.last_name && <button className="btn btn-danger" onClick={handleCancel}>CANCEL</button>}</td>
                <td>{user.id == podInfo.admin_id ? <button className="btn btn-dark" onClick={handleDelete}>DELETE</button> : <p></p>}</td>
            </tr> : <tr className="hasHost">
                <td>{day}</td>
                <td>{date.host == 'NEEDS HOST' ? <button onClick={handleAddHost}>HOST</button> : <p>{date.host}</p>}</td>
                <td>{date.host == user.last_name && <button className="btn btn-danger" onClick={handleCancel}>CANCEL</button>}</td>
                <td>{user.id == podInfo.admin_id ? <button className="btn btn-dark" onClick={handleDelete}>DELETE</button> : <p></p>}</td>
            </tr>}
        </>
    )
}


export default TableRow;

