# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user_list = [
  ['Max', 'Currier', 'maxC@email.com', 'password', '08536', '6095292702'],
  ['Ken', 'Zhong', 'kzhong@email.com', 'password', '08536', '6095292652'],
  ['Hanhee', 'Song', 'hsong@email.com', 'password', '08536', '6095345002'],
  ['Matt', 'Liu', 'mliu@email.com', 'password', '08536', '6090002702'],
  ['Kelby', 'Lu', 'klu@email.com', 'password', '08536', '6095123662'],
  ['Kristina', 'Crisafi', 'kcrisafi@email.com', 'password', '08536', '6096891098'],
  ['Ommi', 'Shimizu', 'oshimizu@email.com', 'password', '08536', '6090819457'],
  ['Ben', 'Blue', 'bblue@email.com', 'password', '08536', '6096256783'],
  ['Aarron', 'Lee', 'alee@email.com', 'password', '08536', '6092474965'],
  ['Steven', 'Ossorio', 'sossorio@email.com', 'password', '08536', '6093307709'],
  ['Ali', 'Harris', 'aharris@email.com', 'password', '08536', '6098812254'],
  ['Mashu', 'Duek', 'mduek@email.com', 'password', '08536', '6090100999'],
  ['Corey', 'Ladovsky', 'cladovsky@email.com', 'password', '08536', '6096778999'],
  ['David', 'Veytsman', 'dveytsmam@email.com', 'password', '08536', '6091579378'],
  ['Mashu', 'Duek', 'mduek@email.com', 'password', '08536', '6092244980'],
  ['Thomas', 'Heimberger', 'theimberger@email.com', 'password', '08536', '6095519068'],
  ['Kevin', 'Migues', 'kmigues@email.com', 'password', '08536', '6097509921'],
  ['Michelle', 'Shang', 'mshang@email.com', 'password', '08536', '7329581467'],
  ['Ashley', 'Wu', 'ashwu@email.com', 'password', '08536', '7320983456'],
  ['Tommy', 'Duek', 'tduek@email.com', 'password', '08536', '7323456913'],
  ['Nana', 'Cann', 'ncann@email.com', 'password', '08536', '7328851346'],
  ['Stuart', 'Rhea', 'srhea@email.com', 'password', '08536', '7324450956'],
  ['Meredith', 'Miller', 'mmiller@email.com', 'password', '08536', '7320118568'],
  ['Caroline', 'Volgman', 'cvolgman@email.com', 'password', '08536', '7321113465'],
  ['Joi', 'Boyd', 'jboyd@email.com', 'password', '08536', '7329046244'],
  ['Nellie', 'Schindler', 'nschindler@email.com', 'password', '08536', '7325502848'],
  ['Emilio', 'da Costa', 'edacosta@email.com', 'password', '08536', '9089581467'],
  ['Matthew', 'Ruddy', 'mruddy@email.com', 'password', '08536', '9080983456'],
  ['Rick', 'Gorman', 'rgorman@email.com', 'password', '08536', '9083456913'],
  ['Thuy', 'Dao', 'tdao@email.com', 'password', '08536', '9088851346'],
  ['Kevin', 'Coppa', 'kcoppa@email.com', 'password', '08536', '9084450956'],
  ['Emily', 'Hansen', 'ehansen@email.com', 'password', '08536', '9080118568'],
  ['Oguzhan', 'Cakmak', 'ocakmak@email.com', 'password', '08536', '9081113465'],
  ['Patrick', 'Fulghum', 'pfulghum@email.com', 'password', '08536', '9089046244'],
  ['Carly', 'Lorenz', 'clorenz@email.com', 'password', '08536', '9085502848']
]

user_list.each do |fname, lname, email, password, zipcode, phone_num|
  User.create(user: { fname: fname, lname: lname, email: email, password: password, zipcode: zipcode, phone_num: phone_num })
end

subject_names = ['Math', 'Chemistry', 'Biology', 'English', 'History', 'Test Prep', 'Coding', 'Accounting', 'Physics']

subject_names.each do |title|
  Subject.create(title: title)
