# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user_list = [
  ['Max', 'Currier', 'maxC@email.com', 'password', '10001', '6095292702'],
  ['Ken', 'Zhong', 'kzhong@email.com', 'password', '10001', '6095292652'],
  ['Hanhee', 'Song', 'hsong@email.com', 'password', '10001', '6095345002'],
  ['Matt', 'Liu', 'mliu@email.com', 'password', '10001', '6090002702'],
  ['Kelby', 'Lu', 'klu@email.com', 'password', '10001', '6095123662'],
  ['Kristina', 'Crisafi', 'kcrisafi@email.com', 'password', '10001', '6096891098'],
  ['Ommi', 'Shimizu', 'oshimizu@email.com', 'password', '10001', '6090819457'],
  ['Ben', 'Blue', 'bblue@email.com', 'password', '10001', '6096256783'],
  ['Aarron', 'Lee', 'alee@email.com', 'password', '10001', '6092474965'],
  ['Steven', 'Ossorio', 'sossorio@email.com', 'password', '10001', '6093307709'],
  ['Ali', 'Harris', 'aharris@email.com', 'password', '10001', '6098812254'],
  ['Mashu', 'Duek', 'mduek@email.com', 'password', '10001', '6090100999'],
  ['Corey', 'Ladovsky', 'cladovsky@email.com', 'password', '10001', '6096778999'],
  ['David', 'Veytsman', 'dveytsmam@email.com', 'password', '10001', '6091579378'],
  ['Mashu', 'Duek', 'mduek@email.com', 'password', '10001', '6092244980'],
  ['Thomas', 'Heimberger', 'theimberger@email.com', 'password', '10001', '6095519068'],
  ['Kevin', 'Migues', 'kmigues@email.com', 'password', '10001', '6097509921'],
  ['Michelle', 'Shang', 'mshang@email.com', 'password', '10001', '7329581467'],
  ['Ashley', 'Wu', 'ashwu@email.com', 'password', '10001', '7320983456'],
  ['Tommy', 'Duek', 'tduek@email.com', 'password', '10001', '7323456913'],
  ['Nana', 'Cann', 'ncann@email.com', 'password', '10001', '7328851346'],
  ['Stuart', 'Rhea', 'srhea@email.com', 'password', '10001', '7324450956'],
  ['Meredith', 'Miller', 'mmiller@email.com', 'password', '10001', '7320118568'],
  ['Caroline', 'Volgman', 'cvolgman@email.com', 'password', '10001', '7321113465'],
  ['Joi', 'Boyd', 'jboyd@email.com', 'password', '10001', '7329046244'],
  ['Nellie', 'Schindler', 'nschindler@email.com', 'password', '10001', '7325502848'],
  ['Emilio', 'da Costa', 'edacosta@email.com', 'password', '10001', '9089581467'],
  ['Matthew', 'Ruddy', 'mruddy@email.com', 'password', '10001', '9080983456'],
  ['Rick', 'Gorman', 'rgorman@email.com', 'password', '10001', '9083456913'],
  ['Thuy', 'Dao', 'tdao@email.com', 'password', '10001', '9088851346'],
  ['Kevin', 'Coppa', 'kcoppa@email.com', 'password', '10001', '9084450956'],
  ['Emily', 'Hansen', 'ehansen@email.com', 'password', '10001', '9080118568'],
  ['Oguzhan', 'Cakmak', 'ocakmak@email.com', 'password', '10001', '9081113465'],
  ['Patrick', 'Fulghum', 'pfulghum@email.com', 'password', '10001', '9089046244'],
  ['Carly', 'Lorenz', 'clorenz@email.com', 'password', '10001', '9085502848'],
  ['Benjamin', 'Berman', 'bberman@email.com', 'password', '10001', '9085502848'],
  ['Chao', 'Fan', 'cfan@email.com', 'password', '10001', '9085502848'],
  ['Chris', 'Lew', 'clew@email.com', 'password', '10001', '9085502848'],
  ['Daniel', 'Nam', 'dnam@email.com', 'password', '10001', '9085502848'],
  ['David', 'Webster', 'dwebster@email.com', 'password', '10001', '9085502848'],
  ['Drew', 'Nguyen', 'dnguyen@email.com', 'password', '10001', '9085502848'],
  ['Elliot', 'Grieco', 'egrieco@email.com', 'password', '10001', '9085502848'],
  ['Ethan', 'Schneider', 'escheinder@email.com', 'password', '10001', '9085502848'],
  ['George', 'Najm', 'gnajm@email.com', 'password', '10001', '9085502848'],
  ['Isaac', 'Seessel', 'iseessel@email.com', 'password', '10001', '9085502848'],
]

