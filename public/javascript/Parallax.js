// wait until page is loaded before performing function
$(document).ready(function() {

  // when an 'a' tag is clicked . . .
  $("a").click(function() {
    // this.hash reads href attribute of current tag including the '#'
    if(this.hash){
      console.log(this.hash);
      // set 'hash' to the id without the '#' (i.e. start at index 1)
      var hash = this.hash.substr(1);
      console.log(hash);
      // set '$toElement' to ???
      var $toElement = $("[id="+hash+"]");
      console.log($toElement);
      // set 'toPosition' to top x value of the element container
      var toPosition = $toElement.position().top;
      console.log(toPosition);
      // for elements within either 'body' or 'html' tags, animate
      // transition from scrollTop (HTML property) to
      //toPosition (var defined above = top of element)
      // over 2000 milliseconds
      // and when complete, execute callback to 'easeOutExpo' function
      $("body,html").animate({
        scrollTop : toPosition
      },2000)
    }
  });
});
