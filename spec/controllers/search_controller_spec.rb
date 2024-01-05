require 'rails_helper'

RSpec.describe SearchController, type: :controller do
  describe "POST #create" do
    it "creates a new search record" do
      post :create, params: { query: "Test Query" }
      expect(response).to have_http_status(:success)
    end

    it "handles invalid search parameters" do
      post :create, params: { query: "" }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "GET #index" do
    it "renders the index template" do
      get :index
      expect(response).to render_template(:index)
    end
  end
end
