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

	var videoHD = document.getElementById('introJIE');
	videoHD.src = 'https://playdices.github.io/videos/intronly.mp4';
	videoHD.load();

	videoHD.addEventListener('loadeddata', function() {
	   ShowObjectWithEffect('playIntroButton', 1, 'fade', 500, 'easeOutExpo');
	}, false);

	document.getElementById("userMenuOP").style.display = "none";
    document.getElementById("dialogOP").style.display = "none";
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
	onUserMenu();
	onSlider();
	
	document.getElementById("JIEIntroBox").style.display = "none";
	ShowObjectWithEffect('userHeader', 1, 'fade', 500, 'easeOutExpo');
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
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/date.js"> </script>');
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/clock.js"> </script>');
	$('head').append('<script type="text/javascript" src="https://playdices.github.io/js/colorslider.js"> </script>');

}

function onSlider(){
	
	document.getElementById("dialogOP").value = "0";
	$('head').append('<script type="text/javascript" src="http://playdices.github.io/js/slider.js"></script>');
	
}

function onUserMenu(){
	
	document.getElementById("userMenuOP").value = "0";
	
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

function openAbout(){
	delayOpenDialog(1);
}

function openHelp(){
	delayOpenDialog(2);
}

function executeRestart(){
	delayExecuteDialog(1);
}

function executeShutdown(){
	delayExecuteDialog(2);
}

document.getElementById("userPhotoDisplay").addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    triggerMenu();
    return false;
}, false);

document.getElementById("userPhotoDisplay").addEventListener('click', function(ev) {
    ev.preventDefault();
    triggerMenu();
    return false;
}, false);

function triggerMenu(){
	
	var state = document.getElementById("userMenuOP").value;
	
	if(state === "0"){
		document.getElementById("userMenuOP").value = "1";
		ShowObjectWithEffect('menuHolder', 1, 'slideup', 500, 'easeInOutQuint');
	}
	else{
		document.getElementById("userMenuOP").value = "0";
		ShowObjectWithEffect('menuHolder', 0, 'slideup', 500, 'easeOutExpo');
	}
	
}

function updateDialogs(){
	
	ShowObjectWithEffect('menuHolder', 0, 'slideup', 500, 'easeOutExpo');
    document.getElementById("userMenuOP").value = "0";
	document.getElementById("dialogOP").value = "1";
	
}

function delayOpenDialog(dialogType){
	
	setTimeout(function openThisDialog(){ 

		openDialog(dialogType);
		
   }, 250);
}

function delayExecuteDialog(dialogType){
	
	setTimeout(function executeThisDialog(){ 

		executeDialog(dialogType);
		
   }, 250);
}

function openDialog(dialogType){
   
   
   
   var addTitle;
   var addContent;
   
	updateDialogs();
   
   if(dialogType === 1){
		addTitle = '<span class="noselect">About DICE webOS</span>';
		addContent = '<div class="noselect">Jerwin\'s Best DICE webOS<br />'+
		"Version 1023 (webOS Build, powered by JavaScript)<br />Created by Jerwin's Best Interactive Entertainment<br />Creative Commons Attribution (2020 release)<br /><br />This web operating system is dedicated to:<br /><span id=user>User</span></div>";
   }
   else if(dialogType === 2){
		addTitle = '<span class="noselect">Help</span>';
		addContent = '<span class="noselect">Welcome to DICE webOS!<br /></span>'+
		'<div class="aboutThis noselect"><ul>'+
		  "<li>Enjoy exploring the apps and get dicing!</li>"+
		  "<li>Click or right click your profile picture to open a menu below it, click and explore each function of the components of the menu. Click your profile picture again to close the menu."+
		  "<li>There is a setting in the menu, you can customize your personal interface!</li>"+
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

function executeDialog(dialogType){
	
   
	
   var addTitle;
   var addContent;
   var captionA;
   var captionB;
   var buttonA;
   var buttonB;
   
   updateDialogs();
   
    
	if(dialogType === 1){
	    addTitle = '<span class="noselect">Restart</span>';
		addContent = '<div class="noselect">Are you sure you want to restart DICE webOS?</div>';
		captionA = "Continue";
		captionB = "Cancel";
		buttonA = "js-dialog-close alert";
		buttonB = "js-dialog-close";
	}
	else if(dialogType === 2){
		addTitle = '<span class="noselect">Shutdown</span>';
		addContent = '<div class="noselect">Are you sure you want to shutdown DICE webOS?</div>';
		captionA = "Continue";
		captionB = "Cancel";
		buttonA = "js-dialog-close alert";
		buttonB = "js-dialog-close";
	}
	else{
		alert("Does not exist");
	}
   
	
	Metro.dialog.create({
        title: ""+addTitle,
        content: ""+addContent,
        actions: [
            {
                caption: ""+captionA,
                cls: ""+buttonA,
                onclick: function(){
					
                    applyDialogAction(dialogType);
                }
            },
            {
                caption: ""+captionB,
                cls: ""+buttonB,
            }
        ]
    });
}

function applyDialogAction(task){
	
	if(task === 1){
		alert("Action 1");
	}
	else if(task === 2){
		alert("Action 2");
	}
	else{
		alert("Action not applied.");
	}
	
}
////////////////////// MENU ///////////////////////////

/////////////// SETTINGS FUNCTION ////////////////////

function openSettings(){
	
	updateDialogs();
	ShowObjectWithEffect('layerGround', 1, 'fade', 500, 'easeOutExpo');
	ShowObjectWithEffect('settingsWindow', 1, 'fade', 500, 'easeOutExpo');
}

document.getElementById("myRange").addEventListener('change', updateValue);

function updateValue() {
  var x = document.getElementById("myRange").value;
  document.getElementById("rangeInfo").innerHTML = x;
}


/////////////// SETTINGS FUNCTION ////////////////////