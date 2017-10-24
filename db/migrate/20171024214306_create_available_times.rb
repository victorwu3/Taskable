class CreateAvailableTimes < ActiveRecord::Migration[5.1]
  def change
    create_table :available_times do |t|
      t.integer :user_id, null: false
      t.integer :time_avl, null: false

      t.timestamps
    end
    add_index :available_times, :user_id
  end
end
