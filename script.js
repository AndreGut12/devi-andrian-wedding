const Days = document.getElementById('days')
const Hours = document.getElementById('hours')
const Minutes = document.getElementById('minutes')
const Second = document.getElementById('second')

const targetDate = new Date("May 3 2025 00:00:00").getTime()

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance/ 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const second = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML= minutes;
    Second.innerHTML=second;

    if(distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Second.innerHTML = "00";
    }
}

setInterval(timer, 1000);

