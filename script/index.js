// Index.js
'use strict';

var body = document.querySelector('body');
var gsi = document.querySelector('google-signin');
var gsia = document.querySelector('google-signin-aware');

body.style.display = "none";

// gsi.click(function(e) {
gsi.signIn();
// });

var API_KEY = "AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw";
var CLIENT_ID = "844275130627-7o60j8u9qoe3rj50m5sib5m7ik8rig9q.apps.googleusercontent.com";

gsi.addEventListener('google-signin-aware-success', function (data) {
	readData(data);
});

function readData(data) {
	console.log(data);
	var access_token = data.detail.access_token;
	var id_token = data.detail.id_token;
	$.ajax({
		url: 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + access_token,
		success: function success(data) {
			console.log(data);
			var email = data.email;
			console.log(email);
			testEmail(email);
		}
	}).done(console.log('Finished'));
}

function getData() {
	$.ajax({
		url: 'https://www.googleapis.com/plusDomains/v1/people/me',
		data: 'token=' + CLIENT_ID,
		dataType: 'json',
		method: 'GET'
	}).done(function (data) {
		console.log(data);
	});
}

function testEmail(email) {
	var url = window.href;
	var domain = function domain(a) {
		console.log(a);
		a.split('@');
		console.log(a);
		a[1].split('.');
		console.log(a);
		if (a[1][0] === 'archermalmo') {
			return true;
		} else {
			return false;
		}
	};
	console.log(domain(email));
	if (domain(email)) {
		body.style.display = 'initial';
	} else {
		window.open('unauthorized.html', '_self');
	}
}