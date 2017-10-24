class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :zipcode, null: false
      t.string :password_digest, null: false
      t.string :phone_num, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :name
    add_index :users, :email
    add_index :users, :session_token
  end
end
