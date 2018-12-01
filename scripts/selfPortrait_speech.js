var rec;
var savedTextTemp;
var savedText =[];
var k = 0;
var h1LineHeight = textHeight();

// 0 = paused, 1 = recording, 2 = reset warning
var status = 0; 

current = 0;

rec = new p5.SpeechRec(); 
rec.continuous = false;
rec.onResult = showResult;
rec.onError = restart;
rec.onEnd = restart;


function restart(){
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
		console.log("adding Text to box"+k);
		$("#box"+k+" h1:last-of-type").append(savedText[j]);
		var tW = textWidth2($("#box"+k+" h1:last-of-type"));
		var tH = $("#box"+k).find("h1").length*h1LineHeight;
		console.log("width of "+$("#box"+k+" h1:last-of-type").html()+" is "+tW);
		if(tW>=$("#box"+k).width() && ($("#box"+k).height()-tH)>=h1LineHeight){
			$("#box"+k).append("<h1></h1>");
			adjustSize();
		}else if(tW>=$("#box"+k).width() && ($("#box"+k).height()-tH)<h1LineHeight){
			k++;
			console.log("k++, k = "+k);
		}
		if(k>current&&j<savedText.length-1){
			current++;
			addingBox();
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
	$("h1").removeClass().addClass("size"+current);
	h1LineHeight = textHeight();
}

// start speech
$(document).jkey('d',function(){
	if(status==0){
		console.log("start!");
		rec.start();  
		resizingBox();
		status = 1;
	}else if(status==2){
		$("#warning").stop().fadeOut("200");
		status = 1;
	}else if(status==3){
		$("#printing").stop().fadeOut("200");
		status = 1;
	}
});

// pause speech
$(document).jkey('w',function(){
	if(status==1){
		status = 0;
	}else if(status==2){
		$("#warning").stop().fadeOut("200");
		status = 0;
	}else if(status==3){
		$("#printing").stop().fadeOut("200");
		status = 0;
	}
});

// restart
$(document).jkey('a',function(){
	if(status==0||status == 1){
		$("#warning_reset").stop().fadeIn("200");
		status = 2;
	}else if(status == 2){
		location.reload();
	}
});

$(document).jkey('s',function(){
	if(status==0||status == 1){
		$("#warning_printing").stop().fadeIn("200");
		status = 3;
	}else if(status == 3){
		// do something printing
	}
});

startVideo(); //start face

