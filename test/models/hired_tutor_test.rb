# == Schema Information
#
# Table name: hired_tutors
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  tutor_id    :integer          not null
#  subject_id  :integer          not null
#  rate        :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  date        :string
#  time_period :string
#  location    :string
#  completed   :boolean          default(FALSE)
#

require 'test_helper'

class HiredTutorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
