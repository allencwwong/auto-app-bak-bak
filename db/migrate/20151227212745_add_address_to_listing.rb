class AddAddressToListing < ActiveRecord::Migration
  def change
    add_column :listings, :zip_code, :string  
    add_column :listings, :address, :string       
  end
end
