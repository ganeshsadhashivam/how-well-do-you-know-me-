var readLineSync = require("readline-sync");


var score = 0;
//highscores
var highScores = [
  {
    name: "Tanay",
    score: 3
  },
  {
    name: "Akash",
    score: 4
  }
]

//array of objects
var questionsToAnswer = [
  {
    question: "what is your Education Qualification ?",
    answer: "Mca"
  },
  {
    question: "which year passout ?",
    answer: "2017"

  },
  {
    question: "did you have done any courses ?",
    answer: "No"
  },
  {
    question: "what are the skills do you have ?",
    answer: "html,css,js"
  },
  {
    question: "currently learning anything ?",
    answer: "NeoGcamp"
  }

];



function welcome() {
  var userName = readLineSync.question("what is your Name ?");

  console.log("hi welcome " + userName);
}

//play function
function play(question, answer) {

  var userAnswer = readLineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("your Answer is Correct!");
    score = score + 1;

  }
  else {
    console.log("your Answer is Wrong!");
  }

  console.log("your score is " + score);
  console.log("------------");

}


function game() {

  for (var i = 0; i < questionsToAnswer.length; i++) {
    var currentQuestion = questionsToAnswer[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {

  console.log("ya you have scored " + score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map((highScores => console.log(highScores.name, ":", highScores.score)));

}

//driver functions
welcome();
game();
showScores();
