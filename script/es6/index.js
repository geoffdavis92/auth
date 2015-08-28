// Index.js
let gsi = document.querySelector('google-signin')
let gsia = document.querySelector('google-signin-aware')
gsi.click(function(e) {
	gsi.signIn()
});
const API_KEY = "AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw"
const CLIENT_ID = "844275130627-7o60j8u9qoe3rj50m5sib5m7ik8rig9q.apps.googleusercontent.com"

gsi.addEventListener('google-signin-aware-success', function(data) {
	readData(data)
})

function readData(data) {
	console.log(data)
	let access_token = data.detail.access_token
	let id_token = data.detail.id_token
	$.ajax({
		url: `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${access_token}`,
		// data: `access_token=${API_KEY}`,
		success: function(data) {
			console.log(data)
		}
	}).done( console.log('Finished') )
}

function getData () {
	$.ajax({
		url: 'https://www.googleapis.com/plusDomains/v1/people/me',
		data: `token=${CLIENT_ID}`,
		dataType: 'json',
		method: 'GET'
	}).done(function(data) {
		console.log(data)
	})
}
