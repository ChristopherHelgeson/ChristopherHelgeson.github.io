document.getElementById("top-aviation").innerHTML = "TOP: check";

// const request = request();
// const rp = request-promise();
// const cheerio = cheerio();

document.getElementById("const-aviation").innerHTML = "AFTER CONSTs DECLARED: check";

var xhttp = new XMLHttpRequest,
    method = "GET",
    url = "http://aviationweather.gov/metar/data?ids=KGRR&format=raw&date=0&hours=0";
var airportCodeIndex = (url.indexOf("ids=") + 4);
var airportCode = url.substr(airportCodeIndex, 4);

function loadDoc() {
  //var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("weather-string").innerHTML = this.responseText;
    }
  };
  xhttp.open(method, url, true);
  xhttp.send();
}

loadDoc();

document.getElementById("website-call-aviation").innerHTML = "AFTER CALL TO WEBSITE: check";

document.getElementById("bottom-aviation").innerHTML = "BOTTOM: check";
