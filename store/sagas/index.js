import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { appWatcher } from './app.saga';
import { applyWatcher } from './apply.saga';
import { registerWatcher } from './register.saga';
import { authWatcher } from './auth.saga';
import { appointmentWatcher } from './appointment.saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    fork(appWatcher),
    fork(applyWatcher),
    fork(registerWatcher),
    fork(authWatcher),
    fork(appointmentWatcher),
  ]);
}
