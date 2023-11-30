let startStopBtn = document.querySelector('#startStopBtn');
let resetBtn = document.querySelector('#resetBtn');

// Variables for timer

let seconds = 0;
let minutes = 0;
let hours = 0;

//Varibale for leading 0

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval and timer status

let timerInterval = null;
let timerStatus = 'stopped'

// function for Timer

function stopWatch() {

    seconds++;

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }


    leadingSeconds = (seconds < 10) ? "0" + seconds.toString() : seconds;
    leadingMinutes = (minutes < 10) ? "0" + minutes.toString() : minutes;
    leadingHours = (hours < 10) ? "0" + hours.toString() : hours;


    let displayTimer = document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds

}

// window.setInterval(stopWatch, 100) 

startStopBtn.addEventListener('click', function() {

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i id="pause" class="fa-solid fa-pause" ></i>'
        timerStatus = "started"
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i id="play" class="fa-solid fa-play" ></i>'
        timerStatus = "stopped"
    }
})

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = "00:00:00" 
})