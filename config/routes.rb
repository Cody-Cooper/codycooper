Rails.application.routes.draw do
  resources "contacts", only: [:new, :create]
  get 'codycooper/index'
  root 'codycooper#index'
end
