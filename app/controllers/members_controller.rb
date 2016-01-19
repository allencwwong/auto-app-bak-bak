class MembersController < ApplicationController
  def index
    @listings = User.find_by(id: current_user.id).listings
  end

  def show
  end

  def new
  
  end

  def create

  end

  def edit
  end

  def update
  end

  def destroy
  end
end
