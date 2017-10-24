class CreateHiredTutors < ActiveRecord::Migration[5.1]
  def change
    create_table :hired_tutors do |t|
      t.integer :user_id, null: false
      t.integer :tutor_id, null: false
      t.integer :subject_id, null: false
      t.date :date, null: false
      t.integer :time_period, null: false
      t.integer :rate, null: false
      t.boolean :completed, null: false, default: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :hired_tutors, :user_id
  end
end
