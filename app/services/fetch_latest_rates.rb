module FetchLatestRates
  SECRET_API_KEY = ENV["APILAYER_SECRET_KEY"]
  LATEST_RATES_URL =
    "http://www.apilayer.net/api/live?access_key=#{SECRET_API_KEY}&currencies=USD,EUR,AUD,BRL"

  def self.call
    json = Faraday.get(LATEST_RATES_URL).body
    JSON.parse json
  end
end
