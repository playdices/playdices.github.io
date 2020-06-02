
document.addEventListener("DOMContentLoaded", function(event) {
	  
	  
		  var optionBack = document.getElementById("optionBack");
		  optionBack.style.display = "none";
		  

  });
  
  
    function shareScreen(){
	  
	    var optionIn = document.getElementById("optionIn");
	    var optionBack = document.getElementById("optionBack");
		
		var sharingView = document.getElementById("sharingView");
		
		document.getElementById("shareStatus").innerHTML = "Share Screen Mode!";
		
		optionBack.style.display = "block";
		optionIn.style.display = "none";
		
		ShowObjectWithEffect('sharingView', 1, 'fade', 500, 'easeOutExpo');return false;
		

    }
	
	
	function viewScreen(){
		
		var optionIn = document.getElementById("optionIn");
		var optionBack = document.getElementById("optionBack");
		
		var sharedView = document.getElementById("sharedView");
		
		document.getElementById("shareStatus").innerHTML = "View Screen Mode!";
		
		optionBack.style.display = "block";
		optionIn.style.display = "none";
		
		
		ShowObjectWithEffect('sharedView', 1, 'fade', 500, 'easeOutExpo');return false;
		
	}
	
	function backScreen(){
		
		var optionIn = document.getElementById("optionIn");
		var optionBack = document.getElementById("optionBack");
		
		var sharingView = document.getElementById("sharingView");
		var sharedView = document.getElementById("sharedView");
		
		document.getElementById("shareStatus").innerHTML = "Please select an action!";
		
		optionBack.style.display = "none";
		optionIn.style.display = "block";
		
		ShowObjectWithEffect('sharingView', 0, 'fade', 500, 'easeOutExpo');
		ShowObjectWithEffect('sharedView', 0, 'fade', 500, 'easeOutExpo');return false;
		
	}	