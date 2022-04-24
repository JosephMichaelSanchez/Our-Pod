import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* podInfoSaga() {
    yield takeLatest('GET_POD_INFO', getPodInfo);
}

function* getPodInfo(action) {
    console.log('in getPodInfo');
    try {
        const podInfo = yield axios.get(`/api/podinfo`)
        yield put({type: 'SET_POD_INFO', payload: podInfo.data})
        
    } catch {
        console.log('ERROR GETTING POD INFO');
        
    }
    
}


export default podInfoSaga;