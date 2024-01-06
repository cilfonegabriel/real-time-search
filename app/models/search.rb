class Search < ApplicationRecord
    validates :query, presence: true
  
    scope :recent, ->(limit = 10) { order(created_at: :desc).limit(limit) }
  
    scope :trends, -> { group(:query).order('count_query DESC').limit(10).count(:query) }
  
    def self.record_search(query, ip_address)
      return unless query_complete?(query)
  
      create(query: query, ip_address: ip_address)
    end
  
    private
  
    def self.query_complete?(query)
      !query.match?(/\b(?:what|how|where|who|why)\b/i)
    end
  end
  