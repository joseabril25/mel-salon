// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import appReducer from './app.reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    app: appReducer,
});

// Exports
export default rootReducer;
