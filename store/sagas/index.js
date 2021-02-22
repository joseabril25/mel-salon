import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { appWatcher } from './app.saga';
import { applyWatcher } from './apply.saga';
import { registerWatcher } from './register.saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(appWatcher)]);
  yield all([fork(applyWatcher)]);
  yield all([fork(registerWatcher)]);
}
