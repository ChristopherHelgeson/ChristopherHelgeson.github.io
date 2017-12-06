jQuery(document).ready(function() {
  var userAgentString = navigator.userAgent;
  document.getElementById("user-agent-string").innerHTML = ("COMPLETE userAgent STRING: " + userAgentString);

  // determine browser
  if ((userAgentString.search("Firefox") > -1) && (userAgentString.search("Seamonkey") == -1)) {
    var browser = "Firefox";
  } else if ((userAgentString.search("Edge") == -1) && (userAgentString.search("Chrome") > -1)) {
    var browser = "Chrome";
  // } else if (userAgentString.search("Opera"|"OPR") > -1) {
  //   var browser = "Opera";
  } else if (userAgentString.search("Edge") > -1) {
    var browser = "Edge";
  } else if ((userAgentString.search("Chrome") == -1) && (userAgentString.search("Chromium") == -1) && (userAgentString.search("Safari") > -1)) {
    var browser = "Safari";
  } else {
    var browser = "not able to detect.";
  };
  document.getElementById("browser-type").innerHTML = ("BROWSER: " + browser);

  // determine whether mobile device
  if (userAgentString.search("iPad") > -1) {
    var mobileType = "iPad";
  } else if (userAgentString.search("iPhone") > -1) {
    var mobileType = "iPhone";
  } else if (userAgentString.search("iPod") > -1) {
    var mobileType = "iPod";
  } else {
    var mobileType = "not an Apple mobile device";
  };
  document.getElementById("device-type").innerHTML = ("DEVICE TYPE: " + mobileType);

  // determine operating system
  if (userAgentString.search("Windows") > -1) {
    var opSys = "Windows";
  } else if (userAgentString.search("OS") > -1) {
    var opSys = "iOS";
  } else {
    var opSys = "Unix";
  };
  document.getElementById("operating-system").innerHTML = ("OPERATING SYSTEM: " + opSys);

});

// determine screen size
function gatherSizeInfo() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var documentWidth = document.documentElement.clientWidth;
  var documentHeight = document.documentElement.clientHeight;
  var containerWidth = document.getElementById("size").clientWidth;
  var containerHeight = document.getElementById("size").clientHeight;

  document.getElementById("screen-size").innerHTML = ("SCREEN SIZE: " + screen.width + "w X " + screen.height + "h");
  document.getElementById("window-size").innerHTML = ("WINDOW SIZE: " + windowWidth + "w X " + windowHeight + "h");
  document.getElementById("document-size").innerHTML = ("DOCUMENT SIZE: " + documentWidth + "w X " + documentHeight + "h");
  document.getElementById("body-size").innerHTML = ("BOX SIZE: " + containerWidth + "w X " + containerHeight + "h");
}

// run function at least once to populate page
gatherSizeInfo();

// if window changes size, re-run the function
window.addEventListener("resize", function() {
  "use strict";
  gatherSizeInfo();
});
