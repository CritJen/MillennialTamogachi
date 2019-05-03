class CreateMillennials < ActiveRecord::Migration[5.2]
  def change
    create_table :millennials do |t|
      t.references :user, foreign_key: true
      t.string :name
      t.integer :thirst
      t.integer :avatar

      t.timestamps
    end
  end
end
