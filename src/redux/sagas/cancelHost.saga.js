import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* cancelHostSaga() {
    yield takeLatest('CANCEL_HOST', cancelHost);
}

function* cancelHost(action) {
    console.log('in cancelHost');
    const date = action.payload
    
    try {
        yield axios.put(`/api/cancel/${date}`)
        yield put({type: 'GET_DATES'})
        
        
    } catch {
        console.log('ERROR IN CANCEL HOST SAGA');
        
    }
}

export default cancelHostSaga;