json.extract! user, :id, :fname, :lname, :email, :zipcode, :phone_num
json.image_url asset_url(user.image.url)
