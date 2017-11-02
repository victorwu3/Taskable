# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  positive   :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer
#  subject_id :integer
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
