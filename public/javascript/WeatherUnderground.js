jQuery(document).ready(function($) {
  $.ajax({
  url : "https://api.wunderground.com/api/12b8a40c145b360a/geolookup/conditions/q/MI/Grand_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
    var obs_time = parsed_json['current_observation']['observation_time'];
    var full_loc = parsed_json['current_observation']['display_location']['full'];
    var weather = parsed_json['current_observation']['weather'];
    var temperature = parsed_json['current_observation']['temperature_string'];
    var dewpoint = parsed_json['current_observation']['dewpoint_string'];
    var humidity = parsed_json['current_observation']['relative_humidity'];
    var wind_string = parsed_json['current_observation']['wind_string'];
    var pressure_in = parsed_json['current_observation']['pressure_in'];
    var pressure_trend = parsed_json['current_observation']['pressure_trend'];
    var icon = parsed_json['current_observation']['icon'];
  document.getElementById("obs_time").innerHTML = (obs_time);
  document.getElementById("full_loc").innerHTML = ("Observation for: " + full_loc);
  document.getElementById("weather").innerHTML = ("Weather: " + weather);
  document.getElementById("temperature").innerHTML = ("Temperature: " + temperature);
  document.getElementById("dewpoint").innerHTML = ("Dewpoint: " + dewpoint);
  document.getElementById("humidity").innerHTML = ("Humidity: " + humidity);
  document.getElementById("wind").innerHTML = ("Wind: " + wind_string);
  document.getElementById("pressure").innerHTML = ("Pressure: " + pressure_in + " " + pressure_trend);
  document.getElementById("icon").innerHTML = ("<img src='public/images/weather-underground-icons/dist/icons/white/png/256x256/" + icon + ".png'>");

  //check if id weather-body exists -- removed from body tag so parallax will work
  if(document.getElementById("weather-body")) {
  if (weather === "Overcast" || weather === "Cloudy" || weather === "Mostly Cloudy") {
    document.getElementById("weather-body").style.backgroundImage = "url('public/images/Background-Cloudy.jpg')";
  }
  else if (weather === "Foggy") {
    document.getElementById("weather-body").style.backgroundImage = "url('public/images/Background-Foggy.png')";
  }
  else if (weather === "Rain" || weather === "Showers") {
    document.getElementById("weather-body").style.backgroundImage = "url('public/images/Background-Rain.jpg')";
  }
  else if (weather === "Snow" || weather === "Flurries") {
    document.getElementById("weather-body").style.backgroundImage = "url('public/images/Background-Snow.jpg')";
  }
  else if (weather === "Sunny" || weather === "Clear") {
    document.getElementById("weather-body").style.backgroundImage = "url('public/images/Background-Sunny.jpg')";
  }
  else if (weather === "Partly Cloudy") {
    document.getElementById("weather-body").style.backgroundImage = "url('public/images/Background-PartlyCloudy.jpg')";
  }
  else {
    document.getElementById("weather-body").style.backgroundImage = "url('public/images/Background-NoPhoto.jpg')";
  }
  }
  }
  });
});
