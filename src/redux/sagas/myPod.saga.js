import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* myPodSaga() {
    yield takeLatest('GET_USER_POD', getUserPod);
}

function* getUserPod(action) {
    console.log('IN getUserPod');
    try {
        const thePod = yield axios.get(`/api/mypod`)
        yield put({type: 'SET_USER_POD', payload: thePod.data})
        console.log(thePod.data);
        
    } catch {
        console.log('ERROR GETTING USER POD');
        
    }
    
}

export default myPodSaga;