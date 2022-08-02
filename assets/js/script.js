const startBtn = document.getElementById('startBtn');
var questionContainerElement = document.getElementById("questionContainer"); 
var listOfQuestions = document.getElementById('questionContainer');
var currentScore = 0
const initialsEl = document.getElementById('initials');
const finalScoreEl = document.getElementById('finalScore');
var ruleInfo = document.getElementById("ruleInfo");
var title = document.getElementById("title");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var currentQuestion = 0;
var initials = document.getElementById("initials");
var result = document.getElementById("result");
var highScore = document.getElementById("highScore");
var sendHighScore = document.getElementById("sendHighScore");

startBtn.addEventListener("click", startQuiz);


function startQuiz () {
    //console.log("start")
    startBtn.classList.add("hideThis");
    questionContainerElement.classList.remove("hideThis");
    //console.log("goS");
    ruleInfo.classList.add("hideThis");
    title.classList.add("hideThis");
   

jsToHtml();
}
//Goal: Get html element and assign it to  what you want to change
//get element html = array of question[object in that array].attributes in that object
function jsToHtml () {
//console.log("yo");
    document.getElementById("question").innerHTML = listOfQuestions[currentQuestion].question;
    document.getElementById("answerA").innerHTML = listOfQuestions[currentQuestion].answerA;
    document.getElementById("answerB").innerHTML = listOfQuestions[currentQuestion].answerB;
    document.getElementById("answerC").innerHTML = listOfQuestions[currentQuestion].answerC;
    document.getElementById("answerD").innerHTML = listOfQuestions[currentQuestion].answerD;
    
setTime();
}

answerA.addEventListener("click", clickedAnswerA);
answerB.addEventListener("click", clickedAnswerB);
answerC.addEventListener("click", clickedAnswerC);
answerD.addEventListener("click", clickedAnswerD);


//this includes the questionstem and answer choices
var listOfQuestions = [
    {
        question: "An HTML document can contain _____.",
        answerA: "Attributes",
        answerB: "Tags",
        answerC: "Raw text",
        answerD: "All the answers are true",
        correctAnswer: "answerD",
    },
    
    {
        question:"Choose the correct HTML tag for a large title.",
        answerA: "H1",
        answerB: "Heading",
        answerC: "Head",
        answerD: "H6",
        correctAnswer: "answerA"
    }, 

    {
        question: "We can make rounded borders around elements using which CSS element?",
        answerA: "Border-collapse",
        answerB: "Border-round",
        answerC: "Border-radius",
        answerD: "None of the above",
        correctAnswer: "answerC",
    },
    
    {
        question:"Which of the following are valid CSS position property values?",
        answerA: "Static",
        answerB: "Relative",
        answerC: "Fixed",
        answerD: "All of the above",
        correctAnswer: "answerD"
    }, 

    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answerA: "Global variable",
        answerB: "The local element",
        answerC: "Both",
        answerD: "None of the Above",
        correctAnswer: "answerB",
    }
]

//After the user clickes on an answer choice, it will check the answer. Then...
function clickedAnswerA () {
    compareAnswer("answerA");
    //console.log("start")
}

function clickedAnswerB () {
    compareAnswer("answerB");
    //console.log("start1")
}

function clickedAnswerC () {
    compareAnswer("answerC");
    //console.log("start2")
}

function clickedAnswerD () {
    compareAnswer("answerD");
    //console.log("start3")
}
//Timer section
  var secondsLeft = 30;
function setTime() {
    var timeInterval = setInterval(function () {
    //console.log(secondsLeft);
    document.getElementById('count').innerHTML = secondsLeft + " seconds remaining";
    secondsLeft--;
        //console.log(secondsLeft);
    if (secondsLeft === 0 || currentQuestion >= listOfQuestions.length) {
        clearInterval(timeInterval);
        document.getElementById('count').innerHTML = 'No Time Left';
        alert("Quiz is Over!");
        endQuiz();
    }
    if (secondsLeft >= 10) {

    }
    else {
        secondsLeft = 0;
    endQuiz();
    }
    
    }, 1000);

}

//then ... the user's answer will be compared to the correct answer
//Subtracting time when user gets the question wrong
function compareAnswer (checkAnswer) {
    var correctAnswer = listOfQuestions[currentQuestion].correctAnswer
    if (checkAnswer === correctAnswer) {
        currentScore += 10;
        
    } else {
        document.getElementById('count').innerHTML = secondsLeft;
        secondsLeft -= 10;
    }
goToNextQuestion();
}
    
function goToNextQuestion () {
    currentQuestion = currentQuestion + 1
    if (currentQuestion >= listOfQuestions.length) {

    endQuiz();
    }
    else {
    document.getElementById("question").innerHTML = listOfQuestions[currentQuestion].question;
    document.getElementById("answerA").innerHTML = listOfQuestions[currentQuestion].answerA;
    document.getElementById("answerB").innerHTML = listOfQuestions[currentQuestion].answerB;
    document.getElementById("answerC").innerHTML = listOfQuestions[currentQuestion].answerC;
    document.getElementById("answerD").innerHTML = listOfQuestions[currentQuestion].answerD;
}
}

//score and store in Local storage
function endQuiz () {

    document.getElementById("question").classList.add("hideThis");
    answerA.classList.add("hideThis");
    answerB.classList.add("hideThis");
    answerC.classList.add("hideThis");
    answerD.classList.add("hideThis");

    var initials = initialsEl.value;
    var finalScore = currentScore;
    finalScoreEl.textContent = finalScore;
    initials.textContent;

    result.classList.remove("hideThis");
    questionContainerElement.classList.add("hideThis");

   }

    sendHighScore.onclick = function() {
    initialsEl.value;
    var finalScore = currentScore;
    localStorage.setItem ("Your initals", initialsEl.value);
    localStorage.setItem ("Your Score", finalScore);
    //console.log("ms");
    //console.log("hat");
    result.classList.add("hideThis");
    highScore.classList.remove("hideThis");

    pastHighScore();
}

highScore.addEventListener("click", pastHighScore);


// function pastHighScore() {
//     var finalScore = currentScore;
//     var getInitials = localStorage.getItem ("Your initals");
//     var getScore = localStorage.getItem ("Your Score");
//     console.log(finalScore);
    
//     // for (var i = 0; i < getScore.length; i++) {
//     //     getScore[i].initialsEl;
//     //     getScore[i].finalScoreEl;
//     // }
//     var data = JSON.parse(localStorage.getItem(getScore));
//     data.textContent;
   
// }