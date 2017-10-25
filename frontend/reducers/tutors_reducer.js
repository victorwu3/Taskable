import { RECEIVE_TUTORS } from '../actions/tutor_actions';
import merge from 'lodash/merge';
const defaultState = { tutors: [] };


const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TUTORS:
      return merge({}, state, {tutors: action.tutors });
    default:
      return state;
  }
};

export default SessionReducer;
