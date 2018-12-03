var rec;
var savedTextTemp;
var savedText =[];
var k = 0;
var h1LineHeight = textHeight();

// 0 = paused, 1 = recording, 2 = reset warning, 3 = print, 4 = maximum
var status = 0; 
var cv = 0;

current = 0;

rec = new p5.SpeechRec(); 
rec.continuous = false;
rec.onResult = showResult;
rec.onError = restartRec;
rec.onEnd = restartRec;


function restartRec(){
	console.log("restart!");
	if(status == 1){
		rec.start();
	}
}

function showResult(){
	var rs = rec.resultString;
	savedTextTemp = rs.split(" ");
	for(i = 0; i<savedTextTemp.length ; i++){	
		savedText.push(savedTextTemp[i]+" ");
	}
	pushingText();
}

function pushingText(){
	$(".resultBox").empty().append("<h1></h1>");
	adjustSize();
	k = 0;	
	for(j = 0;j<savedText.length;j++){
		if(k<maxCurrent){
			$("#box"+k+" h1:last-of-type").append(savedText[j]);
		}else{
			$("#box"+maxCurrent+" h1:last-of-type").append(savedText[j]);
		}
		var tW = textWidth2($("#box"+k+" h1:last-of-type"));
		var tH = $("#box"+k).find("h1").length*h1LineHeight;
		if(tW>=$("#box"+k).width() && ($("#box"+k).height()-tH)>=h1LineHeight){
			$("#box"+k).append("<h1></h1>");
			adjustSize();
		}else if(tW>=$("#box"+k).width() && ($("#box"+k).height()-tH)<h1LineHeight){
			if(k<maxCurrent){
				k++;
			}else{
				if(current<=maxSteps){
					current++;
				}else{
					status = 4;
					$("#warning_ending").stop().fadeIn(200);
				}

			}
		}
		if(k>current&&j<savedText.length-1){
			current++;
			if(current<=maxCurrent){
				addingBox();
			}
		}
	}
}

function addingBox(){
	$("#container").append('<div id = "box'+current+'" class = "resultBox"><h1 class = "size"'+current+'></h1></div>');
	resizingBox(current);
	adjustSize();
	pushingText();
}
function reducingBox(){

}

function textWidth2(selector){
  var html_org = selector.html();
  var html_calc = '<span>' + html_org + '</span>';
  $("#testHeight h1").empty().html(html_calc);
  var width = $("#testHeight h1").find('span:first').width();
  return width;
};

function textHeight(){
  var height = $("#testHeight").find('h1').height();
  return height;
};

function adjustSize(){
	if(current<=maxCurrent){
		$("h1").removeClass().addClass("size"+current);
	}
	else{
		$("h1").removeClass().addClass("final");
	}
	h1LineHeight = textHeight();
}

// start speech
$(document).jkey('d',function (){
	startRec();
	
});

function startRec() {
	if(current<27){
		if(status==0){
			console.log("start!");
			rec.start(); 
			resizingBox(current);
			status = 1;
			$("#sign_pause").stop().fadeOut(200);
			$("#sign_start").stop().fadeIn(200,
				function(){
					$(this).delay(3000).fadeOut(200);
			});
		}else if(status==2){
			console.log("pressing d when status = 2!");
			$("#warning_reset").stop().fadeOut(200);
			status = 1;
		}else if(status==3){
			$("#warning_printing").stop().fadeOut(200);
			status = 1;
		}
	}else{
		$("#warning_ending").fadeIn(200);
	}
}

// pause speech
$(document).jkey('w',function(){
	pauseRec();
	
});

function pauseRec() {
	if(status==1){
			status = 0;
			$("#sign_pause").stop().fadeIn(200);
			$("#sign_start").stop().fadeOut(200);
		}else if(status==2){
			$("#warning_reset").stop().fadeOut(200);
			status = 0;
			$("#sign_pause").stop().fadeIn(200);
		}else if(status==3){
			$("#warning_printing").stop().fadeOut(200);
			status = 0;
			$("#sign_pause").stop().fadeIn(200);
		}
}

// restart
$(document).jkey('a',function(){
	restart();
});

function restart() {
	if(status==0||status == 1||status == 4){
		$("#warning_reset").stop().fadeIn(200);
		status = 2;
	}else if(status == 2){
		$("#warning_reset").html("<h2>Restarting...</h2>");
		location.reload();
	}
}

$(document).jkey('s',function (){
	printing();
});

function printing() {
	if(status==0||status == 1||status == 4){
		$("#warning_printing").stop().fadeIn(200);
		status = 3;
	}else if(status == 3){
			console.log("shot!");
			for (character in savedText) {
		      socket.send(savedText[character]);
		    }
		    socket.send("\n");
			html2canvas(document.getElementById('container')).then(function(canvas) {
	    	$("#testImg").empty();
	    	document.getElementById('testImg').appendChild(canvas);
	    	
	    	var cid = "imgCanvas"+cv;
	    	$("#testImg canvas").attr("id",cid);
	    	cid = document.getElementById(cid);
	    	var dataUrl = cid.toDataURL("image/png");
	  //   	$.ajax({
			//   type: "POST",
			//   url: "script.php",
			//   data: { 
			//      imgSent: dataUrl,
			//      imgName: "img"+cv
			//   }
			// }).done(function(o) {
			//   console.log('saved'); 
			// });
	    	
	    	document.getElementById('img1').src = dataUrl;
	    	var dlImg = dataUrl.replace("image/png", "image/octet-stream");  
	    	window.location.href=dlImg;
	    	cv++;
	    	console.log("cv = "+cv);
			});
		var tempP = $("#warning_printing").html();
		$("#warning_printing").html("<h2>Printing...</h2>").delay(1000).fadeOut(200, function(){$(this).html("<h2>"+tempP+"</h2>");});
		status == 0;
	}
}



startVideo(); //start face

