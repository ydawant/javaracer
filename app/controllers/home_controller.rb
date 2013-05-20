get '/' do
  redirect '/home' unless session[:player_id].nil?
  redirect '/login'
end

get '/home' do
  @player1 = current_user
  if @player1 && session[:player_id_1] == @player1.id
    erb :home
  else 
    redirect '/login'
  end
end



