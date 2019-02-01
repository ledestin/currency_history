class Rate < ApplicationRecord
  before_save :assign_brl_rates

  private

  def assign_brl_rates
    self.brl_rates = convert_rates_to_brl
  end

  def convert_rates_to_brl
    usd_to_brl_rate = api_rates[:USDBRL]
    {
      USDBRL: usd_to_brl_rate,
      EURBRL: usd_rate_to_brl_rate(api_rates[:USDEUR], usd_to_brl_rate),
      AUDBRL: usd_rate_to_brl_rate(api_rates[:USDAUD], usd_to_brl_rate)
    }
  end

  def api_rates
    api_response.with_indifferent_access[:quotes]
  end

  def usd_rate_to_brl_rate(rate, usd_to_brl_rate)
    ((1 / rate) * usd_to_brl_rate).round(6)
  end

end
