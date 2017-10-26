import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import UiReducer from './ui_reducer.js';
import TutorsReducer from './tutors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UiReducer,
  tutors: TutorsReducer
});


export default RootReducer;
