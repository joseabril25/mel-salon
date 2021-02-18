import { applyTypes } from "../types";
import { takeLatest, put, all } from 'redux-saga/effects';

function* toggleApplyPages({payload}) {
    yield all([
        put({ type: applyTypes.APL_SET_PAGE, payload}),
    ])
}

// Generator: Watch Counter
export function* applyWatcher() {
    yield takeLatest(applyTypes.APL_TOGGLE_PAGE, toggleApplyPages);
  }
  