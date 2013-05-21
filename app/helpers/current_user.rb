def current_user
  @player1 || Player.find(session[:player_id_1])
end
