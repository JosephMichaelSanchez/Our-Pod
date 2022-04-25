import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* kickMemberSaga () {
    yield takeLatest('KICK_MEMBER', kickMember);
}

function* kickMember(action){
    console.log('IN kickMember');
    
    try {
    yield axios.put(`/api/kickmember`, action.payload)
    yield put({type: 'GET_USER_POD'})

    } catch {
        console.log('ERROR IN kickMember');
        }
}

export default kickMemberSaga;