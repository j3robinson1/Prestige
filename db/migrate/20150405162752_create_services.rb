class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.text :request
      t.text :email

      t.timestamps null: false
    end
  end
end
