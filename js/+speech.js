var wWidth = window.innerWidth,
    wHeight = window.innerHeight;

var vid = document.getElementById('videoel');
var vid_width = wWidth;
var vid_height = wHeight;
var canv = document.getElementById('canv');
var canvCC = canv.getContext('2d');
var proportion2 = [];
var rate = 1.5;
var imagePath;
var rec;
var resultText = [];
var divNum = 13;
var currentBox = 1;
var textHeight;

for(i=0;i<divNum;i++){
  $("body").append("<div id='rT"+(i+1)+"'class = 'resultText'><h2></h2></div>");
}

function setup(){
  noCanvas();
  strokeWeight(3);
  stroke(0);
  fill(255);
  textSize(32);

  rec = new p5.SpeechRec(); 
  rec.continuous = true; // do continuous recognition
  rec.interimResults = true; // allow partial recognition (faster, less accurate)
  rec.onResult = showResult;
  rec.start(); // start engine 
}

function showResult(){
    if(rec.resultValue){
      if(rec.resultString!=resultText[resultText.length-1]){
          
        resultText.push(rec.resultString);
        console.log(rec.resultString,resultText);
        $(".resultText").find("h2").empty();
        currentBox=1;
        $.each( resultText, function(i,val) {
        console.log(currentBox);
          textHeight = $("#rT"+currentBox).find("h2").height();
          if(textHeight<$("#rT"+currentBox).height()){
            $("#rT"+currentBox).find("h2").append(val+" ");
              // resizeText(s);
          }else{
            $("#rT"+(currentBox+1)).find("h2").append(val+" ");
            currentBox++;
          }
        });
      }
      

    }
  }
    
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
        }
       
function drawLoop() {
  requestAnimFrame(drawLoop);
  canvCC.clearRect(0, 0, vid_width, vid_height);
  if (ctrack.getCurrentPosition()) {
    // console.log("found face");
    ctrack.draw(canv);
    var positions = ctrack.getCurrentPosition();
    $("#rT1").css({"top":positions[20][1]+"px","left":positions[0][0]+"px","width":(positions[14][0]-positions[0][0])+"px","height":(positions[24][1]-positions[20][1])+"px"});
    $("#rT2").css({"top":positions[24][1]+"px","left":positions[0][0]+"px","width":(positions[23][0]-positions[0][0])+"px","height":(positions[26][1]-positions[24][1])+"px"});
    $("#rT3").css({"top":positions[24][1]+"px","left":positions[25][0]+"px","width":(positions[30][0]-positions[25][0])+"px","height":(positions[26][1]-positions[24][1])+"px"});
    $("#rT4").css({"top":positions[24][1]+"px","left":positions[28][0]+"px","width":(positions[14][0]-positions[28][0])+"px","height":(positions[26][1]-positions[24][1])+"px"});
    $("#rT5").css({"top":positions[26][1]+"px","left":positions[1][0]+"px","width":(positions[13][0]-positions[1][0])+"px","height":(positions[62][1]-positions[26][1])+"px"});
    $("#rT6").css({"top":positions[62][1]+"px","left":positions[2][0]+"px","width":(positions[35][0]-positions[2][0])+"px","height":(positions[37][1]-positions[62][1])+"px"});
    $("#rT7").css({"top":positions[62][1]+"px","left":positions[39][0]+"px","width":(positions[12][0]-positions[39][0])+"px","height":(positions[37][1]-positions[62][1])+"px"});
    $("#rT8").css({"top":positions[37][1]+"px","left":positions[2][0]+"px","width":(positions[12][0]-positions[2][0])+"px","height":(positions[47][1]-positions[37][1])+"px"});
    $("#rT9").css({"top":positions[47][1]+"px","left":positions[3][0]+"px","width":(positions[44][0]-positions[3][0])+"px","height":(positions[53][1]-positions[47][1])+"px"});
    $("#rT10").css({"top":positions[60][1]+"px","left":positions[61][0]+"px","width":(positions[59][0]-positions[61][0])+"px","height":(positions[57][1]-positions[60][1])+"px"});
    $("#rT11").css({"top":positions[47][1]+"px","left":positions[50][0]+"px","width":(positions[11][0]-positions[50][0])+"px","height":(positions[53][1]-positions[47][1])+"px"});
    $("#rT12").css({"top":positions[53][1]+"px","left":positions[4][0]+"px","width":(positions[10][0]-positions[4][0])+"px","height":(positions[5][1]-positions[53][1])+"px"});
    $("#rT13").css({"top":positions[5][1]+"px","left":positions[6][0]+"px","width":(positions[8][0]-positions[6][0])+"px","height":(positions[7][1]-positions[5][1])+"px"});

    
    
    // console.log(positions[0][0],positions[14][0]);
  }
}
startVideo();

