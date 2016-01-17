class AddListingDetails < ActiveRecord::Migration
  def change
    add_column :listings, :vin,  :string
    add_column :listings, :odometer, :integer
    add_column :listings, :condition, :string
    add_column :listings, :engine, :string
    add_column :listings, :drive, :string
    add_column :listings, :fuel, :string
    add_column :listings, :mpg, :integer 
    add_column :listings, :interior_color, :string
    add_column :listings, :exterior_color, :string
    add_column :listings, :title, :string
    add_column :listings, :transmission, :string
    add_column :listings, :style, :string
    add_column :listings, :package, :string
    add_column :listings, :doors, :integer
    add_column :listings, :features, :string
    add_column :listings, :option, :string
  end
end
