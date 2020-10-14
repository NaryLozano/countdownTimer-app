const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2021';

function countdown(){

    const newYearsDAte = new Date(newYears);
    const currentDate = new Date();
    //days
    const totalSeconds = (newYearsDAte - currentDate)/1000;
    const days = Math.floor(totalSeconds/3600 /24);
    //hours
    const hours = Math.floor(totalSeconds/3600) % 24;
    //mins
    const mins = Math.floor(totalSeconds/60) % 60;
    //seconds
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    
}

//show cero 0 before # if left just one digit.
function formatTime(time){
    return time < 10 ?`0${time}` : time;
}
// initial call
countdown();

setInterval(countdown,1000);


