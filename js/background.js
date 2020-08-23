  
  $(function() {
  var canvas = document.getElementById('canvasBackground');
  var ctx = canvas.getContext('2d');
  var video = document.getElementById('videoBackground');

  video.addEventListener('play', function() {
    var $this = this; //cache
    (function loop() {
      if (!$this.paused && !$this.ended) {
      
        canvas.width  = 1920;
        canvas.height = 1080;
        ctx.drawImage($this, 0, 0);
        setTimeout(loop, 1000 / 60); // drawing at 30fps
      }
    })();
  }, 0);
});
  