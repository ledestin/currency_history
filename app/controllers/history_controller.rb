class HistoryController < ApplicationController
  def index
    latest_rates = Rate.order(:updated_by_api_at).limit(24)
    @usd_to_brl_series = latest_rates.map do |rate|
      [rate.updated_by_api_at.to_i * 1000, rate.brl_rates["USDBRL"]]
    end
  end
end
