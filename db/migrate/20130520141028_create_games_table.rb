class CreateGamesTable < ActiveRecord::Migration
  def change
      create_table :games do |t|
      t.string    :unique_url
      t.timestamps
    end
  end
end
