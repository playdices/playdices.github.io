function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var file = "https://playdices.github.io/images/connected.png";
    var randomNum = Math.round(Math.random() * 10000);
 
    xhr.open('HEAD', file + "?rand=" + randomNum, true);
    xhr.send();
     
    xhr.addEventListener("readystatechange", processRequest, false);
 
    function processRequest(e) {
		
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
          //online
		  document.getElementById("disconnected").style.display = "none";
		  document.getElementById("connected").style.display = "inline";
        } else {
          document.getElementById("disconnected").style.display = "inline";
		  document.getElementById("connected").style.display = "none";
        }
      }
	  
    }
	
	clearconsole();
	initializeConnection();
}

function clearconsole() 
 {  
   console.log(window.console);   
   if(window.console ) 
   {     
     console.clear(); 
   } 
 } 

document.addEventListener("DOMContentLoaded", function loadDetails(){
    
	document.getElementById("connected").style.display = "none";
	document.getElementById("disconnected").style.display = "none";
	initializeConnection();
	
});

function initializeConnection(){
   
   setTimeout(function loadConnection(){ 
		doesConnectionExist();
   }, 1000);
   
}