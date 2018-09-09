import {
  all,
  call,
  fork,
  put,
  take,
  takeLatest,
} from 'redux-saga/effects';

import rsf from '../../firebase';

import * as types from '../types';
import * as userActions from '../actions/user';

function* loginSaga({ email, password }) {
  try {
    yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password
    );
  } catch (err) {
    yield put(userActions.loginError(err.message));
  }
}

function* signupSaga({ email, password }) {
  try {
    yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password,
    );
  } catch (err) {
    yield put(userActions.loginError(err.message));
  }
}

function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut);
  } catch (err) {
    yield put(userActions.logoutError(err.message));
  }
}

function* userStatusWatcher() {
  const channel = yield call(rsf.auth.channel);
  
  while (true) {
    const { user } = yield take(channel); 
    if (user) {
      yield put(userActions.loginSuccess(user));
    } else {
      yield put(userActions.logoutSuccess());
    }
  }
}

function* userRootSaga() {
  yield fork(userStatusWatcher);
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginSaga),
    takeLatest(types.LOGOUT_REQUEST, logoutSaga),
    takeLatest(types.SIGNUP_REQUEST, signupSaga),
  ]);
}

export default userRootSaga;
