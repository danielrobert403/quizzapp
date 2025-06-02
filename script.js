
const questions = [
    {
        question: "Where is Dave from?", 
        answers: [
            { text: "Peckham", correct: false},
            { text: "Nigeria", correct: false},
            { text: "Manchester", correct: false},
            { text: "streatham", correct: true},
        ] 
    },
    {
        question: "Which year did Dave release his debut album 'Psychodrama'?",
        answers: [
            { text: "2017", correct: false },
            { text: "2019", correct: true },
            { text: "2018", correct: false },
            { text: "2020", correct: false },
        ]
    },
    {
        question: "What is the title of Dave's second studio album?",
        answers: [
            { text: "Game Over", correct: false },
            { text: "We're All Alone In This Together", correct: true },
            { text: "Six Paths", correct: false },
            { text: "Psychodrama", correct: false },
        ]
    },
    {
        question: "Which football club does Dave support?",
        answers: [
            { text: "Chelsea", correct: false },
            { text: "Manchester United", correct: true },
            { text: "Arsenal", correct: false },
            { text: "Liverpool", correct: false },
        ]
    },
    {
        question: "Dave won the Mercury Prize for which album?",
        answers: [
            { text: "Game Over", correct: false },
            { text: "Psychodrama", correct: true },
            { text: "Six Paths", correct: false },
            { text: "We're All Alone In This Together", correct: false },
        ]
    },
    {
        question: "Which song did Dave perform at the 2020 BRIT Awards?",
        answers: [
            { text: "Black", correct: true },
            { text: "Location", correct: false },
            { text: "Streatham", correct: false },
            { text: "Funky Friday", correct: false },
        ]
    }, {
        question: "What instrument is Dave known for playing?",
        answers: [
            { text: "Guitar", correct: false },
            { text: "Piano", correct: true },
            { text: "Drums", correct: false },
            { text: "Violin", correct: false },
        ]
    },
    {
        question: "Which artist collaborated with Dave on the song 'Location'?",
        answers: [
            { text: "Stormzy", correct: false },
            { text: "J Hus", correct: false },
            { text: "Burna Boy", correct: true },
            { text: "AJ Tracey", correct: false },
        ]
    }, {
        question: "What is Santan Dave's Real name", 
        answers: [
            { text: "David omoregie", correct: false},
            { text: "Dave Orsoba", correct: false},
            { text: "David Omoregie Orsoba", correct: true},
            { text: "David Santan", correct: false},
        ] 
    },
    {
        question: "In which Netflix series did Santan Dave make his acting debut?",
        answers: [
            { text: "Top boy", correct: true},
            { text: "We're all Alone", correct: false},
            { text: "Black Mirror", correct: false},
            { text: "The Crown", correct: false},
        ] 
    },
    { 
        question: "'MY bills is multiplying but my money is dividing' is a famous line from which song?",
        answers: [
            { text: "Mecury", correct: false},
            { text: "Drama", correct: false},
            { text: "Both sides of a smile", correct: false},
            { text: "God's eye", correct: true},
        ] 
    },
    { 
        question: "'Far the Rest But i'm far from my best' is a famous line from which song?", 
        answers: [
            { text: "Location", correct: true},
            { text: "Lesly", correct: false},
            { text: "Heart Attack", correct: false},
            { text: "Lazarus", correct: false},
        ] 
    }
    
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    shuffledQuestions = questions
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if (answer.correct){
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

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.removeEventListener("click", handleNextButton);
    nextButton.addEventListener("click", () => {
        startQuiz();
    });
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.removeEventListener("click", handleNextButton);
nextButton.addEventListener("click", handleNextButton);

startQuiz();

