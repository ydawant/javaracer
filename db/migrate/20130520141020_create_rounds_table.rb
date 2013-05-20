class CreateRoundsTable < ActiveRecord::Migration
  def change
      create_table :rounds do |t|
      t.integer    :game_id
      t.integer    :player_id
      t.boolean    :win
      t.string     :time 
      t.timestamps
    end
  end
end
