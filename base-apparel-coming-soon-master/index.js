const email1 = document.getElementById('email');
const form1 = document.getElementById('form');

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs1();
})

function checkInputs1(){
    const emailValue1 = email.value.trim();

    if(emailValue1 === ''){
        setErrorFor1(email1, 'Email cannot be empty');
    } else if(!isEmail(emailValue)){
        setErrorFor1(email1, 'Looks like this is not an email')
    } else{
        setSuccessFor1(email1);
    }
}

function setErrorFor1(input, message){
    const parent1 = input.parentElement;
    const error1 = parent1.querySelector('small');

    input.className='error-input';

    error1.innerText = message;

    error1.className = 'error';
}