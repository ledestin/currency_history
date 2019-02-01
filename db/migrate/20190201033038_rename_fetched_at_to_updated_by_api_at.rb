class RenameFetchedAtToUpdatedByApiAt < ActiveRecord::Migration[5.2]
  def change
    rename_column :rates, :fetched_at, :updated_by_api_at
  end
end
