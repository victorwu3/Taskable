# == Schema Information
#
# Table name: tutors_for_hires
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  subject_id    :integer          not null
#  num_completed :integer          default(0), not null
#  rate          :integer          not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  first_tier    :boolean          not null
#  second_tier   :boolean          not null
#  third_tier    :boolean          not null
#

class TutorsForHire < ApplicationRecord
  validates :user_id, :subject_id, :num_completed, :rate, :description, presence: true
  validates_inclusion_of :first_tier, :second_tier, :third_tier, in: [true, false]
  belongs_to :user
  belongs_to :subject

end
