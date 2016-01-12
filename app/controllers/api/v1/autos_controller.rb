class Api::V1::AutosController < ApplicationController
  def index
    @auto_maker = AutoMaker.includes(:auto_models)
  end
end
