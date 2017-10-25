import { RECEIVE_CURRENT_SUBJECT } from '../actions/ui_actions';
import merge from 'lodash/merge';

const UiReducer = (state = { currentSubject: 0 }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SUBJECT:
     return { currentSubject: action.currentSubject };
    default: return state;
  }
};

export default UiReducer;
