$(document).ready(function() {
  $(document).keyup(function(e){
    var start = Date.now()
    if (leftArrowPressed(e)) {
      return advancePlayer(1, start);
    } 
    if (rightArrowPressed(e)) {
      return advancePlayer(2, start);
    };
  });
});

function leftArrowPressed(e) {
  if (e.keyCode == 37) {
    return true;
  }
}

function rightArrowPressed(e) {
  if (e.keyCode == 39) {
    return true;
  }
}

function gameOver(player, player_track, player_strip, start) {
  if ($(player_strip).last().hasClass(player_track)) {
    alert('Player ' + player + ' wins!');
    var winner_name = $(player_strip).first().text();
    var time = Date.now() - start;
    $.post(window.location.pathname+'/results', {'winner': winner_name, 'time': time }, function(r) {
      $('body').html(r)
    }); 
  };
}

function advancePlayer(player, start) {
  var player_track = 'player_' + player + '_track';
  var player_strip = '#player' + player + '_strip td';
  var currentlyActive = $('.' + player_track);
  currentlyActive.removeClass(player_track);
  currentlyActive.next().addClass(player_track);
  gameOver(player, player_track, player_strip, start);
  return false;
}
