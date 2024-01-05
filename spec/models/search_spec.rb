# spec/models/search_spec.rb
require 'rails_helper'

RSpec.describe Search, type: :model do
  describe ".record_search" do
    it "creates a new search record" do
      expect {
        Search.record_search("Test Query", "127.0.0.1")
      }.to change(Search, :count).by(1)
    end

    it "does not create a new search record for incomplete queries" do
      expect {
        Search.record_search("what is Ruby", "127.0.0.1")
      }.not_to change(Search, :count)
    end
  end

  describe ".trends" do
    it "returns search trends" do
      create_search_records
      trends = Search.trends
      expect(trends).not_to be_empty
    end
  end

  def create_search_records
    Search.create(query: "Ruby on Rails", ip_address: "127.0.0.1")
    Search.create(query: "React JS", ip_address: "127.0.0.1")
    # Add more records as needed
  end
end
