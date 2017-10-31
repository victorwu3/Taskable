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
