class Watch < ActiveRecord::Base
  belongs_to :watcher, :class_name => 'User', :foreign_key => "watcher"
  belongs_to :watched_listing, :class_name => 'Listing', :foreign_key => "watched_list"
end
