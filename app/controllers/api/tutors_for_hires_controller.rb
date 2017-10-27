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

  def show
  end



end
