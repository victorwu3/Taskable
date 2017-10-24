class Changenames < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :name, :string
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
  end
end
