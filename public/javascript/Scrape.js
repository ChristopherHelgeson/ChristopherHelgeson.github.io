document.getElementById("timestamp").innerHTML = "top of scrape.js file";

const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');
document.getElementById("timestamp").innerHTML = "later";

const options = {
  uri: `http://aviationweather.gov/metar/data?ids=KGRR&format=raw&date=0&hours=0`,
  transform: function (html) {
    return cheerio.load(html);
  }
};

document.getElementById("timestamp").innerHTML = "before rp";

rp(options)
  .then(function (data) {
    console.log("success")
  })
  .catch(function (err) {
    console.log("failure");
  });

document.getElementById("timestamp").innerHTML = "after rp";
