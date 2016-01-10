class Api::V1::AutosController < ApplicationController
  def index
    @auto_maker = AutoMaker.all
  end
end
