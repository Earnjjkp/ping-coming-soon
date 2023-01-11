let emailBox = document.getElementById("input-email");
let Submit = document.getElementById("btn-submit");
let Textshow = document.getElementById("Error");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function CheckEmail(){
    if(emailBox.value == ""){
        Textshow.innerHTML = "Please input your email.";
        Textshow.style.color = "red";
        emailBox.style.borderColor = "red";
    }
    else if(emailBox.value.match(mailformat)){
        Textshow.innerHTML = "Success, Thank you.";
        Textshow.style.color = "green";
        emailBox.style.borderColor = "green";
    }
    else{
        Textshow.innerHTML = "You have entered an invalid email address. Please try again.";
        Textshow.style.color = "red";
        emailBox.style.borderColor = "red";
    }
}