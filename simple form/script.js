// Function to check Whether both passwords is same or not.
function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
  
    // If password not entered
    // if (password1 == '')
    // alert ("Please enter Password");
                      
    // If confirm password not entered
    // else if (password2 == '')
    // alert ("Please enter confirm password");
                      
    // If Not same return False.    
    if (password1 != password2) {
      alert ("\nPassword did not match: Please try again...")
      return false;
    }
  
    // If same return True.
    else{
      // alert("Registration successful")
      return true;
    }
}

// function doClick() {
//   alert("  you have successfully registered!");
// }

// function for password eye symbol toggle
function eyeToggle1() {
    // getting the password boxes using class
    const x = document.getElementById("psw");
    // getting the icon so i can change it
    const icon1 = document.getElementById("icon1");
    // toggle depending of the current type
    if (x.type === "password"){
        x.type="text";
        // change eye icon to the slashed one when clicked
        icon1.innerText = "visibility_off"
    }
    else{
        x.type="password";
        // change eye icon back when clicked
        icon1.innerText = "visibility"
    }
}
// function for confirm password eye symbol toggle
function eyeToggle2() {
    // getting the password boxes using class
    const x = document.getElementById("psw-repeat");
    // getting the icon so i can change it
    const icon2 = document.getElementById("icon2");
    // toggle depending of the current type
    if (x.type === "password"){
        x.type="text";
        // change eye icon to the slashed one when clicked
        icon2.innerText = "visibility_off"
    }
    else{
        x.type="password";
         // change eye icon back when clicked
         icon2.innerText = "visibility"
    }
}

