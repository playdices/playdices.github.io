
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
	
	
});
