require "rails_helper"

describe SaveLatestRates do
  include_context "stubbed api"

  let(:rate) { Rate.first }
  let(:fetched_at) { '2019-01-31 08:29:06.000000000 +0000' }

  it "saves latest rates in db" do
    described_class.call

    expect(Rate.count).to eq 1
    expect(rate.data).to eq api_result.with_indifferent_access
    expect(rate.fetched_at).to eq fetched_at
  end
end
