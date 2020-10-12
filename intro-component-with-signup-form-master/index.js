/**
 * 
 * let myInput = document.querySelector(".input-field");

if(something wrong){
    myInput.classlist.add("invalid");
}else{
   myInput.classlist.remove("invalid");
}
 * 
 * 
 */

 /*
 TODO:
 Hover states
 Receive an error message if 
    any input is empty
    the email is not formatted correctly
 */


const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
//const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})


function checkInputs(){
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fNameValue === ''){
        setErrorFor(fName, 'First Name cannot be empty');
    } else {
        setSuccessFor(fName);
    }

    if(lNameValue === ''){
        setErrorFor(lName, 'Last Name cannot be empty');
    } else {
        setSuccessFor(lName);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be empty');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Looks like this is not an email')
    } else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message){
    //we have "input" as one of the input query selectors. by grabbing the parent, we are able to access the div that controls that input.
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

