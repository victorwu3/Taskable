import { RECEIVE_TUTORS } from '../actions/tutor_actions';
import merge from 'lodash/merge';


const TutorsReducer = (state = [], action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TUTORS:
      return action.tutors;
    default:
      return state;
  }
};

export default TutorsReducer;
