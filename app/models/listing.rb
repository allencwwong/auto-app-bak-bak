class Listing < ActiveRecord::Base
  has_many :photos
  belongs_to :users
  has_many :watches
  has_many :watchers, :through => :watches 
end
