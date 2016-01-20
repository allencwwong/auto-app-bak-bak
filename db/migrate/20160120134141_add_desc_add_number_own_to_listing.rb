class AddDescAddNumberOwnToListing < ActiveRecord::Migration
  def change
    add_column :listings,:number_owned,:string
    add_column :listings,:description,:text
  end
end
