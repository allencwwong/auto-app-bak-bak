class AutosController < ApplicationController
  def index
    @listings = Listing.all
  end

end
