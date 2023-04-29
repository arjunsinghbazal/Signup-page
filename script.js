let pwd1 = document.getElementById('password');
let pwd2 = document.getElementById('confirmPassword');
let fullname = document.getElementById('fullName');
let email = document.getElementById('email');
let red = document.getElementById('red');
let form=document.getElementById('form');
let showData=document.querySelector('.showData');
let loader=document.getElementById('loader');
let button = document.getElementById('btn');
let fname=document.getElementById('fname');
let email1=document.getElementById('email1');
let pass=document.getElementById('pass');
let profile=document.getElementById('btn2');
//show profile details
profile.addEventListener("click", (e) => {
    e.preventDefault();
    if (localStorage.getItem('FullName') && localStorage.getItem('Email') && localStorage.getItem('Password')) {
        showData.style.display = "block";
        red.style.display = "none";
        form.style.display="none";
        fname.innerText = localStorage.getItem('FullName');
        email1.innerText = localStorage.getItem('Email');
        pass.innerText = localStorage.getItem('Password');
    } else {
        alert("Please sign up first!");
    }
});
//close profile page
let closeButton = document.getElementById('closeButton');
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    showData.style.display = "none";
    form.style.display = "block";
    red.style.display="none";
});
///signup
button.addEventListener("click",(e)=>{
    e.preventDefault();
    ///if already have data
    if (localStorage.getItem('FullName') && localStorage.getItem('Email') && localStorage.getItem('Password')) {
        alert("Already signed up!");
        return;
    }
    if (validateForm()) {
        // save to local storage;
     localStorage.setItem('FullName',fullname.value);
      localStorage.setItem("Email",email.value);
     localStorage.setItem('Password', "****" + pwd1.value.slice(-4));
       pwd1.value="";
       fullname.value="";
       email.value="";
       pwd2.value="";
        setTimeout(()=>{
        form.style.display="none";
        loader.style.display="block";
        fname.innerText = localStorage.getItem('FullName');
        email1.innerText = localStorage.getItem('Email');
        pass.innerText = localStorage.getItem('Password');
        setTimeout(()=>{
            loader.style.display="none";
            showData.style.display="block";
        },2000);
        },1000)
    }
});
//logout button
let logout=document.getElementById('btn1');
logout.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.clear();
    form.style.display="block";
    alert("Are you Sure to Logout")
    showData.style.display="none";
    red.style.display="none";
})

if(localStorage.getItem('FullName')&&localStorage.getItem('Email')&&localStorage.getItem('Password')){
    fullname.value=localStorage.getItem('FullName')
    email.value=localStorage.getItem('Email')
    pwd1.value=localStorage.getItem('Password')
}
///validation for inputs in form
function validateForm() {
    let emailValue = email.value.trim();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!isValidEmail) {
        red.style.display = "block";
        red.style.color = "red";
        red.innerText = "Error: Please enter a valid email address";
        return false;
    }

    if (pwd1.value.trim() != pwd2.value.trim()) {    
        red.style.display="block";
        red.style.color="red";
        red.innerText = "Error: Passwords did not match";
        return false;
    } else {
        if (fullname.value == "" || emailValue == "" || pwd1.value == "" || pwd2.value == "") {
            red.style.display="block";
            red.style.color="red";
            red.innerText = "Error: All fields are mandatory";
            return false;
        } else {
            red.style.display="block";
            red.style.color="green";
            red.innerText = "Successfully Signed Up!";
            return true;
        }
    }
}
