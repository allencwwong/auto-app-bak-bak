class AddYearToListing < ActiveRecord::Migration
  def change
    add_column :listings,:year,:integer 
  end
end
