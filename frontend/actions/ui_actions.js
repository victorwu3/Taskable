export const RECEIVE_CURRENT_SUBJECT = "RECEIVE_CURRENT_SUBJECT";
export const UPDATE_FORM = "UPDATE_FORM";

export const receiveCurrentSubject = currentSubject => {
  return ({
    type: RECEIVE_CURRENT_SUBJECT,
    currentSubject
  });
};

export const receiveForm = form => {
  return ({
    type: UPDATE_FORM,
    form
  });
};

export const updateSubject = subject => dispatch => {
  return dispatch(receiveCurrentSubject(subject));
};

export const updateForm = form => dispatch => {
  return dispatch(receiveForm(form));
};
