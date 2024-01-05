Rails.application.routes.draw do
  resources :search, only: [:create, :index]

  root to: 'search#index'
end