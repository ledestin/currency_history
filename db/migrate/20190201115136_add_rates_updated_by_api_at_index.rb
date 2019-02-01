class AddRatesUpdatedByApiAtIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :rates, :updated_by_api_at
  end
end
