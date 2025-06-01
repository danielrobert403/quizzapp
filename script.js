
const questions = [
    {
        question: "Where is Dave from?", 
        answer: [
            { Text:"Peckham", correct: false},
            { Text:"Nigeria", correct: false},
            { Text:"Manchester", correct: false},
            { Text:"streatham", correct: true},
        ] 
    },
    {
        question: "What is Santan Dave's Real name", 
        answer: [
            { Text:"David omoregie", correct: false},
            { Text:"Dave Orsoba", correct: false},
            { Text:"David Omoregie Orsoba", correct: true},
            { Text:"David Santan", correct: false},
        ] 
    },
    {
        question: "In which Netflix series did Santan Dave make his acting debut?",
        answer: [
            { Text:"Top boy", correct: true},
            { Text:"We're all Alone", correct: false},
            { Text:"Black Mirror", correct: false},
            { Text:"The Crown", correct: false},
        ] 
    },
    { 
        question: "'MY bills is multiplying but my money is dividing' is a famous line from which song?",
        answer: [
            { Text:"Mecury", correct: false},
            { Text:"Drama", correct: false},
            { Text:"Both sides of a smile", correct: false},
            { Text:"God's eye", correct: true},
        ] 
    },
    { 
        question: "'Far the Rest But i'm far from my best' is a famous line from which song?", 
        answer: [
            { Text:"Location", correct: true},
            { Text:"Lesly", correct: false},
            { Text:"Heart Attack", correct: false},
            { Text:"Lazarus", correct: false},
        ] 
    }
    
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
});

startQuiz();

