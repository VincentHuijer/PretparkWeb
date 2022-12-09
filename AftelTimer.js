window.onload = function() {
    var minute = 59;
    var sec = 59;
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + ":" + sec + " tijd over om tickets te bestellen";
      sec--;
      if (sec == 00) {
        minute --;
        sec = 60;
        if (minute == 0) {
          minute = 5;
        }
      }
    }, 1000);
  }
  