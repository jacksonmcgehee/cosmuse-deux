Rails.application.routes.draw do
  namespace :api do
    get 'posts/index'
  end

  namespace :api do
    get 'posts/create'
  end

  namespace :api do
    get 'posts/:id', to: 'posts#show'
  end

  namespace :api do
    get 'posts/update'
  end

  namespace :api do
    delete 'posts/:id', to: 'posts#destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users do
      resources :posts do
        resources :comments
      end
    end
  end

end
