var clicked = false, base = 0;

$('#someDiv').on({
    mousemove: function(e) {
        clicked && function(xAxis) {
            var _this = $(this);
            if(base > xAxis) {
                base = xAxis;
                _this.css('margin-left', '-=1px');
            }
            if(base < xAxis) {
                base = xAxis;
                _this.css('margin-left', '+=1px');
            }
        }.call($(this), e.pageX);
    },
    mousedown: function(e) {
        clicked = true;
        base = e.pageX;
    },
    mouseup: function(e) {
        clicked = false;
        base = 0;
    }
});