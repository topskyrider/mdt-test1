function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }
 var keeplogin;
 var parameter

window.onload = loginLoad;
function loginLoad(){
	keeplogin = document.getElementById("myLogin");
	keeplogin.onsubmit = checkLogin;
	// วิธีใช้ getParams()
	 parameter = getParams();
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if(keeplogin.username.value == parameter["username"] && 
	keeplogin.password.value == parameter["password"]){
		alert("Login Complete");
	}
	else{
	alert("Username or Password Wrong!");
	return false;
	}
}

			