import { appTypes, authTypes } from "../types";
import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiLogin = ({identifier, password}) =>
  axios.post(
    process.env.NEXT_PUBLIC_API_URL + '/auth/local',
    { identifier, password }
    );
    
function* authLogin({payload}) {
  const { username: identifier, password} = payload;

  yield put({ type: authTypes.AUT_LOGIN_LOADING, payload: true})
  try {
    const {data: {jwt, user}, status} = yield call(apiLogin, { identifier, password});

    if(status === 200) {
      yield all([
        put({ type: authTypes.AUT_SET_LOGGED, payload: true}),
        put({ type: authTypes.AUT_SET_APW, payload: jwt}),
        put({ type: authTypes.AUT_SET_USER, payload: user}),
        put({ type: appTypes.APP_SET_MODAL, payload: false}),
      ])
      yield Cookies.set('yehey-jwt', jwt, { expires: 2 });
      yield Cookies.set('yehey-user', user, { expires: 2 });
      yield document.location.href = '/'
    }
  } catch (error) {
    yield put({ type: authTypes.AUT_LOGIN_ERROR, payload: 'Invalid login credentials'})
    
  } finally {
    yield put({ type: authTypes.AUT_LOGIN_LOADING, payload: false})
  }
}

function* authLogout(){
  yield Cookies.remove('yehey-jwt');
  yield Cookies.remove('yehey-user');
  yield all([
    put({ type: authTypes.AUT_SET_LOGGED, payload: false}),
    put({ type: authTypes.AUT_SET_APW, payload: null}),
    put({ type: authTypes.AUT_SET_USER, payload: null}),
  ])
}

function* authCheck() {
  const jwt = yield Cookies.get('yehey-jwt');
  const user = yield Cookies.get('yehey-user');
  console.log("🚀 ~ file: auth.saga.js ~ line 50 ~ function*authCheck ~ user", user)
  if(jwt){
    yield all([
      put({ type: authTypes.AUT_SET_LOGGED, payload: true}),
      put({ type: authTypes.AUT_SET_APW, payload: jwt}),
      put({ type: authTypes.AUT_SET_USER, payload: JSON.parse(user)}),
    ])
  }
}

// Generator: Watch Counter
export function* authWatcher() {
  yield takeLatest(authTypes.AUT_LOGIN, authLogin);
  yield takeLatest(authTypes.AUT_LOGOUT, authLogout);
  yield takeLatest(authTypes.AUT_CHECK, authCheck);
}
  