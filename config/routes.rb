Rails.application.routes.draw do
  get "/ui/*path" => "static#root"

  root "static#root"
end
