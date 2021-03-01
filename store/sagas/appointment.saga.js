import { appointmentTypes } from "../types";
import { takeLatest, put, all, select, call } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiSetAppointment = ({data, jwt}) =>{
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + '/appointments',
      data,
      {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
        }
      }
  );
}

function* handleAppointment({payload}) {
    const { appointment } = payload;
    const jwt = yield Cookies.get('yehey-jwt');
    const user = yield select((state) => state.auth.user)
    const requestData = {
        date: appointment,
        username: user.username
    }
    try {
        const { data, status} = yield call(apiSetAppointment, { ...requestData, jwt });
        if(status === 200){
            
        }
    } catch (error) {
        console.log("🚀 ~ file: register.saga.js ~ line 79 ~ function*handleRegister ~ error", error)
        yield put({ type: appointmentTypes.APT_SET_ERROR, payload: 'Something went wrong. Contact Support.'})
    }
}

// Generator: Watch Counter
export function* appointmentWatcher() {
    yield takeLatest(appointmentTypes.APT_SET_APPOINTMENT, handleAppointment);
}
  