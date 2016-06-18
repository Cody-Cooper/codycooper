Rails.application.routes.draw do
  get 'codycooper/index'

  #root page
  root 'codycooper#index'

  # pages
  match '/contact', to: 'contact#index', via: 'get'
  resources "contacts", only: [:new, :create]

end
