class EditHiredtutor < ActiveRecord::Migration[5.1]
  def change
    remove_column :hired_tutors, :completed
    add_column :hired_tutors, :completed, :boolean
    add_column :hired_tutors, :location, :string
  end
end
