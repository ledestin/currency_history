require "rails_helper"

describe FetchLatestRates do
  include_context "stubbed api"

  it "fetches the latest rates" do
    result = described_class.call
    expect(result).to eq api_result
  end
end
