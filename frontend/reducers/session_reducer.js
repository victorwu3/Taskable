import { RECEIVE_CURRENT_USER, RECEIVE_AVL_TIMES } from '../actions/session_actions';
import merge from 'lodash/merge';
const defaultState = { currentUser: null, avlTimes: null };


const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.current_user });
    case RECEIVE_AVL_TIMES:
      return merge({}, state, { avlTimes: action.avlTimes })
    default:
      return state;
  }
};

export default SessionReducer;
