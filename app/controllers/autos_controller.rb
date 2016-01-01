class AutosController < ApplicationController
  def index
    @listings = Listing.all
    @all_coordinates = []
    @all_titles = []    
    @listings.each do |listing|

      @all_titles << "#{listing.auto_maker} #{listing.auto_model}"
      # @all_zip_code = @all_zip_code
      coordinates = Geocoder.coordinates(listing.zip_code)
      @all_coordinates << coordinates

      # lat = coordinates[0]
      # lng = coordinates[1]
      # listing.update(lat: lat, lng: lng)
    end
  end


  # def map_corrdinates
  #   @listings = Listing.all
  #   @listings.each do |listing|
  #     coordinates = Geocoder.coordinates(listing.zip_code)
  #     lat = coordinates[0]
  #     lng = coordinates[1]
  #     listing.update(lat: lat, lng: lng)
  #   end
  # end

end
