export const fetchTutors = params => (
  $.ajax({
    method: 'get',
    url: '/api/session',
    data: params
  })
);
