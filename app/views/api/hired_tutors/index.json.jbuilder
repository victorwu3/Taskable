json.array! @bookings do |booking|
  json.fname booking.tutor.fname
  json.lname booking.tutor.lname
  json.id booking.tutor.id
  json.rate booking.rate
  json.description booking.description
  json.date booking.date
  json.time_period booking.time_period
  json.location booking.location
  json.completed booking.completed
  json.image_url booking.tutor.image.url
  json.subject_id booking.subject_id
end
