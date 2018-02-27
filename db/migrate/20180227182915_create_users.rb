class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :f_name
      t.string :l_name
      t.string :email
      t.string :profile_pic
      t.string :user_name

      t.timestamps
    end
  end
end
