class Api::HiredTutorsController < ApplicationController

  def index
    @bookings = User.find(params[:user_id]).hired_tutors

    render :index
  end

  def show
  end

  def create
    @booking = HiredTutor.create!(booking_params)
  end

  def update
    @booking = HiredTutor.find(params[:booking_id])
    @booking.update({ completed: true })
  end

  def booking_params
    params.permit(:user_id, :tutor_id, :subject_id, :rate, :description, :date, :time_period, :location)
  end

end
