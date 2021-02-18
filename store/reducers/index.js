// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import appReducer from './app.reducer';
import applyReducer from './apply.reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    app: appReducer,
    apply: applyReducer
});

// Exports
export default rootReducer;