end
availabilites = [
  [1, 1], [1, 2], [1, 3], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 16], [1, 17], [1, 18],
  [2, 4], [2, 5], [2, 6], [2, 13], [2, 14], [2, 15], [2, 10], [2, 11], [2, 12], [2, 16], [2, 17], [2, 18], [2, 19], [2, 20], [2,21],
  [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 10], [3, 11], [3, 12], [3, 19], [3, 17], [3, 18],
  [4, 1], [4, 2], [4, 3], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11], [4, 12], [4, 16], [4, 17], [4, 18],
  [5, 1], [5, 2], [5, 3], [5, 7], [5, 8], [5, 9], [5, 10], [5, 15], [5, 12], [5, 16], [5, 17], [5, 18],
  [6, 1], [6, 2], [6, 3], [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 16], [6, 17], [6, 18],
  [7, 1], [7, 2], [7, 3], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 16], [7, 17], [7, 18],
  [8, 1], [8, 2], [8, 3], [8, 7], [8, 8], [8, 9], [8, 10], [8, 11], [8, 12], [8, 16], [8, 17], [8, 18],
  [9, 1], [9, 2], [9, 3], [9, 7], [9, 8], [9, 9], [9, 10], [9, 11], [9, 12], [9, 16], [9, 17], [9, 18],
  [10, 1], [10, 2], [10, 3], [10, 7], [10, 8], [10, 9], [10, 10], [10, 11], [10, 12], [10, 16], [10, 17], [10, 18],
  [11, 1], [11, 2], [11, 3], [11, 7], [11, 8], [11, 9], [11, 10], [11, 11], [11, 12], [11, 16], [11, 17], [11, 18],
  [12, 1], [12, 2], [12, 3], [12, 7], [12, 8], [12, 9], [12, 10], [12, 11], [12, 12], [12, 16], [12, 17], [12, 18],
  [13, 1], [13, 2], [13, 3], [13, 7], [13, 8], [13, 9], [13, 10], [13, 11], [13, 12], [13, 16], [13, 17], [13, 18],
  [14, 1], [14, 2], [14, 3], [14, 7], [14, 8], [14, 9], [14, 10], [14, 11], [14, 12], [14, 16], [14, 17], [14, 18],
  [15, 7], [15, 8], [15, 9], [15, 10], [15, 11], [15, 12], [15, 16], [15, 17], [15, 18],
  [16, 1], [16, 2], [16, 3], [16, 7], [16, 8], [16, 9], [16, 10], [16, 11], [16, 12], [16, 16], [16, 17], [16, 18],
  [17, 1], [17, 2], [17, 3], [17, 7], [17, 8], [17, 9], [17, 10], [17, 11], [17, 12], [17, 16], [17, 17], [17, 18],
  [18, 7], [18, 8], [18, 9], [18, 10], [18, 11], [18, 12], [18, 19], [18, 20], [18, 21],
  [19, 1], [19, 2], [19, 3], [19, 7], [19, 8], [19, 9], [19, 10], [19, 11], [19, 12], [19, 16], [19, 17], [19, 18],
  [20, 1], [20, 2], [20, 3], [20, 7], [20, 8], [20, 9], [20, 10], [20, 11], [20, 12], [20, 18], [20, 19], [20, 20],
  [21, 1], [21, 2], [21, 3], [21, 7], [21, 8], [21, 9], [21, 10], [21, 11], [21, 12], [21, 19], [21, 20], [21, 21],
  [22, 7], [22, 8], [22, 9], [22, 10], [22, 11], [22, 12], [22, 16], [22, 17], [22, 18],
  [23, 1], [23, 2], [23, 3], [23, 7], [23, 8], [23, 9], [23, 10], [23, 11], [23, 12], [23, 16], [23, 17], [23, 18],
  [24, 7], [24, 8], [24, 9], [24, 10], [24, 11], [24, 12], [24, 16], [24, 17], [24, 18],
  [25, 1], [25, 2], [25, 3], [25, 7], [25, 8], [25, 9], [25, 10], [25, 11], [25, 12], [25, 16], [25, 17], [25, 18],
  [26, 7], [26, 8], [26, 9], [26, 10], [26, 11], [26, 12], [26, 16], [26, 17], [26, 18],
  [27, 1], [27, 2], [27, 3], [27, 7], [27, 8], [27, 9], [27, 10], [27, 11], [27, 12], [27, 16], [27, 17], [27, 18],
  [28, 7], [28, 8], [28, 9], [28, 13], [28, 14], [28, 15], [28, 16], [28, 17], [28, 18],
  [29, 7], [29, 8], [29, 9], [29, 10], [29, 11], [29, 12], [29, 16], [29, 17], [29, 18],
  [30, 1], [30, 2], [30, 3], [30, 7], [30, 8], [30, 9], [30, 10], [30, 11], [30, 12], [30, 16], [30, 17], [30, 18],
  [31, 1], [31, 2], [31, 3],
  [32, 1], [32, 2], [32, 3], [32, 7], [32, 8], [32, 9], [32, 10], [32, 11], [32, 12], [32, 16], [32, 17], [32, 18],
  [33, 7], [33, 8], [33, 9], [33, 10], [33, 11], [33, 12], [33, 16], [33, 17], [33, 18],
  [34, 1], [34, 2], [34, 3], [34, 7], [34, 16], [34, 17], [34, 18],
  [35, 1], [35, 2], [35, 3], [35, 7], [35, 8], [35, 9], [35, 10],
  [36, 1], [36, 2], [36, 3], [36, 7], [36, 8], [36, 9], [36, 10], [36, 11], [36, 12], [36, 16], [36, 17], [36, 18],
  [37, 8], [37, 9], [37, 10], [37, 11], [37, 12], [37, 16], [37, 17], [37, 18],
  [38, 4], [38, 5], [38, 6], [38, 7], [38, 8], [38, 9], [38, 10], [38, 11], [38, 12], [38, 16], [38, 17], [38, 18],
  [39, 13], [39, 14], [39, 15], [39, 7], [39, 8], [39, 9], [39, 10], [39, 11], [39, 12],
  [40, 8], [40, 9], [40, 10], [40, 11], [40, 12], [40, 16], [40, 17], [40, 18],
  [41, 1], [41, 2], [41, 3], [41, 7], [41, 11], [41, 12], [41, 16], [41, 17], [41, 18],
  [42, 1], [42, 2], [42, 3], [42, 7], [42, 8], [42, 9], [42, 10], [42, 11], [42, 12], [42, 16], [42, 17], [42, 18],
  [43, 7], [43, 8], [43, 9], [43, 10], [43, 11], [43, 12], [43, 16], [43, 17], [43, 18],
  [44, 7], [44, 8], [44, 9], [44, 10],
  [45, 1], [45, 2], [45, 3], [45, 7], [45, 8], [45, 9], [45, 16], [45, 17], [45, 18],
]

