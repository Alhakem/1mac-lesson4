function printComments(data) {
	"use strict";
	var comment = document.getElementById("content");
	for (var i = 0; i < data.length; i++) {

		var lang = data[i].lang;
		var image = data[i].image;
		var answer = data[i].answer;
		var question = data[i].question;

		if (image.length === 0) {
			image = "no-image.jpg";
		}

		comment.innerHTML += '<article class="' + lang + '"><div class="image"><img src="images/' + image + '" alt=""></div><div class="comment"><p>' + answer + '</p><h2>' + question + '</h2></div></article>';
	}
}
