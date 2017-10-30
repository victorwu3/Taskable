class AddDefaultCompleted < ActiveRecord::Migration[5.1]
  def change
    remove_column :hired_tutors, :completed
    add_column :hired_tutors, :completed, :boolean, default: false
  end
end
