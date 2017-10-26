debugger

json.array! @tutors do |tutor|
  debugger
  json.fname tutor[:user][:fname]
  json.lname tutor[:user][:lname]
  json.rate tutor[:rate]
  json.description tutor[:description]
  json.num_completed tutor[:num_completed]
end