availabilites.each do |user_id, time_avl|
  AvailableTime.create(user_id: user_id, time_avl: time_avl)
end

# 9 subjects
# 'Math', 'Chemistry', 'Biology', 'English', 'History', 'Test Prep', 'Coding', 'Accounting', 'Physics'

tutors_for_hires = [
  [1, 1, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [1, 2, 28, 50, true, true, false, 'I have 7 years experience teaching Chemistry at a high school level. I want to see my students succeed!'],
  [1, 9, 39, 50, true, true, false, 'I have 7 years experience teaching Physics at a high school level. I want to see my students succeed!'],
  [2, 1, 27, 45, true, true, true, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [3, 1, 45, 50, false, true, true, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [4, 1, 80, 50, false, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [5, 1, 62, 50, true, true, true, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [6, 1, 58, 80, false, false, true, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [7, 8, 13, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [8, 9, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [9, 9, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [10, 2, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [11, 2, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [12, 2, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [13, 2, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [14, 2, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [15, 2, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [16, 3, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [17, 3, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [18, 3, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [19, 3, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [20, 3, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [21, 3, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [22, 4, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [23, 4, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [24, 4, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [25, 4, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [26, 4, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [27, 4, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [28, 5, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [29, 5, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [30, 5, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [31, 5, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [32, 5, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [33, 5, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [34, 5, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [35, 6, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [36, 6, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [37, 6, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [38, 6, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [39, 6, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [40, 7, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [41, 7, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [42, 7, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [43, 7, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [44, 8, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
  [45, 8, 45, 50, true, true, false, 'I have 10 years experience teaching math at a high school level. Studied math in college. I want to see my students succeed!'],
]
