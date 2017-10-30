export const fetchTutors = params => (
  $.ajax({
    method: 'get',
    url: `/api/subjects/${params.currentSubject}/tutors_for_hires/`,
    data: params
  })
);

export const fetchTutor = id => (
  $.ajax({
    method: 'get',
  })
);

export const createBooking = params => ()
  $.ajax({
    method: 'post',
    url: `/api/users/${params.user_id}/hired_tutors`,
    data: params
  });
);

export const fetchHiredTutors = userId => )
  $.ajax({
    method: 'get',
    url: `/api/users/${userId}/hired_tutors`,
  })
)
