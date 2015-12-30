class AutosController < ApplicationController
  def index
    @listings = Listing.all
    @listings.each do |listing|
      zip_code = listing.zip
      geocoded_by :zip_code
      listing.update(lat: zip_code)
    end
  end

end
