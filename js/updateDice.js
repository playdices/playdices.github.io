/*== UPDATE ==*/

	document.addEventListener("DOMContentLoaded", function(event) {
	  
	      updateLiveData();
		    
	});
	
	function updateLiveData(){
	
		var webTimer;
		function liveDataStart()
		{
		   webTimer = setInterval(function()
		   {
			  //alert('enter your message');
			  
			  ;
		   }, 1000);
		}
		function liveDataClear()
		{
		   clearInterval(webTimer);
		}
		liveDataStart();
		
	}
		
/*== UPDATE ==*/