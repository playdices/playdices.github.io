var clicked = false, clickX;

$(document).on({

		'mousemove': function(e) {
			if($("#dialogOP").val() == 0){
			clicked && updateScrollPos(e);
		  }
		},
		'mousedown': function(e) {
			if($("#dialogOP").val() == 0){
			e.preventDefault();        
			clicked = true;
			clickX = e.pageX;
		  }
		},
		'mouseup': function() {
			if($("#dialogOP").val() == 0){
			clicked = false;
			$('html').css('cursor', 'auto');
		  }
		}
	
	
});

var updateScrollPos = function(e) {
	
		$('html').css('cursor', 'grabbing');
		$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
	
}