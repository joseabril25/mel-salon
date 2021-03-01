import { appTypes, registerTypes, authTypes } from "../types";
import { takeLatest, put, all, select, call } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiRegister = (data) =>{
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + '/auth/local/register',
      data
  );
}

const apiSetappointment= (data) =>{
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + '/auth/local/register',
      data
  );
}

function* toggleApplyPages({payload}) {
    const { type, data, page} = payload;

    if(type === 'basic'){
        delete data.confirmPassword;
        yield all([
            put({ type: registerTypes.RGS_SET_BASIC, payload: data}),
            put({ type: registerTypes.RGS_SET_PAGE, payload: page}),
        ])
    } else if(type === 'basic-second'){
        yield all([
            put({ type: registerTypes.RGS_SET_BASIC_SEC, payload: data}),
            put({ type: registerTypes.RGS_SET_PAGE, payload: page}),
        ])
    } else if(type === 'location'){
        yield all([
            put({ type: registerTypes.RGS_SET_LOC, payload: data}),
            put({ type: registerTypes.RGS_SET_PAGE, payload: page}),
        ])
    } else if(type === 'pref'){
        yield all([
            put({ type: registerTypes.RGS_SET_PREF, payload: data}),
            put({ type: registerTypes.RGS_SET_PAGE, payload: page}),
        ])
    } else if(type === 'pref-second'){
        yield all([
            put({ type: registerTypes.RGS_SET_PREF_SEC, payload: data}),
            put({ type: registerTypes.RGS_SET_PAGE, payload: page}),
        ])
    } else if(type === 'pref-third'){
        yield all([
            put({ type: registerTypes.RGS_SET_PREF_TRI, payload: data}),
            put({ type: registerTypes.RGS_SET_PAGE, payload: page}),
        ])
    } else if(type === 'pref-four'){
        yield all([
            put({ type: registerTypes.RGS_SET_PREF_FOU, payload: data}),
            put({ type: registerTypes.RGS_SET_PAGE, payload: page}),
        ])
    } else if(type === 'pref-five'){
        yield put({ type: registerTypes.RGS_SET_PREF_FIV, payload: data});
        yield* handleSubmit();
    } else {

    }
}

function* handleRegister({payload}) {
    console.log("🚀 ~ file: register.saga.js ~ line 60 ~ function*handleSubmit ~ payload", payload)
    yield ({ type: registerTypes.isRegisterLoading, payload: true})
    
    try {
        const { data: {jwt, user}, status} = yield call(apiRegister, { ...payload });
        if(status === 200){
            yield all([
                put({ type: appTypes.APP_SET_MODAL, payload: false}),
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
        console.log("🚀 ~ file: register.saga.js ~ line 79 ~ function*handleRegister ~ error", error)
        yield put({ type: registerTypes.RGS_SET_ERROR, payload: 'Something went wrong. Contact Support.'})
    } finally {
        yield ({ type: registerTypes.isRegisterLoading, payload: false})
    }
}

function* handleAppointment({payload}) {
    console.log("🚀 ~ file: register.saga.js ~ line 60 ~ function*handleSubmit ~ payload", payload)
    yield ({ type: registerTypes.isRegisterLoading, payload: true})
    const jwt = yield Cookies.get('yehey-jwt')
    try {
        const { data: {jwt, user}, status} = yield call(apiSetappointment, { ...payload });
        if(status === 200){
            yield all([
                put({ type: appTypes.APP_SET_MODAL, payload: false}),
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
        console.log("🚀 ~ file: register.saga.js ~ line 79 ~ function*handleRegister ~ error", error)
        yield put({ type: registerTypes.RGS_SET_ERROR, payload: 'Something went wrong. Contact Support.'})
    } finally {
        yield ({ type: registerTypes.isRegisterLoading, payload: false})
    }
}

// Generator: Watch Counter
export function* registerWatcher() {
    yield takeLatest(registerTypes.RGS_TOGGLE_PAGE, toggleApplyPages);
    yield takeLatest(registerTypes.RGS_HANDLE_SUBMIT, handleRegister);
    yield takeLatest(registerTypes.RGS_HANDLE_APPOINTMENT, handleAppointment);
}
  