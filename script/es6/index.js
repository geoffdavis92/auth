// Index.js
const body = document.querySelector('body')
let gsi = document.querySelector('google-signin')
let gsia = document.querySelector('google-signin-aware')

body.style.display = "none"

// gsi.click(function(e) {
	gsi.signIn()
// });

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
		success: function(data) {
			console.log(data)
			let email = data.email

			testEmail(email)

			let user_id = data.user_id
			// $.ajax({
			// 	url: `https://www.googleapis.com/plus/v1/people/${user_id}`,
			// 	success: function(profile) {
			// 		console.log('Getting profile')
			// 		console.log(profile)
			// 	}
			// })
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

function testEmail(email) {
	let url = window.href
	let domain = (a) => {
		a.split('@')
		a[1].split('.')
		if (a[1][0] === 'archermalmo') {
			return true
		} else {
			return false
		}
	}
	if (domain(email)) {
		body.style.display = 'initial'
	} else {
		window.open('unauthorized.html', '_self')
	}
}
