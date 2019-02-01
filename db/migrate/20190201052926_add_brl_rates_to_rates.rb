class AddBrlRatesToRates < ActiveRecord::Migration[5.2]
  def change
    add_column :rates, :brl_rates, :jsonb
  end
end
