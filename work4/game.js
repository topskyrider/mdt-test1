window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick= startGame;
}

function startGame(){
	clearScreen();
	alert("Ready!!!");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount,TIMER_TICK);
	 
	var timeLeft = 8

	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		timeLeft--;
		x.innerHTML = timeLeft
		if(timeLeft <=0){
			alert("time out");
			clearScreen();
			clearInterval(timer);
		}
		if(allbox.length <=0){
			alert("Clear");
			clearScreen();
			clearInterval(timer);

		}
		
	}
}

function addBox(){

	var numbox = document.getElementById("numbox").value;
	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color");
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop.value;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer div");

	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
		
	}
}




