require 'rails_helper'

RSpec.describe Search, type: :model do
  it "creates a new search record" do
    search = Search.create(query: "Test Query", ip_address: "127.0.0.1")
    expect(search).to be_valid
  end

  it "requires a query" do
    search = Search.new(ip_address: "127.0.0.1")
    expect(search).not_to be_valid
  end
end
