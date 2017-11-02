class Api::ReviewsController < ApplicationController

  def index

  end

  def show
  end

  def create
    @review = Review.create!(review_params)
  end

  def review_params
    params.permit(:user_id, :author_id, :subject_id, :body, :positive)
  end

end
