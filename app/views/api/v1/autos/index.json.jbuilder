json.array! @auto_maker do |make|
  json.id make.id
  json.make_name make.name
  json.make_description make.description  
  json.logo make.logo
    json.auto_details do
      json.auto_models make.auto_models.each do |model|
        json.id model.id
        json.model_name model.name
      end
    end
end