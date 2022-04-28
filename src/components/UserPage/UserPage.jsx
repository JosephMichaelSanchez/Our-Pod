import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';

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
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
