class CreateGameWeeks < ActiveRecord::Migration[5.1]
  def change
    create_table :game_weeks do |t|
      t.text :teams[]
      t.string :season_year
      t.string :week_number

      t.timestamps
    end
  end
end
