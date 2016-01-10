class AddNewColToPhoto < ActiveRecord::Migration
  def change
    add_column :photos , :photo_main_display, :boolean
  end
end
