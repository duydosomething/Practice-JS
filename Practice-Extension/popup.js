document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('button');
	var container = document.getElementById('container');
	var imagesArray = ['blank.jpg', 'Kanna_F.png']
	button.addEventListener('click', function(){
		var num = Math.floor(Math.random() * (imagesArray.length));
		document.catImage.src = imagesArray[num];
	}, false);
}, false);