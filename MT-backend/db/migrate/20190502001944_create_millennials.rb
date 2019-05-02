class CreateMillennials < ActiveRecord::Migration[5.2]
  def change
    create_table :millennials do |t|
      t.integer :user_id
      t.string :name
      t.integer :thirst
      t.string :avatar

      t.timestamps
    end
  end
end
