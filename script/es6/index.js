// Index.js
let gsi = document.querySelector('google-signin')
const API_KEY = "AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw"
const CLIENT_ID = "844275130627-7o60j8u9qoe3rj50m5sib5m7ik8rig9q.apps.googleusercontent.com"
$.ajax({
	url: 'https://www.googleapis.com/plusDomains/v1/people/me',
	data: `${API_KEY}`,
	dataType: 'json',
	method: 'GET'
}).done(function(data) {
	console.log(data)
})
