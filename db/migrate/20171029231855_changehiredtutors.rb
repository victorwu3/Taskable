class Changehiredtutors < ActiveRecord::Migration[5.1]
  def change
    remove_column :hired_tutors, :date
    remove_column :hired_tutors, :time_period
    add_column :hired_tutors, :date, :string
    add_column :hired_tutors, :time_period, :string
  end
end
