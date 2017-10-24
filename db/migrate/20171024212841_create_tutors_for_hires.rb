class CreateTutorsForHires < ActiveRecord::Migration[5.1]
  def change
    create_table :tutors_for_hires do |t|
      t.integer :user_id, null: false
      t.integer :subject_id, null: false
      t.integer :num_completed, null: false, default: 0
      t.integer :level, null: false
      t.integer :rate, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
