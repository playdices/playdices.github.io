$(document).ready(function() {
    var dialogIO = localStorage['checkDialog'];
    if (!dialogIO) {
        // open popup
        localStorage['checkDialog'] = "open";
		alert(dialogIO);
    }
});

var clicked = false, clickX;
var dialogIO = localStorage['checkDialog'];

$(document).on({

		'mousemove': function(e) {
			if(dialogIO == "open"){
			clicked && updateScrollPos(e);
		  }
		},
		'mousedown': function(e) {
			if(dialogIO == "open"){
			e.preventDefault();        
			clicked = true;
			clickX = e.pageX;
		  }
		},
		'mouseup': function() {
			if(dialogIO == "open"){
			clicked = false;
			$('html').css('cursor', 'auto');
		  }
		}
	
	
});

var updateScrollPos = function(e) {
	
		$('html').css('cursor', 'grabbing');
		$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
	
}