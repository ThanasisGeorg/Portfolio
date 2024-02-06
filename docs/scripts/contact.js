emailjs.init('CJRXtqvj9zUEw2_Y9');

function check_if_empty(element_name){
    var obj = document.forms["contact_form"][element_name].value;
    if(obj.value == ""){
        return false;
    }
    
    return true;
}

function check_message(){
    var message = document.forms["contact_form"]["message"].value;

    if(message.value == ""){
        message.innerHTML = "The message is empty"
        return false;
    } else if(String(message).length > 100){
        message.innerHTML = "The message exceeds the 100 characters"
        return false;
    }

    return true;
}

function send(){
    var ok_name = check_if_empty("name");
    var ok_surname = check_if_empty("surname");
    var ok_email = check_if_empty("email");
    var ok_message = check_message();

    if(ok_name && ok_surname && ok_email && ok_message){
        emailjs.sendForm('service_wwzd3vz', 'template_ltgep5g', document.getElementById("cont-form"))
                        .then(function() {
                            console.log('SUCCESS!');
                        }, function(error) {
                            console.log('FAILED...', error);
                        });
    }
}