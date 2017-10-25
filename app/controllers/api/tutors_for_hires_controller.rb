class TutorsForHiresController < SubjectsController

  def index
    @tutors = Subject.find(params[:subject_id]).tutors_for_hires
  end

  def show
  end



end
