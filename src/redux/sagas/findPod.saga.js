import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* findPodSaga() {
    yield takeLatest('FIND_POD', findPod);
}

function* findPod(action) {
    console.log('IN FIND POD');
    
    const keyCode = action.payload
    console.log(keyCode);
    
    try {
    const pod = yield axios.get(`/api/findpod/${keyCode}`)
    yield put({type:'SET_POD', payload: pod.data})
    } catch {
        console.log('ERROR GETTING POD');
        
    }
}

export default findPodSaga;