class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.integer :user_id
      t.string :search_model
      t.integer :search_year

      t.timestamps null: false
    end
  end
end
