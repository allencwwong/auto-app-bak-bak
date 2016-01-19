class AddSearchMakeChangeYearClass < ActiveRecord::Migration
  def change
    change_column :searches,:search_year,:string
    add_column :searches,:search_make,:string
  end
end
