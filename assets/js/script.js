const startBtn = document.getElementById('startBtn');
const questionContainerElement = document.getElementById("questionContainer"); 


startBtn.addEventListener("click", startQuiz) 

function startQuiz () {
    console.log("start")
    startBtn.classList.add("hideThis");
    questionContainerElement.classList.remove("hideThis");
    GoToNextQuestion ();
}

function GoToNextQuestion () {

}
