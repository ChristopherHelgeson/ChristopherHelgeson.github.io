var header = document.getElementsByTagName("h1")[0];
header.innerHTML = "JavaScript FTW!";

//CLOCK SCRIPT FOLLOWS:
const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
]

const dateString = date + " " + monthNames[month] + " " + year;

document.getElementById("current-date").textContent = dateString;

// function startTime() {
//
//   const now = new Date();
//
//   let hours = now.getHours();
//   const meridiem = hours >= 12 ? "pm" : "am";
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   hours = hours < 10 ? "0" + hours : hours;
//
//   let minutes = now.getMinutes();
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//
//   let seconds = now.getSeconds();
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//
//   const timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
//
//   document.getElementById("current-time").textContent = timeString;
//
//   const timeout = setTimeout(startTime, 500);
// }
//
// startTime();

//HERO CLOCK FROM MOMENT.JS
function updateClock() {
		        var now = moment(),
		            second = now.seconds() * 6,
		            minute = now.minutes() * 6 + second / 60,
		            hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
		        $('#hour').css("transform", "rotate(" + hour + "deg)");
		        $('#minute').css("transform", "rotate(" + minute + "deg)");
		        $('#second').css("transform", "rotate(" + second + "deg)");
		    }

function timedUpdate () {
    updateClock();
    setTimeout(timedUpdate, 1000);
}

timedUpdate();
