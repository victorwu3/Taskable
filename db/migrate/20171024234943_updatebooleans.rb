class Updatebooleans < ActiveRecord::Migration[5.1]
  def change
    remove_column :tutors_for_hires, :first_tier, :boolean
    remove_column :tutors_for_hires, :second_tier, :boolean
    remove_column :tutors_for_hires, :third_tier, :boolean
    add_column :tutors_for_hires, :first_tier, :boolean, null: false
    add_column :tutors_for_hires, :second_tier, :boolean, null: false
    add_column :tutors_for_hires, :third_tier, :boolean, null: false
  end
end
