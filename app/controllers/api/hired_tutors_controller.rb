class Api::HiredTutorsController < ApplicationController

  def index
    debugger
    @bookings = User.find(params[:user_id]).hired_tutors
    debugger

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
