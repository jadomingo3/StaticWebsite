function Submit() {
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    message = document.getElementById("message").value;

    if (firstname == "" || lastname == "" || message == ""){
      document.getElementById("msg").innerHTML="Please fill up all fields.";
    } else {
      document.getElementById("msg").innerHTML="Thank you for submitting.";
    }
}

function resetInfo() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("message").value = "";
  document.getElementById("msg").innerHTML = " ";
}