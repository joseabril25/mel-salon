import { appTypes } from "../types";
import { takeLatest, put, call } from 'redux-saga/effects';

function* toggleModal({payload}) {
    yield put({ type: appTypes.APP_SET_MODAL, payload });
}

// Generator: Watch Counter
export function* appWatcher() {
    yield takeLatest(appTypes.APP_TOGGLE_MODAL, toggleModal);
  }
  