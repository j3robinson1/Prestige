class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.string :name
      t.string :service
      t.datetime :starts_at

      t.timestamps null: false
    end
  end
end
