class AddAutoMakerLogoColumn < ActiveRecord::Migration
  def change
    add_column :auto_makers , :logo, :string
  end
end
