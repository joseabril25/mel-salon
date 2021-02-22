// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import appReducer from './app.reducer';
import applyReducer from './apply.reducer';
import registerReducer from './register.reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    app: appReducer,
    apply: applyReducer,
    register: registerReducer
});

// Exports
export default rootReducer;
