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
  validates :user_id, :tutor_id, :subject_id, :date,
    :time_period, :rate, :completed, :description,
    presence: true

  belongs_to :subject
  belongs_to :user
  belongs_to :tutor,
    foreign_key: 'tutor_id',
    class_name: 'User'

end
