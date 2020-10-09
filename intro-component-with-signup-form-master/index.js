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
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if(fName.value === '' || name.value == null){
        messages.push('Name is required')
    }

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
    e.preventDefault();
})
