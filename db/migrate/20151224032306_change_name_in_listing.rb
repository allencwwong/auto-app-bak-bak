class ChangeNameInListing < ActiveRecord::Migration
  def change
    rename_column :listings, :AutoName, :auto_model    
  end
end
