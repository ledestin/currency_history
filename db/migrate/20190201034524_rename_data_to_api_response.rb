class RenameDataToApiResponse < ActiveRecord::Migration[5.2]
  def change
    rename_column :rates, :data, :api_response
  end
end
