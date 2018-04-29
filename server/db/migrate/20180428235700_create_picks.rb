class CreatePicks < ActiveRecord::Migration[5.1]
  def change
    create_table :picks do |t|
      t.text :teams_chose
      t.string :week_number
      t.string :season_year
      t.string :final_game_score

      t.timestamps
    end
  end
end
