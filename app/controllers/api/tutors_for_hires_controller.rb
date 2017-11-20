class Api::TutorsForHiresController < ApplicationController

  def index
    @tutors = Subject.find(params[:subject_id]).tutors_for_hire.select { |tutor| tutor[params[:ed_lvl]]}
    @tutors.map! do |tutor|
      user = User.find(tutor.user_id)
      {
        user: user,
        rate: tutor.rate,
        num_completed: tutor.num_completed,
        description: tutor.description,
        times: user.times.map { |time| time[:time] }
      }
    end
    render :index
  end

  def create
    tutor = TutorsForHire.where({user_id: params[:user_id], subject_id: params[:subject_id]})
    if tutor.length > 0
      render json: ["You already have signed up to be a tutor for that Subject. To edit, go to your Account page"], status: 401
    else
      @tutor = TutorsForHire.create!(tutorParams)
    end
  end

  def show
  end

  def tutorParams
    params.permit(:user_id, :subject_id, :rate, :description, :first_tier, :second_tier, :third_tier)
  end

end
