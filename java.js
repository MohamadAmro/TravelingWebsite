

// Get the modal
var modal = document.getElementById('id01');
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "null";
    }
}
function alerte() {
  if(document.getElementById("usrn").value == "" || document.getElementById("pass").value == ""){
    alert("Invalid username or password");
  }
  else{
    alert("You logged in");
    document.getElementById('id01').style.display="none";
  }
  }
 
  function bookalert() {
    if(document.getElementById("country").value == ""){
      alert("You missed something");
    }
    else{
      alert("You booked your appointment");
    }
  } 

  function subscribe(){
    if(document.getElementById("email").value == ""){
    alert("Invalid email entered");
    }
    else{
      alert("You subscribed to look to all news");
    }
  }
  function thanks(){
    if(document.getElementById("form-control-name").value == ""){
      alert("Invalid name or email entered");
    }
    else{
      alert("Thank You for contacting us we will respond to you as soon as possible. Have a nice day :)");
    }
  }