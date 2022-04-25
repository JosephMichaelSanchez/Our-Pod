import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addHostSaga() {
    yield takeLatest('ADD_NEW_HOST', addHost);
}

function* addHost(action) {
    console.log('in addHost');
    const date = action.payload
    
    try {
        yield axios.put(`/api/host/${date}`)
        yield put({type: 'GET_DATES'})
        console.log(podDates.data);
        
    } catch {
        console.log('ERROR ADDING HOST DATE');
        
    }
}

export default addHostSaga;