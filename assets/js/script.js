const startBtn = document.getElementById('startBtn');
const questionContainerElement = document.getElementById("questionContainer"); 
var listOfQuestions = document.getElementById('questionContainer');
var currentScore = 0


startBtn.addEventListener("click", startQuiz) 

function startQuiz () {
    console.log("start")
    startBtn.classList.add("hideThis");
    questionContainerElement.classList.remove("hideThis");
}
//Goal: Get html element and assign it to  what you want to change
//get element html = array of question[object in that array].attributes in that object
function StartQuiz () {
    document.getElementById('question') = ListofQuestion[currentQuestion].question
    document.getElementById('answerA') = ListofQuestion[currentQuestion].answerA
    document.getElementById('answerB') = ListofQuestion[currentQuestion].answerB
    document.getElementById('answerC') = ListofQuestion[currentQuestion].answerC
    document.getElementById('answerD') = ListofQuestion[currentQuestion].answerD
}

//this includes the questionstem and answer choices
var listOfQuestions = [
    {
        Question: "What is JS?",
        answerA: "dog",
        answerB: "cat",
        answerC: "bird",
        answerD: "js is",
        correctAnswer: "answerA",
    },
    
    {
        Question:"What is html?",
        answerA: "bear",
        answerB: "lion",
        answerC: "tiger",
        answerD: "html is",
        correctAnswer: "answerB"
    }
]

//After the user clickes on an answer choice, it will check the answer. Then...
function clickedAnswerA () {
    checkAnswer ("answerA");
}

function clickedAnswerB () {
    checkAnswer ("answerB");
}

function clickedAnswerC () {
    checkAnswer ("answerC");
}

function clickedAnswerD () {
    checkAnswer ("answerD");
}
//Timer section
var secondsLeft = 60;
var interval = setInterval(function () {
  document.getElementById('count').innerHTML = secondsLeft;
  secondsLeft--;
  if (secondsLeft === 0) {
    clearInterval(interval);
    document.getElementById('count').innerHTML = 'No Time Left';
    alert("You're out of time!");
  }
}, 1000);


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
}
    
function GoToNextQuestion () {
    currentQuestion = currentQuestion + 1
    if (currentQuestion >= listOfQuestions.length) {
        return;
    endQuiz();
    }

    document.getElementById('question') = ListofQuestion[currentQuestion].question;
    document.getElementById('answerA') = ListofQuestion[currentQuestion].answerA;
    document.getElementById('answerB') = ListofQuestion[currentQuestion].answerB;
    document.getElementById('answerC') = ListofQuestion[currentQuestion].answerC;
    document.getElementById('answerD') = ListofQuestion[currentQuestion].answerD;
}