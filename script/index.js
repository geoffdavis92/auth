// Index.js
'use strict';

var gsi = document.querySelector('google-signin');
var gsia = document.querySelector('google-signin-aware');
gsi.click(function (e) {
	gsi.signIn();
});
var API_KEY = 'AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw';
var CLIENT_ID = '844275130627-7o60j8u9qoe3rj50m5sib5m7ik8rig9q.apps.googleusercontent.com';

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
			var user_id = data.user_id;
			$.ajax({
				url: 'https://plus.google.com/' + user_id,
				success: function success(profile) {
					console.log('Getting profile');
					console.log(profile);
				}
			});
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