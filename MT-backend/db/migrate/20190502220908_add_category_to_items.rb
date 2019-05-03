class AddCategoryToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :category, :string
  end
end
