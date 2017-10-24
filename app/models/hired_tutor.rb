# == Schema Information
#
# Table name: hired_tutors
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  tutor_id    :integer          not null
#  subject_id  :integer          not null
#  date        :date             not null
#  time_period :integer          not null
#  rate        :integer          not null
#  completed   :boolean          default(FALSE), not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class HiredTutor < ApplicationRecord
end
