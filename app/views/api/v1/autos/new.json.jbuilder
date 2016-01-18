json.array! @auto_maker do |make|
 

      json.array! make.auto_models.each do |model|
        json.id model.id
        json.make_name make.name
        json.model_name model.name
      end
    end
