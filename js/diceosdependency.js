//RIGHT CLICK PROPERTIES
$('.static').bind('contextmenu', function(e) {
    return false;
}); 


//EXIT DICE OS IF BROWSER IS NOT FULLSCREEN
window.addEventListener('resize', function(){
	
	/*
	if( window.innerHeight == screen.height) {
		//it's fullscreen!
	}
	else{
		//not fullscreen!
		window.location.href='https://playdices.github.io/play.html'; 
	}
	*/
	
});


document.addEventListener("DOMContentLoaded", function loadDetails(){
	
	window.scrollTo(0,0); 
	document.getElementById("playIntroButton").setAttribute("class", "pointerPlay");
	document.getElementById("bgDICE").style.display = "none";

});


//LOAD DICE OS
function initializeOS(){
   
   startIntroJIE();
   greetUser();
   
   document.getElementById("introJIE").addEventListener('ended',myHandler,false);
    function myHandler(e) {
		utilityLoad();
        startIntroDICE(); 
		userPortal();
    }
   
}

function greetUser(){
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/greet.js"></script>');
	
}


//PLAY START MENU SOUND
var introDICE = document.getElementById("introDICE"); 
function startIntroDICE() { 
  introDICE.play();
  
  setTimeout(function hidePane(){ 
		ShowObjectWithEffect('userPane', 0, 'fade', 500, 'easeOutExpo');
		loadStartMenu();
   }, 4000);
  
}

function loadStartMenu(){
	
	metroStyle();
	onSlider();
	
	ShowObjectWithEffect('userHeader', 1, 'fade', 500, 'easeOutExpo');
	ShowObjectWithEffect('menuHolder', 1, 'fade', 500, 'easeOutExpo');
	ShowObjectWithEffect('logoPlaceholder', 1, 'fade', 500, 'easeOutExpo');
	
	setTimeout(function showItems(){ 
		ShowObjectWithEffect('maxMenu', 1, 'fade', 500, 'easeOutExpo');
   }, 1000);
	
	
}

function metroStyle(){
	
	$('head').append('<link rel="stylesheet" href="https://cdn.metroui.org.ua/v4.3.2/css/metro-all.min.css">');
	$('head').append('<script src="https://cdn.metroui.org.ua/v4.3.2/js/metro.min.js"></script>');
	
}

function utilityLoad(){
	
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/date.js"></script>');
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/clock.js"></script>');
	
}

function onSlider(){
	
	sessionStorage.setItem("checkDialog", "open");
	$('head').append('<script type="text/javascript" src="http://playdices.github.io/js/slider.js"></script>');
	
}

//PLAY JIE INTRO
var introJIE = document.getElementById("introJIE"); 
function startIntroJIE() { 
  introJIE.play();


  
}

//USER PORTAL
function userPortal(){
	ShowObjectWithEffect('userPane', 1, 'fade', 500, 'easeOutExpo');
	ShowObjectWithEffect('bgDICE', 1, 'fade', 500, 'easeOutExpo');
	document.getElementById("introLoad").style.display = "none";
	
}


