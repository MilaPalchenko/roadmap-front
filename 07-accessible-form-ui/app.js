function validateForm() { 
    let fullName = document.forms["formUI"]["full-name"].value;
    let email = document.forms["formUI"]["email"].value;

    if (fullName == "") { 
        alert("You must input NAME!");
        return false;
    }
    if (email == "") { 
        alert("You must input EMAIL!")
        return false;
    }
 }