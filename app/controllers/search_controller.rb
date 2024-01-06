# app/controllers/search_controller.rb
class SearchController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    query = params[:query]
    ip_address = request.remote_ip

    if query.present?
      Search.record_search(query, ip_address)
      render json: { status: 'success', message: 'Search query recorded successfully', query: query, trends: Search.trends }
    else
      render json: { status: 'error', message: 'Invalid search parameters' }, status: :unprocessable_entity
    end
  end

  def trends
    trends = Search.trends
    render json: { trends: trends }
  end
end
