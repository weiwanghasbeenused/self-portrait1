function movingBox(c){
    var topest = Math.min(positions[20][1],positions[16][1]);
    var bottomest = positions[7][1];
    var leftest = positions[1][0];
    var rightest = positions[14][0];
    switch(c){
        case 0:
        // only 1 box
            var w = rightest-leftest,
                h = bottomest-topest,
                l = wWidth-rightest;
                // console.log(leftest);
            $("#box0").css({
                "left":l+"px",
                "top":topest+"px"
            });
            break;
        case 1:
        // 2 boxes...
            var w = rightest-leftest,
                h = bottomest-topest,
                l = wWidth-rightest;            
            $("#box0").css({
                // "width":w+"px",
                // "height":h/2+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":w+"px",
                // "height":h/2+"px",
                "left":l+"px",
                "top":topest+h/2+"px"
            });
            break;
        case 2:
            var w = rightest-leftest,
                h = (bottomest-topest)/4,
                l = wWidth-rightest;
                // console.log(leftest);
            
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+h+"px"
            });
            $("#box2").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            break;
        case 3:
            var w = rightest-leftest,
                h = (bottomest-topest)/5,
                l = wWidth-rightest;
                // console.log(leftest);
            
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+h+"px"
            });
            $("#box2").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+2*h+"px"
            });
            $("#box3").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            
            break;
        case 4:
        var w = rightest-leftest,
            h = (bottomest-topest)/5,
            l = wWidth-rightest;
            // console.log(leftest);
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":positions[14][0]-positions[30][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });
            $("#box2").css({
                // "width":positions[25][0]-leftest+"px",
                // "height":h+"px",
                "left":wWidth-positions[25][0]+"px",
                "top":h+topest+"px"
            });
            $("#box3").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box4").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            
            break;
        case 5:
        var w = rightest-leftest,
            h = (bottomest-topest)/6,
            l = wWidth-rightest;
            // console.log(leftest);
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":positions[14][0]-positions[30][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });

            $("#box2").css({
                // "width":positions[25][0]-leftest+"px",
                // "height":h+"px",
                "left":wWidth-positions[25][0]+"px",
                "top":h+topest+"px"
            });
            $("#box3").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box4").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*3+topest+"px"
            });
            $("#box5").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            
            break;
        case 6:
        var w = rightest-leftest,
            h = (bottomest-topest)/7,
            l = wWidth-rightest;
            // console.log(leftest);
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });
            $("#box2").css({
                // "width":positions[14][0]-positions[30][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box3").css({
                // "width":positions[25][0]-leftest+"px",
                // "height":h+"px",
                "left":wWidth-positions[25][0]+"px",
                "top":h*2+topest+"px"
            });
            
            $("#box4").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*3+topest+"px"
            });
            $("#box5").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*4+topest+"px"
            });
            $("#box6").css({
                // "width":positions[8][0]-positions[6][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[8][0]-positions[6][0]))/2+"px",
                "top":positions[57][1]+"px"
            });

            break;
        case 7:
        var w = rightest-leftest,
            h = (bottomest-topest)/7,
            l = wWidth-rightest;
            // console.log(leftest);
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":positions[14][0]-positions[30][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });
            $("#box2").css({
                // "width":positions[25][0]-leftest+"px",
                // "height":h+"px",
                "left":wWidth-positions[25][0]+"px",
                "top":h+topest+"px"
            });
            $("#box3").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box4").css({
                // "width":positions[39][0]-positions[35][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[39][0]-positions[35][0]))/2+"px",
                "top":h*3+topest+"px"
            });
            $("#box5").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*4+topest+"px"
            });
            $("#box6").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            $("#box7").css({
                // "width":positions[8][0]-positions[6][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[8][0]-positions[6][0]))/2+"px",
                "top":positions[57][1]+h+"px"
            });
            break;
        case 8:
        var w = rightest-leftest,
            h = (bottomest-topest)/8,
            l = wWidth-rightest;
            // console.log(leftest);
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":positions[14][0]-positions[28][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });
            $("#box2").css({
                // "width":positions[30][0]-positions[25][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[30][0]+"px",
                "top":h+topest+"px"
            });
            $("#box3").css({
                // "width":positions[23][0]-positions[0][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[0][0]+"px",
                "top":h+topest+"px"
            });
            $("#box4").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box5").css({
                // "width":positions[39][0]-positions[35][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[39][0]-positions[35][0]))/2+"px",
                "top":h*4+topest+"px"
            });
            $("#box6").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*5+topest+"px"
            });
            $("#box7").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            $("#box8").css({
                // "width":positions[8][0]-positions[6][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[8][0]-positions[6][0]))/2+"px",
                "top":positions[57][1]+h+"px"
            });
            break;
        case 9:
        var w = rightest-leftest,
            h = (bottomest-topest)/9,
            l = wWidth-rightest;
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":positions[14][0]-positions[28][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });
            $("#box2").css({
                // "width":positions[30][0]-positions[25][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[30][0]+"px",
                "top":h+topest+"px"
            });
            $("#box3").css({
                // "width":positions[23][0]-positions[0][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[0][0]+"px",
                "top":h+topest+"px"
            });
            $("#box4").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box5").css({
                // "width":positions[12][0]-positions[39][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*3+topest+"px"
            });

            $("#box6").css({
                // "width":positions[35][0]-positions[2][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[35][0]+"px",
                "top":h*3+topest+"px"
            });
            $("#box7").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*4+topest+"px"
            });
            $("#box8").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            $("#box9").css({
                // "width":positions[8][0]-positions[6][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[8][0]-positions[6][0]))/2+"px",
                "top":positions[57][1]+h+"px"
            });
            break;
        case 10:
        var w = rightest-leftest,
            h = (bottomest-topest)/9,
            l = wWidth-rightest;
            // console.log(leftest);
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":positions[14][0]-positions[28][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });
            $("#box2").css({
                // "width":positions[30][0]-positions[25][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[30][0]+"px",
                "top":h+topest+"px"
            });
            $("#box3").css({
                // "width":positions[23][0]-positions[0][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[0][0]+"px",
                "top":h+topest+"px"
            });
            $("#box4").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box5").css({
                // "width":positions[39][0]-positions[35][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[39][0]-positions[35][0]))/2+"px",
                "top":h*3+topest+"px"
            });
            $("#box6").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*4+topest+"px"
            });
            $("#box7").css({
                // "width":positions[11][0]-positions[50][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*5+topest+"px"
            });
            $("#box8").css({
                // "width":positions[44][0]-positions[3][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[44][0]+"px",
                "top":h*5+topest+"px"
            });
            $("#box9").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            $("#box10").css({
                // "width":positions[8][0]-positions[6][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[8][0]-positions[6][0]))/2+"px",
                "top":positions[57][1]+h+"px"
            });
            break;
        case 11:
        var w = rightest-leftest,
            h = (bottomest-topest)/0,
            l = wWidth-rightest;
            $("#box0").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":topest+"px"
            });
            $("#box1").css({
                // "width":positions[14][0]-positions[28][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h+topest+"px"
            });
            $("#box2").css({
                // "width":positions[30][0]-positions[25][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[30][0]+"px",
                "top":h+topest+"px"
            });
            $("#box3").css({
                // "width":positions[23][0]-positions[0][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[0][0]+"px",
                "top":h+topest+"px"
            });
            $("#box4").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*2+topest+"px"
            });
            $("#box5").css({
                // "width":positions[12][0]-positions[39][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*3+topest+"px"
            });
            $("#box6").css({
                // "width":positions[35][0]-positions[2][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[35][0]+"px",
                "top":h*3+topest+"px"
            });
            $("#box7").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*4+topest+"px"
            });
            $("#box8").css({
                // "width":positions[11][0]-positions[50][0]+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":h*5+topest+"px"
            });
            $("#box9").css({
                // "width":positions[44][0]-positions[3][0]+"px",
                // "height":h+"px",
                "left":wWidth-positions[44][0]+"px",
                "top":h*5+topest+"px"
            });
            $("#box10").css({
                // "width":w+"px",
                // "height":h+"px",
                "left":l+"px",
                "top":positions[57][1]+"px"
            });
            $("#box11").css({
                // "width":positions[8][0]-positions[6][0]+"px",
                // "height":h+"px",
                "left":l+(w-(positions[8][0]-positions[6][0]))/2+"px",
                "top":positions[57][1]+h+"px"
            });

    }
}