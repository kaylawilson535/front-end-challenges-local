function KeyPressed(e){
    let key = e.keyCode || e.which;
    if (key == 13){
        e.preventDefault();
        EmailSubmitted();
    } else{
        //
    }
}

function EmailSubmitted(){
    let email = document.getElementById("email").value;

    if(validateEmail(email)){
        console.log(email);
        //Validate(); //gives user positive feedback
    } else{
        Invalidate();
    }
    
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function Invalidate(obj){
    var invalidate = document.createElement('style');
    invalidate.innerHTML = 
    `
    .error-text{
        display: block;
        font-size: .8rem;
        color: hsl(354, 100%, 66%);
        padding-top: .5rem;
        transform: translateX(-2rem);
        font-style: italic;
    }

    input{
        border-color: hsl(354, 100%, 66%);
    }
    `;

    document.head.appendChild(invalidate);

    console.log("Please enter a valid email");
}