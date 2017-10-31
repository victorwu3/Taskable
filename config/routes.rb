Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :destroy] do
      resources :hired_tutors, only: [:index, :show, :create]
    end
    resource :session, only: [:create, :destroy, :show]
    post 'fbsession', to: 'sessions#fblogin'
    resources :tutors_for_hires, only: [:index, :show, :create, :destroy]
    resources :subjects, only: [:index, :show] do
      resources :tutors_for_hires, only: [:index, :show, :create]
    end
  end
end
