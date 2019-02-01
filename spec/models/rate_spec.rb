require 'rails_helper'

RSpec.describe Rate, type: :model do
  include_context "stubbed api"

  let(:rate) { create(:rate, api_response: api_result) }

  it "prepares rates as what 1 unit is in BRL" do
    expect(rate.brl_rates).to eq({
      USDBRL: 3.68565,
      EURBRL: 4.240059,
      AUDBRL: 2.681926
    }.stringify_keys)
  end
end
