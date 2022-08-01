const startBtn = document.getElementById('startBtn');
const questionContainerElement = document.getElementById("questionContainer"); 
var listOfQuestions = document.getElementById('questionContainer');


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
