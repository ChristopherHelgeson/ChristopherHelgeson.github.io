//var header = document.getElementsByTagName("h1")[0];
// header.innerHTML = "JavaScript FTW!";

const timeAtLoad = moment();

// Set the date string using formatting provided by moment.js
const dateString = timeAtLoad.format("dddd, MMMM Do, YYYY");
document.getElementById("current-date").textContent = dateString;

function startTime() {

  //digital clock
  const now = moment();
  const timeString = now.format("hh:mm:ss a");
  document.getElementById("current-time").textContent = timeString;

  //analog clock
  var second = now.seconds() * 6,
      minute = now.minutes() * 6 + second / 60,
      hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
  document.getElementById("hour").style.transform = "rotate(" + hour + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + minute + "deg)";
  document.getElementById("second").style.transform = "rotate(" + second + "deg)";

  const timeout = setTimeout(startTime, 500);
}

startTime();
