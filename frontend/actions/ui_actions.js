export const RECEIVE_CURRENT_SUBJECT = "RECEIVE_CURRENT_SUBJECT";

export const receiveCurrentSubject = currentSubject => {
  return ({
    type: RECEIVE_CURRENT_SUBJECT,
    currentSubject
  });
};


export const updateSubject = subject => dispatch => {
  return dispatch(receiveCurrentSubject(subject));
};
