class AddStatusUserIdToListing < ActiveRecord::Migration
  def change
    add_column :listings,:status,:string
    add_column :listings,:user_id,:string
  end
end
