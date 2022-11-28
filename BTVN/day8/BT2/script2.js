
function validName() {
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
  }

function passport() {
    var passport = document.getElementById("passport").value;
    if (passport.lenght !== 8) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
        return false;
    }
}
