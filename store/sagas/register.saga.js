import { registerTypes } from "../types";
import { takeLatest, put, all } from 'redux-saga/effects';

function* toggleApplyPages({payload}) {
    yield all([
        put({ type: registerTypes.RGS_SET_PAGE, payload}),
    ])
}

// Generator: Watch Counter
export function* registerWatcher() {
    yield takeLatest(registerTypes.RGS_TOGGLE_PAGE, toggleApplyPages);
  }
  