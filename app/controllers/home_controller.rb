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

post '/player-profile' do
  @player = Player.find_by_username(params[:username])
  @win = 0
  @lose = 0
  @player.rounds.each do |round|
    if round.win == true
      @win += 1
    end
  end

  @percentage = (@win / @player.rounds.length.to_f) * 100
  erb :stats
end

