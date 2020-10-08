/******************************************
    File Name: custom.js
/****************************************** */

(function($) {
    "use strict";

    /* ==============================================
    AFFIX
    =============================================== */
    $('.megamenu').affix({
        offset: {
            top: 0,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

    /* ==============================================
    BACK TOP
    =============================================== */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({
                bottom: "75px"
            });
        } else {
            jQuery('.dmtop').css({
                bottom: "-100px"
            });
        }
    });

    /* ==============================================
       LOADER -->
        =============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
     CONTACT -->
     =============================================== */
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

    /* ==============================================
     CODE WRAPPER -->
     =============================================== */

    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

})(jQuery);

/*= text auto writer ==*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

/*== map js ==*/

    function myMap() {
        var mapProp= {
            center:new google.maps.LatLng(51.508742,-0.120850),
            zoom:5,
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
	
/*== map js ==*/	


/*== SHOW AND HIDE SEARCH ==*/

  document.addEventListener("DOMContentLoaded", function(event) {
	  
	      document.body.innerHTML += '<p hidden id="searchStatus">1</p>';
	  
		  var search = document.getElementById("search");
		  var hideBackBtn = document.getElementById("hideSearch");
	
		  hideBackBtn.style.display = "none";
		  search.style.display = "none";
		    
  });

		function keyinResults(){
			searchPage();
			showResults();
			
		}
		
		function searchStatus(){
			
			var searchStatus = document.getElementById("searchStatus").innerHTML;
			var onSearch = document.getElementById("onSearch");
			var hideSearch = document.getElementById("hideSearch");
			
			  /** STATUS CHANGER **/
			  
				//alert("before: "+searchStatus);
			  
			  if(searchStatus == 1){
				  document.getElementById("searchStatus").innerHTML = 2;
				  //INSERT CODE HERE
				  onSearch.style.display = "none";
			      hideSearch.style.display = "block";
				  
			  }else{
				  document.getElementById("searchStatus").innerHTML = 1;
				  //INSERT CODE HERE
				  onSearch.style.display = "block";
			      hideSearch.style.display = "none";
				  
				  hideResults();
				 
			  }
			  
				searchStatus = document.getElementById("searchStatus").innerHTML;
				//alert("after: "+searchStatus);
			
			/** STATUS CHANGER **/
			
		}

       function showResults(){
		 
		  var searchStatus = document.getElementById("searchStatus").innerHTML;
		  var onSearch = document.getElementById("onSearch");
	      var hideSearch = document.getElementById("hideSearch");
			
		      //SYNC STATUS
			  document.getElementById("searchStatus").innerHTML = 1;
			  onSearch.style.display = "none";
			  hideSearch.style.display = "block";
		  
			  //ELEMENTS
	
			  ShowObjectWithEffect('theElement', 0, 'fade', 250, 'easeOutQuint');//HIDE
			  ShowObjectWithEffect('search', 1, 'fade', 350, 'easeOutExpo'); //SHOW
			  window.scrollTo(0, 0);
		    
		    return false;
       }
	   
	   function hideResults(){


		        //ELEMENTS
				
				ShowObjectWithEffect('search', 0, 'fade', 250, 'easeInQuint'); //HIDE
				ShowObjectWithEffect('theElement', 1, 'dropdown', 350, 'easeOutQuint'); //SHOW
				window.scrollTo(0, 0);
			  
			return false;
			
		   
	   }
		
/*== HIDE SEARCH END ==*/

/*== MAKE EMAIL ==*/
	
	$(document).on("keypress", "#mc-email", function(emailSubs){
			if(emailSubs.which == 13){
				emailPortal();
			}
	});

	function emailPortal(){
		
		var getEmail = document.getElementsByName('semail')[0].value;
		
			
			var emailTo = "jerwinsbest@gmail.com";
			var emailSub = getEmail +" wants to be subscribe for newsletter and updates (Dice)";
			var emailBody = "I want to be subscribe for newsletter and updates!" + '%0D%0A%0D%0A' + 
							'Email: ' + '%0D%0A' + getEmail + '%0D%0A%0D%0A';
			
			window.open("mailto:"+emailTo+'?subject='+emailSub+'&body='+emailBody);
			
		

	}
	
	function emailPortalUser(){
			
			var emailTo = "jerwinsbest@gmail.com";
			var emailSub = "Technical issues of from a user (Dice)";
			var emailBody = "List down what happened:" + '%0D%0A' + '1. ' 
							+ '%0D%0A' + '2. ' + '%0D%0A' + '3. ';
			
			window.open("mailto:"+emailTo+'?subject='+emailSub+'&body='+emailBody);

	}
	
	function emailPortalContact(){
		
			var ffirstname = document.getElementsByName('formfirstname')[0].value;
			var flastnname = document.getElementsByName('formlastname')[0].value;
			var femail = document.getElementsByName('formemail')[0].value;
			var fsubject = document.getElementsByName('formsubject')[0].value;
			var fmessage = document.getElementsByName('formmessage')[0].value;
			
			var emailTo = "jerwinsbest@gmail.com";
			var emailSub = fsubject + " by " + ffirstname + " " + flastnname + " (Dice)";
			var emailBody = "Reported by: %0D%0A" +  flastnname + ", " + ffirstname +
							" [" + femail + "] %0D%0A%0D%0A" + "Message: %0D%0A" + fmessage + "%0D%0A%0D%0A"; 
			
			
			window.open("mailto:"+emailTo+'?subject='+emailSub+'&body='+emailBody);

	}
	
/*== MAKE EMAIL ==*/


/*== LOGIN webOS SCRIPTS ==*/

function imageSelect(){
	var getPhoto = document.getElementById("userPhoto");
	getPhoto.click();
}

function onImageSelected(event) {
	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	var imgtag = document.getElementById("displayPhoto");

	var fileName = document.getElementById('userPhoto').value.toLowerCase();
	if(!fileName.endsWith('.jpg') && !fileName.endsWith('.png') && !fileName.endsWith('.gif') && !fileName.endsWith('.svg')){
		imgtag.title = "Select an image!";
		document.getElementById("displayPhoto").src = "https://playdices.github.io/images/profile.png";
		return false;
	}
	else
	{
		imgtag.title = selectedFile.name;
		
	}

	fixUserImage();

	reader.onload = function(event) {
	imgtag.src = event.target.result;

	};

	reader.readAsDataURL(selectedFile);

}

function fixUserImage(){
	
	document.getElementById("displayPhoto").width = "250";
	document.getElementById("displayPhoto").height = "250";
	
}

function onCheckImage(){
	var fileName = document.getElementById('userPhoto').value.toLowerCase();

	if(document.getElementById("userPhoto").value == ""){
		document.getElementById("displayPhoto").src = "https://playdices.github.io/images/profile.png";
	}
}

function onChangePicDetails(){
	var chain = sessionStorage.getItem("checkChain");
	
	setTimeout(function picTime(){ 
	
		if(chain === "false"){
			var userimage = document.getElementById("displayPhoto").src;
			localStorage.setItem("userImage", userimage);
		}
		
	}, 60);
	
}


function onChangeNameDetails(){
	var chain = sessionStorage.getItem("checkChain");
	
	setTimeout(function nameTime(){ 
	
		if(chain === "false"){
			var username = document.getElementById("username").value;
			localStorage.setItem("userName", username);
		}
		
	}, 60);
}

function checkChangeTrue(){
	sessionStorage.setItem("checkChain", "false");
	sessionStorage.setItem("checkTicked", "true");
}

function checkChangeFalse(){
	sessionStorage.setItem("checkChain", "true");
	sessionStorage.setItem("checkTicked", "false");
}

function chainCheckbox(){
	
	var chain = sessionStorage.getItem("checkChain");
	
	if(chain === "true"){
		document.getElementById("saveDetails").checked = true;
		checkChangeTrue();
		saveDetails();
	}
	else{
		document.getElementById("saveDetails").checked = false;
		checkChangeFalse();
		unloadDetails();
	}

}

function setLoginStatus(){
	
	var chain = sessionStorage.getItem("checkChain");
	
	if(chain === "true"){
		document.getElementById("saveDetails").checked = true;
		checkChangeTrue();
		saveDetails();
	}
	else{
		document.getElementById("saveDetails").checked = false;
		checkChangeFalse();
		unloadDetails();
	}
	
}

function saveDetails(){
	var username = document.getElementById("username").value;
	var userimage = document.getElementById("displayPhoto").src;
	localStorage.setItem("userName", username);
	localStorage.setItem("userImage", userimage);
	localStorage.setItem("userSave", "true");
}

function unloadDetails(){
	localStorage.removeItem("userName");
	localStorage.removeItem("userImage");
	localStorage.setItem("userSave", "false");
}

window.onload = function(){
	if(usersave !== "true"){
		checkChangeFalse();
	}
}

document.addEventListener("DOMContentLoaded", function loadDetails(){
    var usersave = localStorage.getItem("userSave");
	
	if(usersave === "true"){
		var username = localStorage.getItem("userName");
		var userimage = localStorage.getItem("userImage");
		
		document.getElementById("username").value = username;
		document.getElementById("displayPhoto").src = userimage;
		
		fixUserImage();
		document.getElementById("saveDetails").checked = true;
		checkChangeTrue();
		
	}
	
	//CLEAR CONSOLE
	setTimeout(function clearConsoled(){ 
		clearconsole();
    }, 150);
	
	
	
	
});

/*== LOGIN webOS SCRIPTS ==*/


/*== GO TO TOP ON RELOAD FIX ==*/

		 $(window).on('beforeunload', function() {
		  $('body').hide();
		  $(window).scrollTop(0);
		});
		
/*== GO TO TOP ON RELOAD FIX ==*/
		
		
		
		
		
		
		
		
		
		
		
		


