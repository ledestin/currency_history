shared_context 'stubbed api' do
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
    }.with_indifferent_access
  end

  before do
    stub_request(:get, FetchLatestRates::LATEST_RATES_URL)
      .to_return(status: 200, headers: {}, body: api_result.to_json)
  end
end
