# == Schema Information
#
# Table name: available_times
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  time_avl   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AvailableTime < ApplicationRecord
  validates :user_id, :time_avl, presence: true

  belongs_to :user
  belongs_to :time,
    foreign_key: 'time_avl',
    class_name: 'TimeOfDay'
end
