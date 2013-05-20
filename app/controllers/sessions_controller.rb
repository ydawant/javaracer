get '/login' do
  erb :"users/login"
end

get '/logout' do
  session[:player_id] = nil
  redirect '/'
end
