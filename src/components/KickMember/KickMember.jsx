import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './KickMember.css';
import swal from 'sweetalert';

function KickMember({member}) {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const podInfo = useSelector(store => store.podInfoReducer);


    const handleRemove = () => {
        console.log('clicked');
        swal({
            title: "Are you sure?",
            text: `Are you sure you want to remove ${member.first_name} ${member.last_name} from your pod?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal(`${member.first_name} ${member.last_name} has been removed from your pod.`, {
                icon: "success",
              });
              console.log('REMOVE');
            } else {
              swal(`${member.first_name} ${member.last_name} will not be deleted.`);
            }
          });
    }

    return (
        <>
            <div key={member.id} className="memberDiv">
                <p>{member.first_name}</p>
                <p>{member.last_name}</p>
                <p>{member.address}</p>
                <p>{member.phone}</p>
                <p>{member.email}</p>
                <p>{member.last_name != user.last_name ? <button onClick={handleRemove}>REMOVE</button> : <span>ADMIN</span>}</p>

            </div>
        </>

    )
}

export default KickMember;