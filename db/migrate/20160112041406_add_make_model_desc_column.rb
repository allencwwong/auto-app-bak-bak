class AddMakeModelDescColumn < ActiveRecord::Migration
  def change
    add_column :auto_makers, :description, :text
    add_column :auto_models, :description, :text
  end
end
