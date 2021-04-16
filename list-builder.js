/*function openNav() {
    document.getElementById("mySideNav").style.width=250px;
}

function closeNav() {
    document.getElementById("mySideNav").style.width="0";
}*/

/*function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742, -0.120850),
        zoom:5,
    };
    var map= new google.maps.Map(document.getElementById("GoogleMap"),mapProp);
}*/

/* Log In Validation */
function log_in() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (
    username == "" ||
    password == "" ||
    password.length < 9 ||
    password.length > 9
  ) {
    alert("You must enter username and 9 character password");
    return false; //this specifies that there must be input into both username and password, and password must be a length of 9 characters
  } else {
    return true;
  }
}
$(document).ready(function () {
  /*Log In Show / Hide - not working */
  $("#ForgotPasswordButton").click(function () {
    $("#ForgotPasswordForm").hide();
  });
});
