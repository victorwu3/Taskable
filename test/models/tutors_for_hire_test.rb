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

require 'test_helper'

class TutorsForHireTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
