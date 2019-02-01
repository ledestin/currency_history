class HistoryController < ApplicationController
  def index
    latest_rates = Rate.order(:updated_by_api_at).limit(24)
    @usd_to_brl_series = assemble_highchart_sseries(latest_rates, "USDBRL")
    @eur_to_brl_series = assemble_highchart_sseries(latest_rates, "EURBRL")
    @aud_to_brl_series = assemble_highchart_sseries(latest_rates, "AUDBRL")
  end

  private

  def assemble_highchart_sseries(rates, series_name)
    rates.map do |rate|
      [rate.updated_by_api_at.to_i * 1000, rate.brl_rates[series_name]]
    end
  end
end
