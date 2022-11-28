
function validName() {
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
  }

function validPassport() {
    var passport = document.getElementById("passport").value;
    a = passport.indexOf("/^(A-Z)/");

    if (a === "" || a > 1) {
        
    }

}