//Tushar
var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click o n the str/rst

 document.getElementById("startreset").onclick=function(){

//if we are playing

if(playing == true){

location.reload();//reloade page

}else{
//if not 


    //change mode to playing

    playing = true;

    score=0;//set score to 0

    document.getElementById("scorevalue").innerHTML=score;
    
    //show countdown box
    show("timeremaining");
    timeremaining=60;
     document.getElementById("timeremainingvalue").innerHTML=timeremaining;

    hide("gameover");

    //change button to reset
    document.getElementById("startreset").innerHTML="Reset game";
    //start countdown
    startCountdown();
    //generate a new question and ans
    generateQA();
}
}

//if we click on answer box

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function(){
        //check if we are playing
        if(playing==true){
            //yes
            if(this.innerHTML ==correctAnswer){
                //correct answer 

                //increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);

                generateQA();
            }else{
            //wrong answer
            hide ("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
    }
}}
}

//reduce time by 1sec in loops
//time left?
//yes-->continue
//no-->gameover
//generate new q/a


//if we are playing
// correct?
//yes 
//increse score
//show correct box for 1sec
//generate new Q/A
//no
//show try again box for 1sec

function startCountdown(){
 action=setInterval(function(){
 timeremaining -= 1;


 document.getElementById("timeremainingvalue").innerHTML=timeremaining;
 
 if(timeremaining == 0)//game over
 { 
      stopCountdown();
    show("gameover");
    //document.getElementById("gameover").style.display="block";
    document.getElementById("gameover").innerHTML="<p>Game over</p><p>Your score is "+score+".</p>";
    hide("timeremaining");
    hide("correct");
    hide("wrong");
    playing=false;
    document.getElementById("startreset").innerHTML = "Start Game";
    }
},1000);
}
//stop counter
function stopCountdown(){
    clearInterval(action);
}
//hide an element
function hide(Id){
    document.getElementById(Id).style.display="none";
}
//show an element
function show(Id){
    document.getElementById(Id).style.display="block";

}
//generate question and multiple answers

function generateQA(){
var x = 1 + Math.round(9*Math.random());
var y = 1 + Math.round(9*Math.random());
correctAnswer = x*y;
document.getElementById("question").innerHTML= x + "x" + y;
var correctPosition = 1+ Math.round(3*Math.random());
document.getElementById("box"+correctPosition).innerHTML=correctAnswer;//fill one box with one answer
//fill other with wrong answers

var answers = [correctAnswer];

for(i=1;i<5;i++){
    if(i!= correctPosition){
        var wrongAnswer;
        do{
            wrongAnswer = (1 + Math.round(9*Math.random()))* 
            (1 + Math.round(9*Math.random()));//a wrong answer
        }
        while(answers.indexOf(wrongAnswer)>-1)
        
        
        document.getElementById("box"+i).innerHTML=wrongAnswer;
        answers.push(wrongAnswer);

    }
}
}

