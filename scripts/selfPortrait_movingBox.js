function movingBox(c){
    var topest_2 = Math.min(positions[20][1],positions[16][1]);
    var bottomest_2 = positions[7][1];
    var leftest_2 = positions[1][0];
    var rightest_2 = positions[14][0];
    var aboveMouth2 = positions[60][1]-topest_2;

    switch(c){
        case 0:
            var w_2 = rightest_2-leftest_2,
                h_2 = bottomest_2-topest_2,
                l_2 = wWidth-rightest_2;
                // console.log(leftest_2);
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            break;
        case 1:
        // 2 boxes...
            var w_2 = rightest_2-leftest_2,
                h_2 = bottomest_2-topest_2,
                l_2 = wWidth-rightest_2;            
            $("#box0").css({
                // "width":w+"px",
                // "height":h_2/2+"px",
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                // "width":w+"px",
                // "height":h_2/2+"px",
                "left":l_2+"px",
                "top":topest_2+h_2/2+"px"
            });
            break;
        case 2:
            var w_2 = rightest_2-leftest_2,
                h_2 = (bottomest_2-topest_2)/3,
                l_2 = wWidth-rightest_2;
                // console.log(leftest_2);
            
            $("#box0").css({
                // "width":w+"px",
                // "height":h_2+"px",
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                // "width":w+"px",
                // "height":h_2+"px",
                "left":l_2+"px",
                "top":topest_2+h_2+"px"
            });
            $("#box2").css({
                // "width":w+"px",
                // "height":h_2+"px",
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            break;
        case 3:
            var w_2 = rightest_2-leftest_2,
                h_2 = aboveMouth2/3,
                l_2 = wWidth-rightest_2;
                // console.log(leftest_2);
            
            $("#box0").css({
                // "width":w+"px",
                // "height":h_2+"px",
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                // "width":w+"px",
                // "height":h_2+"px",
                "left":l_2+"px",
                "top":topest_2+h_2+"px"
            });
            $("#box2").css({
                // "width":w+"px",
                // "height":h_2+"px",
                "left":l_2+"px",
                "top":topest_2+2*h_2+"px"
            });
            $("#box3").css({
                // "width":w+"px",
                // "height":h_2+"px",
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            
            break;
        case 4:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/3,
            l_2 = wWidth-rightest_2;
            // console.log(leftest_2);
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+btEyes+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });

            break;
        case 5:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/4,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });

            $("#box2").css({
                "left":l_2+btEyes+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            break;

        case 6:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/4,
            l_2 = wWidth-rightest_2;
            // console.log(leftest_2);
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes+"px",
                "top":h_2*2+topest_2+"px"
            });
            
            $("#box4").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box6").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });

            break;
        case 7:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/5,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+btEyes+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box6").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box7").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
            break;
        case 8:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/5,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+btEyes2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box6").css({
                "left":l_2+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box7").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box8").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
            break;
        case 9:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/5,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+btEyes2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });

            $("#box6").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box7").css({
                "left":l_2+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box8").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box9").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
            break;
        case 10:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/6,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+btEyes+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box6").css({
                "left":l_2+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box7").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box8").css({
                "left":l_2+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box9").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box10").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
            break;
        case 11:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/7,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+btEyes+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box6").css({
                "left":l_2+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box7").css({
                "left":l_2+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box8").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box9").css({
                "left":l_2+"px",
                "top":h_2*6+topest_2+"px"
            });
            $("#box10").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box11").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
            break;

        case 12:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/8,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+btEyes+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box6").css({
                "left":l_2+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box7").css({
                "left":l_2+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box8").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box9").css({
                "left":l_2+"px",
                "top":h_2*6+topest_2+"px"
            });
            $("#box10").css({
                "left":l_2+"px",
                "top":h_2*7+topest_2+"px"
            });
            $("#box11").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box12").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
            break;

        case 13:
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/8,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+btEyes+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box6").css({
                "left":l_2+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box7").css({
                "left":l_2+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box8").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box9").css({
                "left":l_2+"px",
                "top":h_2*6+topest_2+"px"
            });
            $("#box10").css({
                "left":l_2+"px",
                "top":h_2*7+topest_2+"px"
            });
            $("#box11").css({
                "left":l_2+"px",
                "top":h_2*8+topest_2+"px"
            });
            $("#box12").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box13").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
    }
    if(c>=14){
        var w_2 = rightest_2-leftest_2,
            h_2 = aboveMouth2/8,
            l_2 = wWidth-rightest_2;
            $("#box0").css({
                "left":l_2+"px",
                "top":topest_2+"px"
            });
            $("#box1").css({
                "left":l_2+"px",
                "top":h_2+topest_2+"px"
            });
            $("#box2").css({
                "left":l_2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box3").css({
                "left":l_2+btEyes2+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box4").css({
                "left":l_2+btEyes+"px",
                "top":h_2*2+topest_2+"px"
            });
            $("#box5").css({
                "left":l_2+"px",
                "top":h_2*3+topest_2+"px"
            });
            $("#box6").css({
                "left":l_2+"px",
                "top":h_2*4+topest_2+"px"
            });
            $("#box7").css({
                "left":l_2+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box8").css({
                "left":l_2+noseLeft+"px",
                "top":h_2*5+topest_2+"px"
            });
            $("#box9").css({
                "left":l_2+"px",
                "top":h_2*6+topest_2+"px"
            });
            $("#box10").css({
                "left":l_2+"px",
                "top":h_2*7+topest_2+"px"
            });
            $("#box11").css({
                "left":l_2+"px",
                "top":h_2*8+topest_2+"px"
            });
            $("#box12").css({
                "left":l_2+mouthLeft+"px",
                "top":h_2*8+topest_2+"px"
            });
            $("#box13").css({
                "left":l_2+"px",
                "top":positions[57][1]+"px"
            });
            $("#box14").css({
                "left":l_2+chinLeft+"px",
                "top":positions[57][1]+h_2+"px"
            });
    }
}