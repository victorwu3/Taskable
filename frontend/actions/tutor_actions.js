import * as TutorApiUtil from '../util/tutor_api_util';

export const RECEIVE_TUTORS = 'RECEIVE_TUTORS';
export const RECEIVE_TUTOR = 'RECEIVE_TUTOR';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_HIRED_TUTORS = 'RECEIVE_HIRED_TUTORS';
export const UPDATE_BOOKING = 'UPDATE_BOOKING';

export const receiveTutors = (tutors, params) => {
  return ({
    type: RECEIVE_TUTORS,
    tutors,
    params
  });
};

export const receiveTutor = (tutor) => {
  return ({
    type: RECEIVE_TUTOR,
    tutor
  });
};

export const receiveBooking = booking => {
  return ({
    type: RECEIVE_BOOKING,
    booking
  });
};

export const receiveHiredTutors = hiredTutors => {
  return ({
    type: RECEIVE_HIRED_TUTORS,
    hiredTutors
  });
};

export const fetchTutors = (params) => dispatch => {
  return TutorApiUtil.fetchTutors(params).then(
    tutors => dispatch(receiveTutors(tutors, params))
  );
};

export const createBooking = (params) => dispatch => {
  return TutorApiUtil.createBooking(params);
};

export const fetchHiredTutors = (userId) => dispatch => {
  return TutorApiUtil.fetchHiredTutors(userId).then(
    hiredTutors => dispatch(receiveHiredTutors(hiredTutors))
  );
};

export const createReview = (params) => dispatch => {
  return TutorApiUtil.createReview(params);
}

export const updateBooking = params => dispatch => {
  return TutorApiUtil.updateBooking(params);
}

export const createTutor = params => dispatch => {
  return TutorApiUtil.createTutor(params);
}
