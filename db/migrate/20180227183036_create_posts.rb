class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :author
      t.string :picture
      t.text :body
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
