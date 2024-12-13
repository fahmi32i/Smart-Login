let username = localStorage.getItem('sessionUsername');

if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username;
} else {
    window.location.href = "login.html";
}

