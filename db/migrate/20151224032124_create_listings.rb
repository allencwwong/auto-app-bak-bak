class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :AutoMaker
      t.string :AutoName

      t.timestamps null: false
    end
  end
end
