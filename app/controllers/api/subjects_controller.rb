class Api::SubjectsController < ApplicationController
  def index
    @subjects = Subject.all
  end

  def create

  end

  def show
  end

  private

end
