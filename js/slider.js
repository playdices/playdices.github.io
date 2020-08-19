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
        $('html').css('cursor', 'auto');
    }
});

var updateScrollPos = function(e) {
    $('html').css('cursor', 'grabbing');
    $(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
}