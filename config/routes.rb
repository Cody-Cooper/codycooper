Rails.application.routes.draw do
  get 'codycooper/index'

  #root page
  root 'codycooper#index'

  # pages
  get "/contact" => "contact#index"

end
