//RIGHT CLICK PROPERTIES
$('.static').bind('contextmenu', function(e) {
    return false;
}); 


//EXIT DICE OS IF BROWSER IS NOT FULLSCREEN
window.addEventListener('resize', function(){
	
	if( window.innerHeight == screen.height) {
		//it's fullscreen!
	}
	else{
		//not fullscreen!
		window.location.href='https://playdices.github.io/play.html'; 
	}
	
});




//LOAD DICE OS
function initializeOS(){
   
   startIntroJIE();
   setTimeout(function(){ 
		startIntroDICE(); 
		userPortal();
   }, 11000);
   
}

//PLAY START MENU SOUND
var introDICE = document.getElementById("introDICE"); 
function startIntroDICE() { 
  introDICE.play(); 
  
} 

//PLAY JIE INTRO
var introJIE = document.getElementById("introJIE"); 
function startIntroJIE() { 
  introJIE.play(); 
}

//USER PORTAL
function userPortal(){
	ShowObjectWithEffect('userPane', 1, 'fade', 500, 'easeOutExpo');
	document.getElementById("introLoad").style.display = "none";
	return false;
	
}




