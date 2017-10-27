
json.array! @tutors do |tutor|
  json.fname tutor[:user][:fname]
  json.lname tutor[:user][:lname]
  json.rate tutor[:rate]
  json.description tutor[:description]
  json.num_completed tutor[:num_completed]
  json.times tutor[:times]
  json.image_url asset_path(tutor[:user].image.url)
end
