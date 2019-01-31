class CreateRates < ActiveRecord::Migration[5.2]
  def change
    create_table :rates do |t|
      t.jsonb :data, null: false
      t.timestamp :fetched_at, null: false

      t.timestamps
    end
  end
end
