import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import './UserPage.css'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
        type: 'GET_USER_POD'
    })
    dispatch({
        type: 'GET_POD_INFO'
    })
    dispatch({
        type: 'GET_DATES'
    })
}, [])



  return (
    <div className="container">
      <h2>Welcome to Our Pod, {user.username}!</h2>
      <LogOutButton className="btn btn-dark" />
      <div className="directionsDiv">
        <h4>Use the Navigation Bar to move around the site!</h4>
        <ul>
          <li>"My Pod"  will take you to your pod</li>
          <li>"My House Details" is where you provide your contact information</li>
          <li>"Create a Pod" is where you can make your very own pod!</li>
          <li>"Join a Pod" is where you can join an existing pod</li>
        </ul>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
