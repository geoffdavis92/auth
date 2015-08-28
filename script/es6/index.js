// Index.js
let gsi = document.querySelector('google-signin')
let gsia = document.querySelector('google-signin-aware')
gsi.click(function(e) {
	gsi.signIn()
});
const API_KEY = "AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw"
const CLIENT_ID = "844275130627-7o60j8u9qoe3rj50m5sib5m7ik8rig9q.apps.googleusercontent.com"

gsi.addEventListener('google-signin-aware-success', readData(data))

function readData(data) {
	let access_token = data.detail.access_token
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
