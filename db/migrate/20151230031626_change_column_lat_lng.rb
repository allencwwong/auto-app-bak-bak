class ChangeColumnLatLng < ActiveRecord::Migration
  def change
    change_column :listings,:lat,:float
    change_column :listings,:lng,:float    
  end
end
