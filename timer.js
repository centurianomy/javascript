//define variables

let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("strt");
let pauseBtn = document.getElementById("paus");
let restartBtn = document.getElementById("rstrt");

let count = 0;
let timer;

//start
//using event listeners
startBtn.addEventListener("click", function (){

	timer = setInterval(function () {  //timer = value returned by setInterval()
		count++;
		timerDisplay.innerText = count;

		if(count == 20){
			clearInterval(timer);
		}
	}, 1000);
});


//pause

pauseBtn.addEventListener("click", function(){
	clearInterval(timer); //stop this interval id i.e. (timer)  
});

//restart

restartBtn.addEventListener("click", function(){
	clearInterval(timer);
	count = 0;
	timerDisplay.innerText = count;
});