export const fetchTutors = params => (
  $.ajax({
    method: 'get',
    url: `/api/subjects/${params.currentSubject}/tutors_for_hires/`,
    data: params
  })
);
