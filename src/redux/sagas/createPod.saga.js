import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* createPodSaga () {
    yield takeLatest('CREATE_POD', createPod)
}

function* createPod(action) {
    console.log('IN CREATE POD');
    try {
        yield axios.post('/api/createpod', action.payload);
    } catch {
        console.log('ERROR POSTING NEW POD');
        
    }
    
}

export default createPodSaga;