module SaveLatestRates
  def self.call
    rates = FetchLatestRates.call
    Rate.create! api_response: rates, updated_by_api_at: rates_updated_by_api_at(rates)
  end

  def self.rates_updated_by_api_at(rates)
    Time.at rates["timestamp"]
  end
end
