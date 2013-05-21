$(document).ready(function() {
  $(document).keyup(function(e){
    start = Date.now()
    if (e.keyCode == 37){
      var currentlyActive = $('.player_1_track');
      console.log(currentlyActive);
      currentlyActive.removeClass('player_1_track');
      currentlyActive.next().addClass('player_1_track');
      if ($('#player1_strip td').last().hasClass('player_1_track')) { 
        alert("Player 1 wins!");
        var winner_name = $('#player1_strip td').first().text();
        var time = Date.now() - start;
        $.post(window.location.pathname+'/results', {'winner': winner_name, 'time': time }, function(r) {
          $('body').html(r)
        }); 
        return false;
      };
      return false;
    }

    if (e.keyCode == 39) {
      var currentlyActive1 = $('.player_2_track');
      currentlyActive1.removeClass('player_2_track');
      currentlyActive1.next().addClass('player_2_track');
      if ($('#player2_strip td').last().hasClass('player_2_track')) { 
        alert("Player 2 wins!");
        var winner_name = $('#player2_strip td').first().text();
        var time = Date.now() - start;
        $.post(window.location.pathname+'/results', {'winner': winner_name, 'time': time }, function(r) {
          $('body').html(r)
        }); 
        return false;
      };
      console.log("test")
      return false;
    };
  });
});



      

    //        if ($('#player1_strip td').last().hasClass('active')) { 
    //     alert("Player 1 wins!");
    //     var winner_name = $('#player1_strip td').first()
    //     var time = Date.now() - start;
    //     $("form").append("<input type='hidden' name='winner' value='" + winner_id + "'/>").submit();
    //     location.reload();
    //   };
    // }
