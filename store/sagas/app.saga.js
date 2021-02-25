import { appTypes } from "../types";
import { takeLatest, put, delay, all } from 'redux-saga/effects';

function* toggleModal({payload}) {
    const {active, type} = payload
    yield all([
        put({ type: appTypes.APP_SET_MODAL, payload: active}),
        put({ type: appTypes.APP_TYPE_MODAL, payload: type}),
    ])
}

function* toggleSpin({payload}) {
    yield put({ type: appTypes.APP_SET_SPINNING, payload});
}

function* setSpinResult({payload}) {
    yield delay(5000);
    console.log("🚀 ~ file: app.saga.js ~ line 17 ~ function*setSpinResult ~ payload", payload)
    const { id, type, title, img} = payload;
    if(type === 'fail') {
        yield all([
            put({ type: appTypes.APP_SET_MODAL, payload: true}),
            put({ type: appTypes.APP_TYPE_MODAL, payload: 'play-fail'}),
        ])
    }else{
        yield all([
            put({ type: appTypes.APP_SET_MODAL, payload: true}),
            put({ type: appTypes.APP_TYPE_MODAL, payload: 'play-success'}),
        ])
    }
    yield put({ type: appTypes.APP_SET_RESULT, payload});

}

// Generator: Watch Counter
export function* appWatcher() {
    yield takeLatest(appTypes.APP_TOGGLE_MODAL, toggleModal);
    yield takeLatest(appTypes.APP_TOGGLE_SPIN, toggleSpin);
    yield takeLatest(appTypes.APP_SET_SPIN_RESULT, setSpinResult);
}
  