const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

const newyears = "1 Jan 2022";

function countdown(){
    const newYearDate = new Date(newyears);
    const currentDate = new Date();

    const totalseconds = new Date(newYearDate-currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 /24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds) % 60;
    daysSpan.innerHTML = days +" :";
    hoursSpan.innerHTML = formatTime(hours)+" :";
    minutesSpan.innerHTML = formatTime(minutes)+" :";
    secondsSpan.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? "0"+time : time;
}

countdown();

setInterval(countdown,1000);

