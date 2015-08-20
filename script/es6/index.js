// Index.js
let gsi = document.querySelector('google-signin')
$.ajax({
	url: 'https://www.googleapis.com/plusDomains/v1/people/me',
	dataType: 'json',
	method: 'GET'
}).done(function(data) {
	console.log(data)
})
