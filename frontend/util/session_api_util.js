export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user}
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user}
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fblogin = email => (
  $.ajax({
    method: 'POST',
    url: '/api/fbsession',
    data: {email: email}
  })
);

export const updateUser = (formData, userId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    processData: false,
    contentType: false,
    data: formData
  })
);

export const createAvlTimes = avlTimes => (
  $.ajax({
    method: 'post',
    // TODO: interpolate user id
    url: '/api/users/:user_id/available_times',
    data: avlTimes
  })
);
