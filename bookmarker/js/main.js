// Listening for event
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save bookmark
function saveBookmark(e){
	// get form values
	var siteName = document.getElementById('siteName').value;
	var siteURL = document.getElementById('siteURL').value;

	
	if(!validateForm(siteName, siteURL)){
		return false;
	}


	var bookmark = {
		name:siteName,
		url: siteURL
	}



	/*
	// local storage test
	localStorage.setItem('test', 'Hellow World');
	console.log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));
	*/

	// Test if bookmarks is null
	if(localStorage.getItem('bookmarks') === null){
		// Initialize bookmark array
		var bookmarks =[];
		// Add to array
		bookmarks.push(bookmark);
		// Set to localstorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	}
	else {
		// Get bookmarks from local storage

		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		// add bookmark to array
		bookmarks.push(bookmark)
		// Reset back to localstorage

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	// Clear form
	document.getElementById('myForm').reset;

	// Fetch bookmark call
	fetchBookmarks();
	// Prevents form from submitting
	e.preventDefault();
}
//Delete bookmark
function deleteBookmark(url){
	// Get bookmarks from local storage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// loop through and search for url
	for(var i = 0; i < bookmarks.length; i++){
		if(bookmarks[i].url == url){
			// Remove from array
			bookmarks.splice(i, 1);
		}
	}
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	//Re-fetch bookarms
	fetchBookmarks();
	
}
// Fetch bookmarks

function fetchBookmarks(){
	// Get bookmarks from local storage

	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');

	// build output
	bookmarksResults.innerHTML = '';
	for(var i = 0; i < bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarksResults.innerHTML += '<div class="well">'+
										'<h3>' +name +
										' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+
										' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> '+
										'</h3>'+
										'</div>';

	}
}
// Validate form
function validateForm(siteName, siteURL){
	if(!siteName || !siteURL){
		alert('Please fill in the form');
		return false;
	}
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);
	if(!siteURL.match(regex)){
		alert('Please use valid URL');
		return false
	}
	return true;
}