user_list.each do |fname, lname, email, password, zipcode, phone_num|
  User.create(fname: fname, lname: lname, email: email, password: password, zipcode: zipcode, phone_num: phone_num)
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
subjects = ['Math', 'Chemistry', 'Biology', 'English', 'History', 'Test Prep', 'Coding', 'Accounting', 'Physics']

subjects.each do |subject|
  Subject.create(title: subject)
end


tutors_for_hires = [
  [1, 1, 45, 50, true, true, false, "I have taught high school math for 11 years and have tutored math for 20 years. As a classroom teacher, I have taught Calculus, Algebra 1 and 2, Trigonometry, Number Theory, Geometry, SAT Prep, Problem Solving, Logic, Probability and Statistics, and Personal Finance. I have a Masters degree in Adolescent Math Education and have been a Master Teacher at Math for America for 6 years."],
  [1, 2, 28, 145, true, true, true, "I bring an effective teaching approach that focuses on test mastery and content comprehension to my students. I have been an educator for more than ten years and my passion for working with students started as a mentor for young children. I focus on developing strong working relationships with each child to understand the individual student’s needs and learning styles."],
  [1, 9, 39, 70, true, true, false, "I bring an effective teaching approach that focuses on test mastery and content comprehension to my students. I have been an educator for more than ten years and my passion for working with students started as a mentor for young children. I focus on developing strong working relationships with each child to understand the individual student’s needs and learning styles."],
  [2, 1, 27, 45, true, true, true, 'I love teaching math! My students always succeed.'],
  [3, 1, 45, 65, false, true, true, 'I am a certified teacher in Math and English, with 20 years of classroom teaching / tutoring experience.'],
  [4, 1, 80, 145, false, true, false, "Test taking has always been one of my strengths, particularly standardized tests. I tutored throughout college, worked for Kaplan for a year, and have been teaching on my own for several years. I know how important these tests are, and how big of an impact they can have on admissions decisions. That's why I like doing this - the ability to have an impact. Your success is important to me."],
  [5, 1, 62, 50, true, true, true, "I am a certified math teacher that LOVES math! My goal is to pass this love of math around to students thru remediation, coaching, homework help or anything else that may fit your child's mathematical needs. Over the past ten years I have worked with students in varying capacities from volunteering, tutoring, and teaching summer courses to full time teaching."],
  [6, 1, 58, 80, false, false, true, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [7, 8, 13, 70, true, true, false, "I am a certified math teacher that LOVES math! My goal is to pass this love of math around to students thru remediation, coaching, homework help or anything else that may fit your child's mathematical needs. Over the past ten years I have worked with students in varying capacities from volunteering, tutoring, and teaching summer courses to full time teaching."],
  [8, 9, 45, 100, true, true, true, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [9, 9, 84, 65, true, true, true, "For eight years, I've tutored 70+ students from 30+ schools (see the list below), while working as an economics and marketing researcher at HARVARD BUSINESS SCHOOL and MIT. I've also worked as a Financial Management Consultant at IBM Global Business Services."],
  [10, 2, 34, 145, true, true, true, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [11, 2, 48, 50, false, false, false, "I'm a graduate of Princeton University with a passion for teaching. I quite simply enjoy leading students through difficult course material and preparing them for standardized exams. I believe that learning is a ongoing process and that tutoring should make that process more manageable. My tutoring services mainly focus on test preparation. "],
  [12, 2, 69, 100, false, true, true, "For eight years, I've tutored 70+ students from 30+ schools (see the list below), while working as an economics and marketing researcher at HARVARD BUSINESS SCHOOL and MIT. I've also worked as a Financial Management Consultant at IBM Global Business Services."],
  [13, 2, 45, 70, false, false, false, "I have three Ivy League degrees, and I am a retired finance professor and Wall Street hedge fund manager. I have taught finance, economics, investments and business at the collegiate level. I bring both advanced teaching skills and real world career experience to motivate the learning process."],
  [14, 2, 34, 65, true, true, false, "Tutoring is not just a job to me – it is my passion. I chose this industry because I absolutely love working 1-on-1 with students. I connect and relate with each of my students, instill confidence in them, and teach them the skills to succeed. I am often the first person my students text when they receive their scores and admissions letters."],
  [15, 2, 69, 100, true, false, true, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [16, 3, 93, 50, true, true, true, "I have been working as a full time tutor in NYC since 2014, and I previously tutored part time and worked as a teacher's assistant for several years in college and high school. I currently have thousands of hours of total experience across all channels including experience with premier test prep agencies, individual students, groups, and full classes. "],
  [17, 3, 84, 145, false, false, false, "I have three Ivy League degrees, and I am a retired finance professor and Wall Street hedge fund manager. I have taught finance, economics, investments and business at the collegiate level. I bring both advanced teaching skills and real world career experience to motivate the learning process."],
  [18, 3, 48, 65, false, true, false, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [19, 3, 33, 70, true, true, false, "A successful test-taker is a prepared test-taker. As both a university instructor and a test prep tutor, I am devoted to helping students master the daunting process of standardized testing. I teach the very best strategies, tips and shortcuts for the SAT, GRE and GMAT. I want each of my students to have the clearest advantage on test day."],
  [20, 3, 34, 50, true, false, true, "I have three Ivy League degrees, and I am a retired finance professor and Wall Street hedge fund manager. I have taught finance, economics, investments and business at the collegiate level. I bring both advanced teaching skills and real world career experience to motivate the learning process."],
  [21, 3, 45, 100, true, true, false, "For eight years, I've tutored 70+ students from 30+ schools (see the list below), while working as an economics and marketing researcher at HARVARD BUSINESS SCHOOL and MIT. I've also worked as a Financial Management Consultant at IBM Global Business Services."],
  [22, 4, 84, 65, true, true, false, "Tutoring is not just a job to me – it is my passion. I chose this industry because I absolutely love working 1-on-1 with students. I connect and relate with each of my students, instill confidence in them, and teach them the skills to succeed. I am often the first person my students text when they receive their scores and admissions letters."],
  [23, 4, 69, 145, true, false, true, "I'm a graduate of Princeton University with a passion for teaching. I quite simply enjoy leading students through difficult course material and preparing them for standardized exams. I believe that learning is a ongoing process and that tutoring should make that process more manageable. My tutoring services mainly focus on test preparation. "],
  [24, 4, 93, 50, false, true, false, "I have taught high school math for 11 years and have tutored math for 20 years. As a classroom teacher, I have taught Calculus, Algebra 1 and 2, Trigonometry, Number Theory, Geometry, SAT Prep, Problem Solving, Logic, Probability and Statistics, and Personal Finance. I have a Masters degree in Adolescent Math Education and have been a Master Teacher at Math for America for 6 years."],
  [25, 4, 48, 70, false, true, false, "I have three Ivy League degrees, and I am a retired finance professor and Wall Street hedge fund manager. I have taught finance, economics, investments and business at the collegiate level. I bring both advanced teaching skills and real world career experience to motivate the learning process."],
  [26, 4, 34, 65, true, false, true, "Tutoring is not just a job to me – it is my passion. I chose this industry because I absolutely love working 1-on-1 with students. I connect and relate with each of my students, instill confidence in them, and teach them the skills to succeed. I am often the first person my students text when they receive their scores and admissions letters."],
  [27, 4, 45, 100, false, true, false, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [28, 5, 45, 50, true, true, false, "A successful test-taker is a prepared test-taker. As both a university instructor and a test prep tutor, I am devoted to helping students master the daunting process of standardized testing. I teach the very best strategies, tips and shortcuts for the SAT, GRE and GMAT. I want each of my students to have the clearest advantage on test day."],
  [29, 5, 93, 145, true, false, false, "Test taking has always been one of my strengths, particularly standardized tests. I tutored throughout college, worked for Kaplan for a year, and have been teaching on my own for several years. I know how important these tests are, and how big of an impact they can have on admissions decisions. That's why I like doing this - the ability to have an impact. Your success is important to me."],
  [30, 5, 84, 70, true, false, true, "I have been working as a full time tutor in NYC since 2014, and I previously tutored part time and worked as a teacher's assistant for several years in college and high school. I currently have thousands of hours of total experience across all channels including experience with premier test prep agencies, individual students, groups, and full classes. "],
  [31, 5, 48, 65, true, false, false, "I have taught high school math for 11 years and have tutored math for 20 years. As a classroom teacher, I have taught Calculus, Algebra 1 and 2, Trigonometry, Number Theory, Geometry, SAT Prep, Problem Solving, Logic, Probability and Statistics, and Personal Finance. I have a Masters degree in Adolescent Math Education and have been a Master Teacher at Math for America for 6 years."],
  [32, 5, 34, 145, false, true, false, "For eight years, I've tutored 70+ students from 30+ schools (see the list below), while working as an economics and marketing researcher at HARVARD BUSINESS SCHOOL and MIT. I've also worked as a Financial Management Consultant at IBM Global Business Services."],
  [33, 5, 69, 50, false, true, true, "A successful test-taker is a prepared test-taker. As both a university instructor and a test prep tutor, I am devoted to helping students master the daunting process of standardized testing. I teach the very best strategies, tips and shortcuts for the SAT, GRE and GMAT. I want each of my students to have the clearest advantage on test day."],
  [34, 5, 33, 100, true, true, false, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [35, 6, 84, 70, false, true, false, "I'm a graduate of Princeton University with a passion for teaching. I quite simply enjoy leading students through difficult course material and preparing them for standardized exams. I believe that learning is a ongoing process and that tutoring should make that process more manageable. My tutoring services mainly focus on test preparation. "],
  [36, 6, 93, 145, true, false, false, "I'm a graduate of Princeton University with a passion for teaching. I quite simply enjoy leading students through difficult course material and preparing them for standardized exams. I believe that learning is a ongoing process and that tutoring should make that process more manageable. My tutoring services mainly focus on test preparation. "],
  [37, 6, 48, 100, false, true, true, "I have three Ivy League degrees, and I am a retired finance professor and Wall Street hedge fund manager. I have taught finance, economics, investments and business at the collegiate level. I bring both advanced teaching skills and real world career experience to motivate the learning process."],
  [38, 6, 34, 65, true, true, false, "I'm a graduate of Princeton University with a passion for teaching. I quite simply enjoy leading students through difficult course material and preparing them for standardized exams. I believe that learning is a ongoing process and that tutoring should make that process more manageable. My tutoring services mainly focus on test preparation. "],
  [39, 6, 45, 100, true, false, false, "Test taking has always been one of my strengths, particularly standardized tests. I tutored throughout college, worked for Kaplan for a year, and have been teaching on my own for several years. I know how important these tests are, and how big of an impact they can have on admissions decisions. That's why I like doing this - the ability to have an impact. Your success is important to me."],
  [40, 7, 69, 70, false, true, true, "Tutoring is not just a job to me – it is my passion. I chose this industry because I absolutely love working 1-on-1 with students. I connect and relate with each of my students, instill confidence in them, and teach them the skills to succeed. I am often the first person my students text when they receive their scores and admissions letters."],
  [41, 7, 48, 100, true, false, true, "Tutoring is not just a job to me – it is my passion. I chose this industry because I absolutely love working 1-on-1 with students. I connect and relate with each of my students, instill confidence in them, and teach them the skills to succeed. I am often the first person my students text when they receive their scores and admissions letters."],
  [42, 7, 84, 145, true, true, true, "I have three Ivy League degrees, and I am a retired finance professor and Wall Street hedge fund manager. I have taught finance, economics, investments and business at the collegiate level. I bring both advanced teaching skills and real world career experience to motivate the learning process."],
  [43, 7, 45, 100, true, false, false, "I have been working as a full time tutor in NYC since 2014, and I previously tutored part time and worked as a teacher's assistant for several years in college and high school. I currently have thousands of hours of total experience across all channels including experience with premier test prep agencies, individual students, groups, and full classes. "],
  [44, 8, 69, 50, false, true, false, "I've been a tutor for the past 7 years, helping people overcome their difficulties with math and physics. My tutoring philosophy is based on the idea above: my job as a tutor is to help you understand how math works, making you able to do any problem yourself!"],
  [45, 8, 93, 100, true, true, true, "I have three Ivy League degrees, and I am a retired finance professor and Wall Street hedge fund manager. I have taught finance, economics, investments and business at the collegiate level. I bring both advanced teaching skills and real world career experience to motivate the learning process."],
]

tutors_for_hires.each do |user_id, subject_id, num_completed, rate, first_tier, second_tier, third_tier, description|
  TutorsForHire.create!(user_id: user_id, subject_id: subject_id, num_completed: num_completed, rate: rate, first_tier: first_tier, second_tier: second_tier, third_tier: third_tier, description: description)
end
