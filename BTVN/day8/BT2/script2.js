
function validName() {
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
  }

function passport1() {
    var passports = document.getElementById("passport").value;
    var length = passports.length;
    var pattern = new RegExp("/^[A-Z]")
    if (length = 8) {
        alert( "Nhập 8 kí tự" );
        document.myForm.Name.focus() ;
        return false;
    }else if (length = pattern ) {
        arler("Nhập chữ cái đầu viết hoa")
    }
    document.getElementById("mess").innerHTML = 'lỗi';
    
}
