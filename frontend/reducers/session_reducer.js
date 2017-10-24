import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';
const defaultState = { currentUser: null };


const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.current_user });
    default:
      return state;
  }
};

export default SessionReducer;
