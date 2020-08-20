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
	if(dialogIO == "open")
		'mousemove': function(e) {
			clicked && updateScrollPos(e);
		},
		'mousedown': function(e) {
			e.preventDefault();        
			clicked = true;
			clickX = e.pageX;
		},
		'mouseup': function() {
			clicked = false;
			$('html').css('cursor', 'auto');
		}
	}
	
});

var updateScrollPos = function(e) {
	if(dialogIO == "open"){
		$('html').css('cursor', 'grabbing');
		$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
	}
}