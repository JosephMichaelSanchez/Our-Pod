import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import houseDetailsSaga from './houseDetails.saga';
import createPodSaga from './createPod.saga';
import findPodSaga from './findPod.saga';
import joinPodSaga from './joinPod.saga';
import myPodSaga from './myPod.saga';
import getDatesSaga from './getDates.saga';
import podInfoSaga from './podInfo.saga';
import addHostSaga from './addHost.saga';
import cancelHostSaga from './cancelHost.saga';
import deleteDateSaga from './deleteDate.saga';
import createDateSaga from './createDate.saga';
import kickMemberSaga from './kickMember.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    houseDetailsSaga(),
    createPodSaga(),
    findPodSaga(),
    joinPodSaga(),
    myPodSaga(),
    getDatesSaga(),
    podInfoSaga(),
    addHostSaga(),
    cancelHostSaga(),
    deleteDateSaga(),
    createDateSaga(),
    kickMemberSaga(),
  ]);
}
