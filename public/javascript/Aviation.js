function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '/public/json/aviationWeather.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == 200) {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
    var timestamp = actual_JSON.timestamp;
    var weatherString = actual_JSON.weatherString;
    var weatherArray = weatherString.split(" ");

    weatherArray[0] = "Airport call letters: " + weatherArray[0];
    weatherArray[1] = "Date and time of reading: " + weatherArray[1];
    weatherArray[2] = "Wind direction and speed: " + weatherArray[2];
    weatherArray[3] = "Horizontal visibility: " + weatherArray[3];
    weatherArray[4] = "Cloud cover (lowest layer) and height above ground level: " + weatherArray[4];
    weatherArray[weatherArray.length - 2] = "Temperature and dewpoint: " + weatherArray[weatherArray.length - 2];
    weatherArray[weatherArray.length - 1] = "Altimeter setting: " + weatherArray[weatherArray.length - 1];

    document.getElementById("weather-string").innerHTML = "Raw string:  " + weatherString;
    // Add the contents of options[0] to #foo:
    document.getElementById('weather-list').appendChild(makeUL(weatherArray));
    document.getElementById("timestamp").innerHTML = "Data retrieved at: " + timestamp;
  });
}
init();

// SAVE FOR LATER - CREATE LIST DYNAMICALLY

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
