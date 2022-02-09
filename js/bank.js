function submit(){
    // Get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // Get user Password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;

    // Validation
    if(userEmail == 'son@gmail.com' && userPassword == '12345'){
        console.log('thik ase')
    }
    else{
        alert("thik nai.....valo kore mone kor")
    }
}