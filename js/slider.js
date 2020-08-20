var clicked = false, clickX;
$(document).on({
	
	var dialog = sessionStorage.getItem("checkDialog");
	
	if(dialog === "open"){
		
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
	
	var dialog = sessionStorage.getItem("checkDialog");
	
	if(dialog === "open"){
	
		$('html').css('cursor', 'grabbing');
		$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
	}
}