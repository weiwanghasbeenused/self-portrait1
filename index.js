// var http = require('http');
// var fs = require('fs');
// const hostname = '127.0.0.1';
// const port = 3000;

// fs.readFile('./selfPortrait.html', function(err, html) {
//   if (err) {
//     throw err;
//   }
//   // create a server object:
//   http.createServer(function (req, res) {
//     res.writeHeader(200, {"Content-Type": "text/html"});
//     res.write(html); //write a response to the client
//     res.end(); // end the response
//   }).listen(port, hostname, () => {
//     console.log(`Server running at http:\/\/${hostname}:${port}/`);
//   });
// })




var SerialPort = require('serialport');
var WebSocketServer = require('ws').Server;
const Printer = require('thermalprinter');
const request = require('request');

var portName = "/dev/tty.usbmodem1411"; // get port name from the command line
var myPort = new SerialPort(portName, {
  baudRate: 19200,
  options: false
});

var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline("\r\n"); // make a new parser object to read ASCII lines
myPort.pipe(parser); // pipe the serial stream to the parser

myPort.on('open', showPortOpen);
myPort.on('close', showPortClosed);
myPort.on('error', showError);
parser.on('data', readSerialData); // using parser object instead of serialport object

// Callback functions
function showPortOpen() {
  console.log('Port open. Data rate: ' + myPort.baudRate);
}
function showPortClosed() {
  console.log('port closed.');
}
function showError() {
  console.log('Serial port error: ' + error);
}
function readSerialData(data) {
  console.log(`data: ${data}`);
  // Send the latest data to all available webSocket clients
  if (connections.length > 0) { // if there are webSocket connections
    broadcast(data); // send the serial data to all of them
  }
  /*
    d = start speech
    w = pause speech
    a = restart
    s = print
  */
  // if (data == "D\r") {
  //   console.log("Start Speech Recording");
  // }
  // if (data == "W\r") {
  //   console.log("Pause Speech Recording");
  // }
  // if (data == "A\r") {
  //   console.log("Restart");
  // }
  // if (data == "S\r") {
  //   console.log("Print");
  //   // broadcast(sayHello());
  // }
  

}


// Function to send webSocket data to the serialport:
function sendToSerial(data) {
  console.log("Sending to serial: " + data);
  myPort.write(data);
}


// create instance of WebSocketServer
var SERVER_PORT = 8081; // port number for the webSocket Server
var wss = new WebSocketServer({port: SERVER_PORT}); // the webSocket Server
var connections = new Array; // list of connections to the server

// webSocket event listeners
wss.on('connection', handleConnection);

function handleConnection(client) {
  console.log("New Connection"); // you have a new client
  connections.push(client); // add this client to the connections array

  client.on('message', sendToSerial); // when a client sends a message
  client.on('close', function() { // when a client closes its connection
    console.log("Connection Closed"); // print it out
    var position = connections.indexOf(client); // get the client's position in Array
    connections.splice(position, 1); // and delete it from array
  });
}

// Function to send serial data to the webSocket clients:
function broadcast(data) {
  for (myConnection in connections) { // iterate over the array of connections
    connections[myConnection].send(data); // send data to each connection
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
