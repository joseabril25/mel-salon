import { registerTypes } from "../types";
import { takeLatest, put, all } from 'redux-saga/effects';

function* toggleApplyPages({payload}) {
    console.log("🚀 ~ file: register.saga.js ~ line 5 ~ function*toggleApplyPages ~ payload", payload)
    const { type, fields, page} = payload;

    yield all([
        put({ type: registerTypes.RGS_SET_PAGE, page}),
    ])
}

// Generator: Watch Counter
export function* registerWatcher() {
    yield takeLatest(registerTypes.RGS_TOGGLE_PAGE, toggleApplyPages);
}
  