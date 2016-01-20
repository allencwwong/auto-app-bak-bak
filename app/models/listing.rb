class Listing < ActiveRecord::Base
  has_many :photos
  belongs_to :user
  has_many :watches
  has_many :watchers, :through => :watches 
end
