def current_user
  @player || Player.find(session[:player_id_1])
end
