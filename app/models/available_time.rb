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
end
