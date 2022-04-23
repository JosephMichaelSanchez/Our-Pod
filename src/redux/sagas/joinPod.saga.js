import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* joinPodSaga () {
    yield takeLatest('JOIN_POD', joinPod);
}

function* joinPod(action){
    console.log('IN JOIN POD');
    const id = action.payload;
    console.log(action.payload);
    
    
    try {
    yield axios.put(`/api/joinpod/${id}`)
    } catch {
        console.log('ERROR IN joinPod');
        }
}

export default joinPodSaga;