import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { appWatcher } from './app.saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(appWatcher)]);
}
