var total_seconds = 60*1;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime(){
document.getElementById("timer").innerHTML
= 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;

if(total_seconds <=0){
setTimeout(tally(),1);
} else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",1000);
}}
setTimeout("CheckTime()",1000);


function tally(){

var question1 = document.lohanQuiz.question1.value;
var question2 = document.lohanQuiz.question2.value;
var question3 = document.lohanQuiz.question3.value;
var question4 = document.lohanQuiz.question4.value;
var answerTally = 0;

    if (question1 == "Greece") {
        answerTally++;
    }
    if (question2 == "Monroe") {
        answerTally++;
    }
    if (question3 == "Burkini") {
        answerTally++;
    }
    if (question4 == "All") {
        answerTally++;
    }

var alert = ["4 FOR YOU GLEN COCO. YOU GO GLEN COCO!", "Perfect is boring", "You're a pathetic disaster and you should give up", "The limit to your stupidity does not exist", "None for Gretchen Weiners"];
var pictures = ["assets/images/4.gif", "assets/images/3.gif", "assets/images/2.gif", "assets/images/1.gif", "assets/images/0.gif",]

var range;

    if (answerTally == 0) {
        range = 4;
    }
    if (answerTally == 1) {
        range = 3;
    }
    if (answerTally == 2) {
        range = 2;
    }
    if (answerTally == 3) {
        range = 1;
    }
    if (answerTally == 4) {
        range = 0;
    }


document.getElementById("score").style.visibility = "visible";


document.getElementById("alerts").innerHTML = alert[range];
document.getElementById("correct").innerHTML = "CANDY CANE GRAMS: " + answerTally + " for you!";
document.getElementById("picture").src = pictures[range];

}