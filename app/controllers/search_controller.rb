class SearchController < ApplicationController

  protect_from_forgery with: :null_session

  def create
    @search = Search.new(query: params[:query], ip_address: request.remote_ip)

    if @search_query.save
      render json: { status: 'success', message: 'Search query recorded successfully' }
    else
      render json: { status: 'error', message: 'Failed to record search query' }
    end
  end

  def index
  end
end
