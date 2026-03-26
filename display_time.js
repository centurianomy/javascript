function showTime(){
    let now=  new Date(); //create a new date object to get the current date and time
    let hours=now.getHours();//get the current hours, minutes, and seconds
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    if(hours<10){   
        hours="0" + hours; //add a leading zero to hours if it is less than 10
    }
    if(minutes<10){
        minutes="0" + minutes;
    }
    if(seconds<10){
        seconds="0" + seconds;
    }

    let time=hours + ":" + minutes + ":" + seconds;
    document.getElementById("clk").innerHTML=time;
}

setInterval(showTime, 1000);
showTime();