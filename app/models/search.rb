class Search < ApplicationRecord
    validates :query, presence: true

    scope :recent, ->(limit = 10) { order(created_at: :desc).limit(limit) }
end
