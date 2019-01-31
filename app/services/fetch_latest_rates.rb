module FetchLatestRates
  SECRET_API_KEY = ENV["APILAYER_SECRET_KEY"]

  def self.call
    json = Faraday.get("http://www.apilayer.net/api/live?access_key=#{SECRET_API_KEY}&currencies=USD,EUR,AUD,BRL").body
    JSON.parse json
  end
end
