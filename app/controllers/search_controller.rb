class SearchController < ApplicationController

  protect_from_forgery with: :null_session

  def create
    @search = Search.new(query: params[:query], ip_address: request.remote_ip)

    if @search.save
      render json: { status: 'success', message: 'Search query recorded successfully' }
    else
      render json: { status: 'error', message: 'Failed to record search query' }, status: :unprocessable_entity
    end
  end

  def index
    @recent_search = Search.recent
  end
end
