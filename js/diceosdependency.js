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
	
		ShowObjectWithEffect('maxMenu', 1, 'dropright', 500, 'easeOutCirc');
		
   }, 1000);
	
	
}

function metroStyle(){
	
	$('head').append('<link rel="stylesheet" href="https://cdn.metroui.org.ua/v4.3.2/css/metro-all.min.css">');
	$('head').append('<script src="https://cdn.metroui.org.ua/v4.3.2/js/metro.min.js"></script>');
	
}

function utilityLoad(){
	
	ShowObjectWithEffect('backdropped', 1, 'fade', 500, 'easeOutExpo');
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/date.js"></script>');
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/clock.js"></script>');
	
}

function onSlider(){
	
	document.getElementById("dialogOP").value = "0";
	$('head').append('<script type="text/javascript" src="http://playdices.github.io/js/slider.js"></script>');
	
}

function onSliderReset(){

	document.getElementById("dialogOP").value = "0";
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

////////////////////// MENU ///////////////////////////
function openDialog(dialogType){
   
   var addTitle;
   var addContent;
   
   document.getElementById("dialogOP").value = "1";
   
   if(dialogType === 1){
		addTitle = "About DICE webOS";
		addContent = "<div>Jerwin's Best DICE webOS<br />Version 1023 (webOS Build, powered by JavaScript)<br />Created by Jerwin's Best Interactive Entertainment<br />Creative Commons Attribution (2020 edition)<br /><br />This web operating system is dedicated to:<br /><span id=user>User</span></div>";
   }
   else if(dialogType === 2){
		addTitle = "Help";
		addContent = "Welcome to DICE webOS!<br />"+
		'<div class="aboutThis"><ul>'+
		  "<li>Enjoy exploring the apps and get dicing!</li>"+
		  "<li>Click your profile picture to open a menu below it, click and explore each function of the components of the menu. Click your profile picture again to close the menu."+
		  "<li>There are two types of apps that you can open: internal and external. If you get an alert, thats an external app. If not thats an internal app.</li>"+
		  "<li>By default, there are internal apps that can be classified as utility or game apps. Swipe top-left corner to minimize it or swipe down-left corner to close it.</li>"+
		  "<li>On your way, there could be a chance that your opening an external app. Opening an external app can be confusing. You can Ctrl+W to close it or Ctrl+Shift+Tab to keep it on background and go back to the start menu, to go back Ctrl+Tab. If you open two external apps then Ctrl+Shift+Tab twice, just navagate external apps with the Ctrl+Shift+Tab and Ctrl+Tab key properly.</li>"+
		"</ul></div>";  

   }
   else{
		alert("Does not exist");
   }

   Metro.dialog.create({
       title: ""+addTitle,
       content: ""+addContent,
       closeButton: true
   });
}

////////////////////// MENU ///////////////////////////