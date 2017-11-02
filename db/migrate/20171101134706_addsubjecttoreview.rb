class Addsubjecttoreview < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :subject_id, :integer
    add_column :reviews, :author_id, :integer
  end
end
