require "rails_helper"

describe FetchLatestRates do
  let(:api_result) do
    {
      success: true,
      terms: "https://currencylayer.com/terms",
      privacy: "https://currencylayer.com/privacy",
      timestamp: 1548923346,
      source: "USD",
      quotes: {
        USDUSD: 1,
        USDEUR: 0.869245,
        USDAUD: 1.374255,
        USDBRL: 3.68565
      }
    }
  end

  before do
    allow_any_instance_of(Faraday::Connection).to receive(:get)
      .and_return(api_result)
  end

  it "fetches the latest rates" do
    result = described_class.call
    expect(result).to eq api_result
  end
end
