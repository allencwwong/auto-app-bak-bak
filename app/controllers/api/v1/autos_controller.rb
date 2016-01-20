class Api::V1::AutosController < ApplicationController
  def index
    @auto_maker = AutoMaker.includes(:auto_models)
  end

  def new
    @auto_maker = AutoMaker.includes(:auto_models)
  end

  def create
    #number of owners 

    @listing = Listing.new(
    user_id: params[:id],  
    auto_maker: params[:auto_maker], 
    auto_model: params[:auto_model],
    zip_code: params[:zip_code],
    address: params[:address],
    city: params[:city],
    state: params[:state],
    engine: params[:engine],
    year: params[:year],
    vin: params[:vin],
    odometer: params[:odometer],
    condition: params[:condition],
    engine: params[:engine],
    drive: params[:drive],
    fuel: params[:fuel],
    mpg: params[:mpg],
    interior_color: params[:interior_color],
    exterior_color: params[:exterior_color],
    title: params[:title],
    transmission: params[:transmission],
    style: params[:style],
    package: params[:packages],
    doors: params[:doors],
    features: params[:features],
    option: params[:options]
    )

    if @listing.save
      render json: @listing
    end
  end



  def search
    
    #puts models = params[:details][0][:model]



    details = params[:details]
    years = params[:years]
    all_models = []
    all_makes = []
    user = params[:id]



    #process search params 
    details.each do |detail|
      if detail["model"].length > 1
        detail["model"].each do |model|
          all_models << model    
        end # end do
      else
        all_models << detail["model"]  
      end # end if

      all_makes << detail["make"]
    end # end of do  


    #save search history
    if (user["id"])
      search = Search.new(
        user_id: user["id"],
        search_make: all_makes,
        search_model: all_models, 
        search_year: years 
        )
    else
      search = Search.new(
        user_id: 0,
        search_make: all_makes,
        search_model: all_models, 
        search_year: years 
        )      
    end

    if search.save
      puts "saved!"
    end

    returned_models = []
    year_specific_models = []
      years.each do |year|
    all_models.each do |model|
        returned_models << Listing.where("auto_model = ? AND year = ?", model, year)
      end
    end
    render json: returned_models
  end

end





