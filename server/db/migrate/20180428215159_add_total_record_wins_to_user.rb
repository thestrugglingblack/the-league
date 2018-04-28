class AddTotalRecordWinsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :total_record_wins, :string
  end
end
