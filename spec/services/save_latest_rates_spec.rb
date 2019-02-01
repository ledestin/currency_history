require "rails_helper"

describe SaveLatestRates do
  include_context "stubbed api"

  let(:rate) { Rate.first }
  let(:updated_by_api_at) { '2019-01-31 08:29:06.000000000 +0000' }

  it "saves latest rates in db" do
    described_class.call

    expect(Rate.count).to eq 1
    expect(rate.api_response).to eq api_result
    expect(rate.updated_by_api_at).to eq updated_by_api_at
  end
end
