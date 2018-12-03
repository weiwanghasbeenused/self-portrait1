// var text; // variable for the text div to be created
var socket = new WebSocket('ws://localhost:8081');

function setup() {
  // event listeners for socket connection
  socket.onopen = openSocket;
  socket.onmessage = showData;
}

// openSocket and showData callback functions for webSocket's event listeners
function openSocket() {
  // text.html('Socket open');
  socket.send('Hello server');
}
// whenever new data arrives from server, this function will be called automatically, so there is no need for a draw() function
function showData(result) {
  if (result.data == "D\r") {
    console.log("Starting Recording");
    startRec();
  }
  if (result.data == "W\r") {
    console.log("Pausing Recording");
    pauseRec();
  }
  if (result.data == "A\r") {
    console.log("Restarting Recording");
    restart();
  }
  if (result.data == "S\r") {
    console.log("Printing");
    printing();
  }
}


/*
NOTE: when p5.js returns the result of a request, it returns the string as an array with one element. If planning on manipulating that string with functions like parseInt(), split(), and other string handling functions, make sure to get the string out of the array first. Example of spliting the array:
function showData(result) {
  var resultString = result.data;
  text.html("Sensor reading:" + resultString);
  // split it:
  var numbers = split(resultString, ",");
  // use the numbers:
  text.position(int(numbers[0]), int(numbers[1]));
  text.style("font-size", int(numbers[2]) + "%");
}
*/
