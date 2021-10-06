class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.references :user_id, null: false, foreign_key: true
      t.string :brand
      t.string :name
      t.text :description
      t.integer :price
      t.string :size
      t.string :image

      t.timestamps
    end
  end
end
