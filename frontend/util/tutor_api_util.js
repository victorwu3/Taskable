export const fetchTutors = params => (
  $.ajax({
    method: 'get',
    url: `/api/subjects/${params.subjectId}/tutors_for_hires/`,
    data: params
  })
);
