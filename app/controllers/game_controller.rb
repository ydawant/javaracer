get '/game' do
  @player1 = Player.find(session[:player_id_1])
  @player2 = Player.find(session[:player_id_2])
  
  @game = Game.create(unique_url: "www.google.com")

  @round_1 = Round.create( player_id: @player1.id, game_id: @game.id, win: false, time: nil)
  @round_2 = Round.create( player_id: @player2.id, game_id: @game.id, win: false, time: nil)
  redirect "/game/#{@game.id}/#{@player1.id}/#{@round_1.id}/#{@player2.id}/#{@round_2.id}"
end

get '/results/:url' do
  @game = Game.find_by_unique_url(params[:url])
  erb :game_result
end


post '/game/:game_id/:player1_id/:round_1_id/:player2_id/:round_2_id/results' do
  puts " "
  puts " "
  puts " "
  p params[:winner]
  random = ("A".."Z").to_a.sample(6).join('')
  @game = Game.find(params[:game_id])
  @game.update_attributes(:unique_url => random)
  rounds = @game.rounds
  rounds.each do |round|
    if round.player_id == Player.find_by_username(params[:winner]).id
      round.update_attributes(:win => true, :time => params[:time])
    else
      round.update_attributes(:win => false)
    end
    @player1 = Player.find(params[:player1_id])
    @player2 = Player.find(params[:player2_id])
  end
  puts "We got here!"
  erb :results
end

get '/game/:game_id/:player1_id/:round_1_id/:player2_id/:round_2_id' do
@player1 = Player.find(params[:player1_id])
@player2 = Player.find(params[:player2_id])
erb :racer
end


