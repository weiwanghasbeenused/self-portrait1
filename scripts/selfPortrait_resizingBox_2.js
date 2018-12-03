function resizingBox(c){
    var topest = Math.min(positions[20][1],positions[16][1]);
    var bottomest = positions[7][1];
    var leftest = positions[1][0];
    var rightest = positions[14][0];
    var aboveMouth = positions[60][1]-topest;
    var w = rightest-leftest;
    var l = wWidth-rightest;
    var chinWidth = positions[9][0]-positions[5][0];
    var noseWidth = positions[39][0]-positions[35][0];
    // setting h 
    if(c<2){
        var h = (bottomest-topest)/(c+1);
    }else if(c>=2&&c<5){
        var h = aboveMouth/(c);
    }else if(c>=5&&c<=6){
        var h = aboveMouth/4;
    }else if(c>=7&&c<10){
        var h = aboveMouth/5;
    }else if(c>=10&&c<12){
        var h = aboveMouth/(c-4);
    }else if(c>=12){
        var h = aboveMouth/8;
    }
    // setting btEyes
    if(c>=2){
        btEyes = w-(positions[25][0]-leftest);
    }
    if(c>=8){
        btEyes = w-(positions[23][0]-leftest);
        btEyes2 = (w-(positions[30][0]-positions[25][0]))/2;
    }
    
    // setting chin
    if(c>=6){
        chinLeft = (w-(positions[9][0]-positions[5][0]))/2;
    }

    // setting nose
    if(c>=7){
        noseLeft = (w-noseWidth)/2;
    }
    if(c>=9){
        noseLeft = w-(positions[39][0]-positions[35][0]);
    }

    // setting mouth
    if(c>=14){
        mouthLeft = w-(positions[44][0]-positions[3][0]);
    }
    
    switch(c){
        case 0:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            break;

        case 1:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            break;

        case 2:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":w+"px",
                "height":h+"px"
            });
            break;

        case 3:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":w+"px",
                "height":h+"px"
            });
            break;

        case 4:

            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":positions[14][0]-positions[30][0]+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[25][0]-leftest+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":w+"px",
                "height":h+"px"
            });
            
            break;
        case 5:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":positions[14][0]-positions[30][0]+"px",
                "height":h+"px"
            });

            $("#box2").css({
                "width":positions[25][0]-leftest+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            break;

        case 6:    
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[14][0]-positions[30][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[25][0]-leftest+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });

            break;
        case 7:
            btEyes = w-(positions[25][0]-leftest);
            // console.log(leftest);
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":positions[14][0]-positions[30][0]+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[25][0]-leftest+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":positions[39][0]-positions[35][0]+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
            break;
        case 8:
            btEyes = w-(positions[25][0]-leftest);
            // console.log(leftest);
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":positions[39][0]-positions[35][0]+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box8").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
            break;
        case 9:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
                // "left":l+"px",
                // "top":h+topest+"px"
            });
            $("#box2").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
                // "left":wWidth-positions[30][0]+"px",
                // "top":h+topest+"px"
            });
            $("#box3").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
                // "left":wWidth-positions[0][0]+"px",
                // "top":h+topest+"px"
            });
            $("#box4").css({
                "width":w+"px",
                "height":h+"px"
                // "left":l+"px",
                // "top":h*2+topest+"px"
            });
            $("#box5").css({
                "width":positions[12][0]-positions[39][0]+"px",
                "height":h+"px"
                // "left":l+"px",
                // "top":h*3+topest+"px"
            });

            $("#box6").css({
                "width":positions[35][0]-positions[2][0]+"px",
                "height":h+"px"
                // "left":wWidth-positions[35][0]+"px",
                // "top":h*3+topest+"px"
            });
            $("#box7").css({
                "width":w+"px",
                "height":h+"px"
                // "left":l+"px",
                // "top":h*4+topest+"px"
            });
            $("#box8").css({
                "width":w+"px",
                "height":h+"px"
                // "left":l+"px",
                // "top":positions[57][1]+"px"
            });
            $("#box9").css({
                "width":chinWidth+"px",
                "height":h+"px"
                // "left":l+(w-(positions[8][0]-positions[6][0]))/2+"px",
                // "top":positions[57][1]+h+"px"
            });
            break;
        case 10:
            // console.log(leftest);
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":positions[12][0]-positions[39][0]+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":positions[35][0]-positions[2][0]+"px",
                "height":h+"px"
            });
            $("#box8").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box9").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box10").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
            break;
        case 11:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":positions[12][0]-positions[39][0]+"px",
                "height":h+"px"
            });
            $("#box8").css({
                "width":positions[35][0]-positions[2][0]+"px",
                "height":h+"px"
            });
            $("#box9").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box10").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box11").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
            break;

        case 12:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":positions[12][0]-positions[39][0]+"px",
                "height":h+"px"
            });
            $("#box8").css({
                "width":positions[35][0]-positions[2][0]+"px",
                "height":h+"px"
            });
            $("#box9").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box10").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box11").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box12").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
            break;

        case 13:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":positions[12][0]-positions[39][0]+"px",
                "height":h+"px"
            });
            $("#box8").css({
                "width":positions[35][0]-positions[2][0]+"px",
                "height":h+"px"
            });
            $("#box9").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box10").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box11").css({
                "width":positions[11][0]-positions[50][0]+"px",
                "height":h+"px"
            });
            $("#box12").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box13").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
            break;

         case 14:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":positions[12][0]-positions[39][0]+"px",
                "height":h+"px"
            });
            $("#box8").css({
                "width":positions[35][0]-positions[2][0]+"px",
                "height":h+"px"
            });
            $("#box9").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box10").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box11").css({
                "width":positions[11][0]-positions[50][0]+"px",
                "height":h+"px"
            });
            $("#box12").css({
                "width":positions[44][0]-positions[3][0]+"px",
                "height":h+"px"
            });
            $("#box13").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box14").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
            break;

        case 15:
            $("#box0").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box1").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box2").css({
                "width":positions[14][0]-positions[28][0]+"px",
                "height":h+"px"
            });
            $("#box3").css({
                "width":positions[30][0]-positions[25][0]+"px",
                "height":h+"px"
            });
            $("#box4").css({
                "width":positions[23][0]-positions[0][0]+"px",
                "height":h+"px"
            });
            $("#box5").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box6").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box7").css({
                "width":positions[12][0]-positions[39][0]+"px",
                "height":h+"px"
            });
            $("#box8").css({
                "width":positions[35][0]-positions[2][0]+"px",
                "height":h+"px"
            });
            $("#box9").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box10").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box11").css({
                "width":positions[11][0]-positions[50][0]+"px",
                "height":h+"px"
            });
            $("#box12").css({
                "width":positions[44][0]-positions[3][0]+"px",
                "height":h+"px"
            });
            $("#box13").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box13").css({
                "width":w+"px",
                "height":h+"px"
            });
            $("#box14").css({
                "width":chinWidth+"px",
                "height":h+"px"
            });
    }
    if(c>=14){
            

    }
}