class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :photo_url
      t.integer :listing_id
      t.integer :photo_arrange_order

      t.timestamps null: false
    end
  end
end
