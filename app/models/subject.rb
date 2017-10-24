# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :tutors_for_hire,
    foreign_key: "subject_id",
    class_name: 'TutorsForHire'


end
