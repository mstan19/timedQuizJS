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
var congrats = document.getElementById("congrats");
var theReveal = document.getElementById("theReveal");
var enterInitials = document.getElementById("enterInitials");
var initials = document.getElementById("initials");
var sendHighscore = document.getElementById("sendHighscore");
var result = document.getElementById("result");

startBtn.addEventListener("click", startQuiz) ;

function startQuiz () {
    console.log("start")
    startBtn.classList.add("hideThis");
    questionContainerElement.classList.remove("hideThis");
    ruleInfo.classList.add("hideThis");
    title.classList.add("hideThis");
   

jsToHtml();
}
//Goal: Get html element and assign it to  what you want to change
//get element html = array of question[object in that array].attributes in that object
function jsToHtml () {

    document.getElementById("question").innerHTML = listOfQuestions[currentQuestion].question;
    document.getElementById("answerA").innerHTML = listOfQuestions[currentQuestion].answerA;
    document.getElementById("answerB").innerHTML = listOfQuestions[currentQuestion].answerB;
    document.getElementById("answerC").innerHTML = listOfQuestions[currentQuestion].answerC;
    document.getElementById("answerD").innerHTML = listOfQuestions[currentQuestion].answerD;
    
}

answerA.addEventListener("click", clickedAnswerA);
answerB.addEventListener("click", clickedAnswerB);
answerC.addEventListener("click", clickedAnswerC);
answerD.addEventListener("click", clickedAnswerD);


//this includes the questionstem and answer choices
var listOfQuestions = [
    {
        question: "What is JS?",
        answerA: "dog",
        answerB: "cat",
        answerC: "bird",
        answerD: "js is",
        correctAnswer: "answerD",
    },
    
    {
        question:"What is html?",
        answerA: "bear",
        answerB: "lion",
        answerC: "tiger",
        answerD: "html is",
        correctAnswer: "answerB"
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
var secondsLeft = 60;
function setTime() {
    var timeInterval = setInterval(function () {
    document.getElementById('count').innerHTML = secondsLeft + " seconds remaining";
    secondsLeft--;
    if (secondsLeft === 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'No Time Left';
        alert("You're out of time!");
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
   }

document.getElementById("sendHighscore").onclick = function() {
    initialsEl.value;
    var finalScore = currentScore;
    localStorage.setItem (initialsEl.value, finalScore);
   // console.log("ms");
}