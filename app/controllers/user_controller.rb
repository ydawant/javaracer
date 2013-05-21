post '/authentication' do
  puts " "
  puts " "
  puts " "
  p params.inspect
  @player1 = Player.find_by_username(params[:player1])
  @player2 = Player.find_by_username(params[:player2])
  if @player1 && @player2 && Player.auth_password(@player1.password) == params[:player1] && Player.auth_password(@player2.password) == params[:player2]
    session[:player_id_1] = @player1.id
    session[:player_id_2] = @player2.id
    redirect "/home"
  else
    erb :"users/failed_login"
  end
end

post '/new_user' do
  inputs = {:username => params[:username], :new_password => params[:new_password]}
  @player1 = Player.create(inputs)
  session[:player_id_1] = @player1.id
  redirect "/home"
end
