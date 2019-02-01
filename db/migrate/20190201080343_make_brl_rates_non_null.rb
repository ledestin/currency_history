class MakeBrlRatesNonNull < ActiveRecord::Migration[5.2]
  def change
    change_column :rates, :brl_rates, :jsonb, null: false
  end
end
