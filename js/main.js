var comment = document.getElementById("content");
function printComments(data) {
	"use strict";
	
	for (var i = 0; i < data.length; i++) {

		var lang = data[i].lang;
		var image = data[i].image;
		var answer = data[i].answer;
		var question = data[i].question;

		if (image.length === 0 || image === " ") {
			image = "no-image.jpg";
		}

		comment.innerHTML += '<article class="' + lang + '"><div class="image"><img src="images/' + image + '" alt=""></div><div class="comment"><p>' + answer + '</p><h2>' + question + '</h2></div></article>';
	}
}
var members = document.getElementById("contributers");
function printContributors(contributors) {
	"use strict";
	
	for (var i = 0; i < contributors.length; i++) {

		var nickname = contributors[i].nickname;
		var pic = contributors[i].pic;
		var url = contributors[i].url;

		if (pic.length === 0 || pic === " ") {
			pic = "no-image.jpg";
		}

		members.innerHTML += '<li class="image"><img src="images/'+pic+'" alt="'+pic+'"><a href="'+url+'" target="_BLANK">'+nickname+'</a></li>';
	}
}



var git = document.getElementById('git');
git.addEventListener('click', function(){
	members.style.display = members.style.display == "block" ? "none" : "block";	

});



comment.addEventListener('click', function(){
	members.style.display = "none";
})