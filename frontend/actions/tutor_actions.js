import * as TutorApiUtil from '../util/tutor_api_util';

export const RECEIVE_TUTORS = 'RECEIVE_TUTORS';

export const receiveTutors = (tutors, params) => {
  return ({
    type: RECEIVE_TUTORS,
    tutors,
    params
  });
};


export const fetchTutors = (params) => dispatch => {
  return TutorApiUtil.fetchTutors(params).then(
    tutors => dispatch(receiveTutors(tutors, params))
  );
};
