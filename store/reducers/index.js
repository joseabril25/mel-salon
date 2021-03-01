// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import appReducer from './app.reducer';
import applyReducer from './apply.reducer';
import registerReducer from './register.reducer';
import authReducer from './auth.reducer';
import appointmentReducer from './appointment.reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    apply: applyReducer,
    register: registerReducer,
    appointment: appointmentReducer,
});

// Exports
export default rootReducer;
