var btnSign = document.querySelector('button');
var exist =  document.querySelector('#exist');
var signName =  document.querySelector('#signName');
var signEmail =  document.querySelector('#signEmail');
var signPassword =  document.querySelector('#signPassword');

btnSign.addEventListener('click',signUp)

let dataInfo;

if(localStorage.getItem('user') !== null){
    dataInfo = JSON.parse(localStorage.getItem('user'));
}else{
    dataInfo = [];
}

function signUp() {
    if (signName.value === "" || signEmail.value === "" || signPassword.value === "") {
        console.log(exist);
        exist.classList.remove('d-none');
        return;
    } else {
        exist.classList.add('d-none'); 
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signEmail.value.trim())) {
        alert("Invalid email format!");
        return;
    }

    if (signPassword.value.trim().length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    let isExistingUser = dataInfo.some(user => user.email === signEmail.value);
    if (isExistingUser) {
        alert("Email already exists!");
        return;
    }

    let data = {
        name:signName.value,
        email:signEmail.value,
        pass:signPassword.value,
    }
    dataInfo.push(data);
    localStorage.setItem('user',JSON.stringify(dataInfo))
    reset();
  
}

function reset (){
    signName.value = "";
    signEmail.value = "";
    signPassword.value = "";
}








