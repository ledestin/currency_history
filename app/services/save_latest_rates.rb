module SaveLatestRates
  def self.call
    rates = FetchLatestRates.call
    Rate.create! data: rates, fetched_at: rates_created_at(rates)
  end

  def self.rates_created_at(rates)
    Time.at rates[:timestamp]
  end
end
