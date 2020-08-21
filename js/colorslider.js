  $(".handle").mousedown(function() {
    $(this).addClass("pop");
    $(this).parent(".slider").addClass("grad");

    });
 $(".handle").mouseup(function() {
    $(this).removeClass("pop");
      $(this).parent(".slider").removeClass("grad");

    });
    

      $( ".handle" ).draggable({ 
      axis: "x",
      containment: "parent",
      drag: function( event, ui ) {
        var thisOffset = $(this).position().left;
        var angle = (thisOffset/300)*360;
        var hslcolor = "hsl("+ angle + ", 100%, 50%)";
        $(this).css("background-color", hslcolor)
        
        $(this).parent(".slider").css("background-color", hslcolor)
      },
      /*start: function( event, ui ) {
        $(this).addClass("pop");
         $(this).parent(".slider").addClass("grad");
      },*/
      stop: function( event, ui ) {
        $(this).removeClass("pop");
             $(this).parent(".slider").removeClass("grad");
      }
    });