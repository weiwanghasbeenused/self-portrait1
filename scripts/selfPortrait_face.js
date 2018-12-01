var wWidth = window.innerWidth,
    wHeight = window.innerHeight;

var vid = document.getElementById('videoel');
var vid_width = wWidth;
var vid_height = wHeight;
var canv = document.getElementById('canv');
var canvCC = canv.getContext('2d');
var positions;
var current;

function adjustVideoProportions() {
          var proportion = vid.videoWidth/vid.videoHeight;
              vid_height = vid_width/proportion;
              vid.setAttribute('width', vid_width);
              vid.setAttribute('height', vid_height);
              canv.setAttribute('width', vid_width);
              canv.setAttribute('height', vid_height);
        }

function gumSuccess( stream ) {
  // add camera stream if getUserMedia succeeded
  if ("srcObject" in vid) {
    vid.srcObject = stream;
  } else {
    vid.src = (window.URL && window.URL.createObjectURL(stream));
  }
  vid.onloadedmetadata = function() {
    adjustVideoProportions();
    vid.play();
  }
  vid.onresize = function() {
    adjustVideoProportions();
    if (trackingStarted) {
      ctrack.stop();
      ctrack.reset();
      ctrack.start(vid);
    }
  }
}

function gumFail() {
  alert("There was some problem trying to fetch video from your webcam. If you have a webcam, please make sure to accept when the browser asks for access to your webcam.");
}

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

// check for camerasupport
if (navigator.mediaDevices) {
  navigator.mediaDevices.getUserMedia({video : true}).then(gumSuccess).catch(gumFail);
} else if (navigator.getUserMedia) {
  navigator.getUserMedia({video : true}, gumSuccess, gumFail);
} else {
  alert("This demo depends on getUserMedia, which your browser does not seem to support. :(");
}

var ctrack = new clm.tracker();
ctrack.init();
var trackingStarted = false;
    
function startVideo() {
          ctrack.start(vid);
          trackingStarted = true;
          drawLoop();
          // resizingBox();
        }
       
function drawLoop() {
  requestAnimFrame(drawLoop);
  if(ctrack.getCurrentPosition()){
    if(current==0){

    }
    positions = ctrack.getCurrentPosition();
    movingBox(current);
      // adjustSize();

  }
}

