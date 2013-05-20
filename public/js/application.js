$(document).ready(function() {
  $(document).keyup(function(e){
    start = Date.now()
    if (e.keyCode == 37){
      var currentlyActive = $('.active');
      currentlyActive.removeClass('active');
      currentlyActive.next().addClass('active');
      if ($('#player1_strip td').last().hasClass('active')) { 
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
      var currentlyActive1 = $('.active1');
      currentlyActive1.removeClass('active1');
      currentlyActive1.next().addClass('active1');
      if ($('#player2_strip td').last().hasClass('active1')) { 
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
