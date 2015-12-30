class AddLatLngToListings < ActiveRecord::Migration
  def change
    add_column :listings , :lat , :integer 
    add_column :listings, :lng, :integer
  end
end
