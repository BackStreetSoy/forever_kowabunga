class CreateWritings < ActiveRecord::Migration
  def change
    create_table :writings do |t|
      t.string :title
      t.string :content
      t.string :image

      t.timestamps null: false
    end
  end
end
