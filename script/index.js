// Index.js
'use strict';

if (window.location.href === 'http://geoffdavis92.github.io/auth/unauthorized.html') {
    // Close out after 10 seconds
    var timeout = setTimeout(function () {
        window.close();
    }, 5000);
} else {
    (function () {
        var readData = function readData(data) {
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
        };

        var getData = function getData() {
            $.ajax({
                url: 'https://www.googleapis.com/plusDomains/v1/people/me',
                data: 'token=' + CLIENT_ID,
                dataType: 'json',
                method: 'GET'
            }).done(function (data) {
                console.log(data);
            });
        };

        var testEmail = function testEmail(email) {
            var url = window.href;
            var domain = function domain(a) {
                a = a.split('@');
                a = a[1].split('.');
                if (a[0] === 'archermalmo') {
                    return true;
                } else {
                    return false;
                }
            };
            if (domain(email)) {
                body.style.display = 'initial';
            } else {
                window.open('unauthorized.html', '_self');
            }
        };

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
    })();
}