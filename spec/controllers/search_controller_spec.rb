# spec/controllers/search_controller_spec.rb
require 'rails_helper'

RSpec.describe SearchController, type: :request do
  describe "POST #create" do
    it "creates a new search record" do
      post '/search', params: { query: "Test Query" }
      expect(response).to have_http_status(:success)
    end

    it "handles invalid search parameters" do
      post '/search', params: { query: "" }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "GET #trends" do
    it "returns search trends" do
      create_search_records
      get '/search/trends'  # Actualiza la ruta según tu configuración
      expect(response).to have_http_status(:success)
      body = JSON.parse(response.body)
      expect(body["trends"]).not_to be_empty
    end
  end

  def create_search_records
    Search.create(query: "Ruby on Rails", ip_address: "127.0.0.1")
    Search.create(query: "React JS", ip_address: "127.0.0.1")
    # Agrega más registros según sea necesario
  end
end
