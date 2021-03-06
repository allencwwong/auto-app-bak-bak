class AutosController < ApplicationController
  def index
    @listings = Listing.all
    @photos = Photo.all
    @listing_coordinates = []
    @listing_titles = []
    @listing_lat = []
    @listing_lng = []
    @listing_photos_url = []
    @listing_details = []
    @listing_ids = []

    @map_api = ENV['MAP_API_KEY']
    
####### SETUP GOOGLE MAP ########## 

    @listings.each do |listing|

      id = listing.id
      @listing_ids << listing.id

      @listing_titles << "#{listing.auto_maker} #{listing.auto_model}"

      @listing_details << listing.zip_code

      # Setup Coordinates 
       #coordinates = Geocoder.coordinates("#{listing.address} #{listing.zip_code}")
       #@listing_coordinates << coordinates

      # #Set lat and lng arrary 
       @listing_lat << listing.lat
       @listing_lng << listing.lng

      #listing.update(lat: coordinates[0] , lng: coordinates[1])

    #Display main image for listing  
    @listings.find_by(id: id).photos.each do |photo|
      if photo.photo_main_display
        @listing_photos_url << photo.photo_url
      end
    end

    end

  end #end of index

  def new 

  end

  def search 
    @auto_maker_names = []

    @auto_makers = AutoMaker.all
    @auto_makers.each do |make|
      @auto_maker_names << make.name
    end
  end

  def searchNew
    @auto_maker_names = []
         @user = current_user.id
    @auto_makers = AutoMaker.all
    @auto_makers.each do |make|
      @auto_maker_names << make.name
    end    
  end

  def show
    @listing = Listing.find(params[:id])
  end
  
  def make_model_association
    @makes = CarMaker.all
  end

  def searchResults
    @testing = 10000
    puts "====== TESTING ======="
  end



end # end of class
