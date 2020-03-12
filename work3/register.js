
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm")
	form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var firstname = document["myForm"]["firstname"];
    var lastname = document["myForm"]["Lastname"];
    var gender = document["myForm"]["gender"];
    var bday = document["myForm"]["bday"];
    var email = document["myForm"]["email"];
    var username = document["myForm"]["usename"];
    var password = document["myForm"]["password"];
    var repassword = document["myForm"]["repassword"];

    if(password.value == repassword.value){
        return true;
    }
    else{
        var errortext = document.getElementById("errormsg");
        errortext.innerHTML = "Error password";
        return false;
    }
}