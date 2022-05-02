import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* houseDetailsSaga () {
    yield takeLatest('ADD_DETAILS', addDetails)
}

function* addDetails(action) {
    console.log('IN ADD DETAILS');
    try {
        yield axios.post('/api/housedetails', action.payload);
        yield put({type: 'FETCH_USER'})
    } catch {
        console.log('ERROR POSTING HOUSE DETAILS');
        
    }
    
}

export default houseDetailsSaga;