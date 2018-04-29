Rails.application.routes.draw do
  post    'sessions'     => 'sessions#create'
  delete  'sessions/:id' => 'sessions#destroy'
  
  resources :users
end
