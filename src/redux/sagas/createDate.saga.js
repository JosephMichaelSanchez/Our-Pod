import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createDateSaga() {
    yield takeLatest('ADD_NEW_DATE', createDate)
}

function* createDate(action) {
    console.log('IN createDate');
    console.log(action.payload);
    
    
    try {
        yield axios.post('/api/createdate', action.payload);
        yield put({type: 'GET_DATES'})
    } catch {
        console.log('ERROR CREATING NEW DATE');
        
    }
}


export default createDateSaga;