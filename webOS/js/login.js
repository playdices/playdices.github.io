
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

	document.getElementById("displayPhoto").width = "250";
	document.getElementById("displayPhoto").height = "250";

	reader.onload = function(event) {
	imgtag.src = event.target.result;

	};

	reader.readAsDataURL(selectedFile);

}
function onCheckImage(){
	var fileName = document.getElementById('userPhoto').value.toLowerCase();

	if(document.getElementById("userPhoto").value == ""){
		document.getElementById("displayPhoto").src = "https://playdices.github.io/images/profile.png";
	}
}


