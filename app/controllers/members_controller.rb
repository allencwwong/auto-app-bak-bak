class MembersController < ApplicationController
  def index
    if(current_user)


      @listings = User.find(current_user.id).listings
      @list_count = @listings.count

      user_searches = User.find(current_user.id).searches

      @search_model = [];
      @search_make = []
      @search_year = [];

      user_searches.each do |search|
        if search.search_make
          search_1 = search.search_make.gsub(/[""]/,'')
          search_2 = search_1.gsub(/"|\[|\]/, '')
          @search_make << search_2.to_s

        end
      end

      user_searches.each do |search|
        search_1 = search.search_model.gsub(/[""]/,'')
        search_2 = search_1.gsub(/"|\[|\]/, '')
        @search_model << search_2.to_s

      end    

      user_searches.each do |search|
        if search.search_year
          search_1 = search.search_year.gsub(/[""]/,'')
          search_2 = search_1.gsub(/"|\[|\]/, '')
          @search_year << search_2.to_s
        end  
      end

      @search_results = []


   
    @search_model.each_with_index do |item,index|
        new_hash = {}
        new_hash[:make] = @search_make[index]
        new_hash[:model] = @search_model[index]
        new_hash[:year] = @search_year[index]
        @search_results.push(new_hash)
    end



    else redirect_to '/'
     end 
  
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
