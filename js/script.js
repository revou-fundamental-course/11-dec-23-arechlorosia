var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
	showDivs(slideIndex += n)
	}

function showDivs(n){
	var i;
	var imgList = document.getElementsByClassName("pict");
	if (n > imgList.length) {slideIndex = 1}
	else if (n < 1) {slideIndex = imgList.length};
	for (i = 0; i < imgList.length; i++){
		imgList[i].style.display = "none";
	}
	imgList[slideIndex-1].style.display = "block";
	}
setInterval(() => {
	plusDivs(1);
}, 1000)

var nama = document.getElementById("name");
nama.addEventListener("keyup", function(event){
	var username = nama.value
	if (username == ""){
		document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!";
	}
	else{
		document.getElementById("error-name").innerHTML = "";
	}
	}
)

var email = document.getElementById("email");
email.addEventListener("keyup", function(event){
	var useremail = email.value
	if (useremail == ""){
		document.getElementById("error-email").innerHTML = "Email tidak boleh kosong!";
	}
	else{
		document.getElementById("error-email").innerHTML = "";
	}
	}
)

var message = document.getElementById("message");
message.addEventListener("keyup", function(event){
	var mess = message.value
	if (mess == ""){
		document.getElementById("error-mess").innerHTML = "Pesan tidak boleh kosong!";
	}
	else{
		document.getElementById("error-mess").innerHTML = "";
	}
	}
)
