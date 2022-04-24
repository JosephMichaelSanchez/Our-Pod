import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getDatesSaga() {
    yield takeLatest('GET_DATES', getDates);
}

function* getDates(action) {
    console.log('in GET DATES');
    try {
        const podDates = yield axios.get(`/api/dates`)
        yield put({type: 'SET_DATES', payload: podDates.data})
        
    } catch {
        console.log('ERROR GETTING POD DATES');
        
    }
}

export default getDatesSaga;