document.getElementById("timestamp").innerHTML = "from aviationweather.js file";

// var app = express();

// for web scraping
// var fs = require('fs');
// var request = require('request');
// var cheerio = require('cheerio');

//app.get('/scrape', function(req, res){
  // The URL we will scrape from
  const aUrl = 'http://aviationweather.gov/metar/data?ids=KGRR&format=raw&date=0&hours=0';
  var airportCodeIndex = (url.indexOf("ids=") + 4);
  var airportCode = url.substr(airportCodeIndex, 4);

  var HttpClient = function() {
    this.get = function(aUrl, function(error, response, html)) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
  }

  var client = new HttpClient();
  client.get('http://some/thing?with=arguments', function(response) {
      // do something with response
  });

  document.getElementById("airport-code").innerHTML = airportCode;

  // The structure of our request call
  // The first parameter is our URL
  // The callback function takes 3 parameters, an error, response status code, and the html
  request(url, function(error, response, html){
    // First we'll check to make sure no errors occurred when making the requests
    if(!error){
      // Next, we'll utilize the cheerio library on the returned html which will essesntially give us jQuery functionality
      var $ = cheerio.load(html);
      // Finally we'll define the variables we're going to capture
      var json = { timestamp : "", weatherString : "" };
      // We'll use the unique header class as a starting point.
      $('#awc_main_content').find('b').filter(function(){
        // Let's store the data we filter into a variable so we can easily see what's going on
        var data = $(this);

        timestamp = data.text().trim();
        timestamp = timestamp.replace("Data at: ", "");
        console.log(timestamp);

        json.timestamp = timestamp;
        //document.getElementById("timestamp").innerHTML = timestamp;
        //document.getElementById("timestamp").textContent = timestamp;
      })

      $('#awc_main_content').filter(function(){
        // Let's store the data we filter into a variable so we can easily see what's going on
        var data = $(this);

        var weatherStart = data.text().indexOf(airportCode);
        var remarkStart = data.text().indexOf(" RMK");
        var weatherLength = remarkStart - weatherStart;
        weatherString = data.text().substr(weatherStart, weatherLength);
        json.weatherString = weatherString;
      })

    }

    // To write to the system we will use the built in 'fs' library.
    // In this example we will pass 3 parameters to the writeFile function
    // Parameter 1 :  *.json - this is what the created filename will be called
    // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
    // Parameter 3 :  callback function - a callback function to let us know the status of our function
    fs.writeFile('/public/json/aviationWeather.json', JSON.stringify(json, null, 4), function(err){
      console.log('File succesfully written! - check your project directory for the output.json file');
    })
    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('Check your console!')
  })
// })
