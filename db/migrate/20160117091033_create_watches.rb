class CreateWatches < ActiveRecord::Migration
  def change
    create_table :watches do |t|
      t.integer :watcher
      t.integer :watched_list
      t.datetime :watched_date

      t.timestamps null: false
    end
  end
end
