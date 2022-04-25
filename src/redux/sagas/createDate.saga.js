import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createDateSaga() {
    yield takeLatest('ADD_NEW_DATE', createDate)
}

function* createDate(action) {
    console.log('IN createDate');
    
    try {
        yield axios.post('/api/createdate', action.payload);
    } catch {
        console.log('ERROR CREATING NEW DATE');
        
    }
}


export default createDateSaga;