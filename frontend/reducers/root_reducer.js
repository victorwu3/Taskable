import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import UiReducer from './ui_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UiReducer
});


export default RootReducer;
