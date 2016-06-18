Rails.application.routes.draw do
  get 'codycooper/index'

  #root page
  root 'codycooper#index'

  # pages
  resources "contacts", only: [:new, :create]

end
