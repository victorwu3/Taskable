class Api::HiredTutorsController < ApplicationController

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

  def show
  end

  def create
    @booking = HiredTutor.create!(booking_params)
    debugger
  end

  def booking_params
    params.permit(:user_id, :tutor_id, :subject_id, :rate, :description, :date, :time_period, :location)
  end

end
