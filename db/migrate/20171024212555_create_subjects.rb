class CreateSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :subjects do |t|
      t.string :title, null: false

      t.timestamps
    end
    add_index :subjects, :title
  end
end
