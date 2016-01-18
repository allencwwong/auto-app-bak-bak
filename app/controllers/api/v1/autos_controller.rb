class Api::V1::AutosController < ApplicationController
  def index
    @auto_maker = AutoMaker.includes(:auto_models)
  end

  def new
    @auto_maker = AutoMaker.includes(:auto_models)
  end

  def create
    @listing = Listing.new(auto_maker: params[:auto_maker], auto_model: params[:auto_model],zip_code: params[:zip_code],address: params[:address],city: params[:city],state: params[:state])
    if @listing.save
      render json: @listing
    end
  end

end
