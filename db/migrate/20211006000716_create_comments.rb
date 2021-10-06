class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :sneaker, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
