import { RECEIVE_TUTORS, RECEIVE_HIRED_TUTORS } from '../actions/tutor_actions';
import merge from 'lodash/merge';

let defaultState = {tutors: null, params: {address: null, ed_lvl: null, description: null}, hiredTutors: null};

const TutorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TUTORS:
      return merge({}, state, {params: action.params}, {tutors: action.tutors});
    case RECEIVE_HIRED_TUTORS:
      return merge({}, state, {hiredTutors: action.hiredTutors});
    default:
      return state;
  }
};

export default TutorsReducer;
