function checkIfEmpty(){
    var name_cont = document.forms["contact_form"]["name"].value;
    var surname_cont = document.forms["contact_form"]["surname"].value;
    var email_cont = document.forms["contact_form"]["email"].value;
    var msg_cont = document.forms["contact_form"]["message"].value;
    if(name_cont == "" || surname_cont == "" || email_cont == "" || msg_cont == "") {
        alert("Fill all the areas");
        return;
    }
    else{
        alert("Your message sent");
    }
}