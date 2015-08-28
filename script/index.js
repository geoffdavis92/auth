// Index.js
'use strict';

var gsi = document.querySelector('google-signin');
var gsia = document.querySelector('google-signin-aware');
gsi.click(function (e) {
	gsi.signIn();
});
var API_KEY = 'AIzaSyDsZhCsjTtHrLuLRPQKYfs7AaS3js8TIyw';
var CLIENT_ID = '844275130627-7o60j8u9qoe3rj50m5sib5m7ik8rig9q.apps.googleusercontent.com';

function readData() {
	gsia.on('google-signin-aware-success', function (data) {
		console.log(data);
	});
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