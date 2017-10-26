import { RECEIVE_CURRENT_SUBJECT, UPDATE_FORM } from '../actions/ui_actions';
import merge from 'lodash/merge';

const UiReducer = (state = { currentSubject: 0, formType: 'form' }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SUBJECT:
      return merge({}, state, { currentSubject: action.currentSubject });
    case UPDATE_FORM:
      return merge({}, state, { formType: action.form });
    default: return state;
  }
};

export default UiReducer;
