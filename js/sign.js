let btnLogin = document.querySelector('#Btn');
let exist = document.querySelector('#exist');
let signName =  document.querySelector('#signName');
let signEmail = document.querySelector('#signEmail');
let signPassword = document.querySelector('#signPassword');

let dataInfo;

btnLogin.addEventListener('click', login);

function login() {
    let email = signEmail.value.trim();
    let pass = signPassword.value.trim();

    if (email === "" || pass === "") {
        console.log("All inputs are required");
        exist.classList.remove('d-none');
        return;
    }

    let dataInfo = JSON.parse(localStorage.getItem('user')) || [];
 
    let user = dataInfo.find(user => user.email === email && user.pass === pass);
    
    if (user) {
        localStorage.setItem('sessionUsername', user.name);
        alert("Login successful");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password!");
    }

}






