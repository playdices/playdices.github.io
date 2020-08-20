var clicked = false, clickX;
$(document).on({
	
		
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
			$('#maxMenu').css('cursor', 'auto');
		}
	
	
	
});

var updateScrollPos = function(e) {
	

		$('#maxMenu').css('cursor', 'grabbing');
		$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
	
}