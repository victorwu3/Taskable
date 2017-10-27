class CreateTimeOfDays < ActiveRecord::Migration[5.1]
  def change
    create_table :time_of_days do |t|
      t.integer :time, null: false
      t.timestamps
    end
    add_index :time_of_days, :time
  end
end
