import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_AVL_TIMES = 'RECEIVE_AVL_TIMES';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


export const receiveCurrentUser = current_user => {
  return ({
    type: RECEIVE_CURRENT_USER,
    current_user
  });
};

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const clearSessionErrors = () => {
  return ({
    type: CLEAR_ERRORS
  });
};

export const receiveAvlTimes = avlTimes => {
  return ({
    type: RECEIVE_AVL_TIMES,
    avlTimes
  });
};

export const createAvlTimes = (avlTimes) => dispatch => {
  return SessionApiUtil.createAvlTimes(avlTimes).then(
    (times) => dispatch(receiveAvlTimes(times))
  );
};

export const updateUser = (formData, userId) => dispatch => {
  return SessionApiUtil.updateUser(formData, userId).then(
    (user) => dispatch(receiveCurrentUser(user))
  );
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)));
};


export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors(errors)));
};

export const fblogin = email => dispatch => {
  return SessionApiUtil.fblogin(email).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)));
};

export const clearErrors = () => dispatch => {
  return dispatch(clearSessionErrors());
}
