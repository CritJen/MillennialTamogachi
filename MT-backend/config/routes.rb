Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :millennials
      resources :items, only: [:index]
    end
  end
end
