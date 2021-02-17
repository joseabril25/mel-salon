import { appTypes } from "../types";
import { takeLatest, put, call, all } from 'redux-saga/effects';

function* toggleModal({payload}) {
    console.log("🚀 ~ file: app.saga.js ~ line 5 ~ function*toggleModal ~ payload", payload)
    const {active, type} = payload
    yield all([
        put({ type: appTypes.APP_SET_MODAL, payload: active}),
        put({ type: appTypes.APP_TYPE_MODAL, payload: type}),
    ])
}

// Generator: Watch Counter
export function* appWatcher() {
    yield takeLatest(appTypes.APP_TOGGLE_MODAL, toggleModal);
  }
  