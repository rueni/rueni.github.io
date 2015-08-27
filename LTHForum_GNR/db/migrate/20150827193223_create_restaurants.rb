class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :title
      t.text :description
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.bigint :phone_number
      t.text :notes
      t.date :date_added
      t.string :website
      t.string :lth_review

      t.timestamps null: false
    end
  end
end
