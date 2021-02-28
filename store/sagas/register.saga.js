import { registerTypes } from "../types";
import { takeLatest, put, all, select, call } from 'redux-saga/effects';
import axios from 'axios';

const apiRegister = (data) =>{
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

function* handleSubmit() {
    yield ({ type: registerTypes.isRegisterLoading, payload: true})
    const data = yield select((state) => state.register);

    const registerData = {
        ...data.basic,
        ...data.basicSecond,
        ...data.location,
        ...data.preferences,
        ...data.preferencesSecond,
        ...data.preferencesThird,
        ...data.preferencesFourth,
        ...data.preferencesFive,
    }
    
    try {
        const { data, status} = yield call(apiRegister, { ...registerData });
        if(status === 200){
            yield put({ type: registerTypes.RGS_SET_PAGE, payload: 9})
        }
    } catch (error) {
        yield put({ type: registerTypes.RGS_SET_ERROR, payload: 'Something went wrong. Contact Support.'})
    } finally {
        yield ({ type: registerTypes.isRegisterLoading, payload: false})
    }
}

// Generator: Watch Counter
export function* registerWatcher() {
    yield takeLatest(registerTypes.RGS_TOGGLE_PAGE, toggleApplyPages);
    yield takeLatest(registerTypes.RGS_HANDLE_SUBMIT, handleSubmit);
}
  