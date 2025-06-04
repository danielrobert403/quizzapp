
const easyQuestions = [
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
    }
    ,
    {
        question: "Which song by Dave features Fredo and reached number one on the UK Singles Chart?",
        answers: [
            { text: "Funky Friday", correct: true },
            { text: "Location", correct: false },
            { text: "Black", correct: false },
            { text: "Streatham", correct: false },
        ]
    },
    {
        question: "What is Dave's full stage name?",
        answers: [
            { text: "Santan Dave", correct: true },
            { text: "Dave Santan", correct: false },
            { text: "Dave Omoregie", correct: false },
            { text: "Santan", correct: false },
        ]
    },
    {
        question: "Which Dave song includes the lyric 'Look, I know killers and I know victims'?",
        answers: [
            { text: "Black", correct: false },
            { text: "Streatham", correct: true },
            { text: "Disaster", correct: false },
            { text: "Lesley", correct: false },
        ]
    }
];

const intermediateQuestions = [
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
    }
    ,
    {
        question: "Which Dave song features a guest verse from Headie One?",
        answers: [
            { text: "18Hunna", correct: false },
            { text: "Both", correct: false },
            { text: "Streatham", correct: false },
            { text: "Paper Cuts", correct: true },
        ]
    },
    {
        question: "What is the name of Dave's 2017 EP?",
        answers: [
            { text: "Game Over", correct: true },
            { text: "Six Paths", correct: false },
            { text: "Psychodrama", correct: false },
            { text: "Location", correct: false },
        ]
    },
    {
        question: "Which Dave song references Theresa May in its lyrics?",
        answers: [
            { text: "Question Time", correct: true },
            { text: "Black", correct: false },
            { text: "Disaster", correct: false },
            { text: "Lesley", correct: false },
        ]
    },
    {
        question: "Dave collaborated with which artist on the track 'Thiago Silva'?",
        answers: [
            { text: "AJ Tracey", correct: true },
            { text: "Stormzy", correct: false },
            { text: "J Hus", correct: false },
            { text: "Fredo", correct: false },
        ]
    }
];

const expertQuestions = [
    {
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
        question: "'Far From the Rest But i'm far from my best' is a famous line from which song?", 
        answers: [
            { text: "Location", correct: true},
            { text: "Lesly", correct: false},
            { text: "Heart Attack", correct: false},
            { text: "Lazarus", correct: false},
        ] 
    }
    ,
    {
        question: "Which university did Dave briefly attend before focusing on music?",
        answers: [
            { text: "University of Oxford", correct: false },
            { text: "De Montfort University", correct: true },
            { text: "University of Manchester", correct: false },
            { text: "King's College London", correct: false },
        ]
    },
    {
        question: "Dave appeared on which track from Drake's 'More Life' project?",
        answers: [
            { text: "Passionfruit", correct: false },
            { text: "No Long Talk", correct: false },
            { text: "KMT", correct: true },
            { text: "Free Smoke", correct: false },
        ]
    },
    {
        question: "What is the name of Dave's brother who is referenced in his music?",
        answers: [
            { text: "Ben", correct: false },
            { text: "Christopher", correct: false },
            { text: "Christopher Omoregie", correct: true },
            { text: "Michael", correct: false },
        ]
    },
    {
        question: "Which Dave song was produced by Fraser T. Smith and features a 10-minute narrative?",
        answers: [
            { text: "Lesley", correct: true },
            { text: "Black", correct: false },
            { text: "Funky Friday", correct: false },
            { text: "Disaster", correct: false },
        ]
    }
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let currentLevel = 0;
let levels = ['Easy', 'Intermediate', 'Expert'];
let currentQuestions = [];
let shuffledQuestions = [];

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    currentLevel = 0;
    loadLevel(currentLevel);
    nextButton.innerHTML = "Next";
    showQuestion();
}

function loadLevel(level){
    currentQuestionIndex = 0; // Reset question index when loading new level
    if(level === 0){
        currentQuestions = easyQuestions;
    } else if(level === 1){
        currentQuestions = intermediateQuestions;
    } else if(level === 2){
        currentQuestions = expertQuestions;
    } else {
        showFinalScore();
        return;
    }
    shuffledQuestions = currentQuestions
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function showQuestion(){
    resetState();
    // Ensure currentLevel is within bounds
    if(currentLevel < 0 || currentLevel >= levels.length){
        currentLevel = 0;
    }
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `Level: ${levels[currentLevel]} - Q${questionNo}. ${currentQuestion.question}`;

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
    // Disable next button until an answer is selected
    nextButton.style.display = "none";
    nextButton.disabled = true;
}

function resetState(){
    nextButton.style.display = "none";
    nextButton.disabled = true;
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
    // Enable next button only after an answer is selected
    nextButton.style.display = "block";
    nextButton.disabled = false;
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${currentQuestions.length}!`;
    nextButton.style.display = "block";
    // Remove all click listeners by replacing the button
    let newNextButton = clearNextButtonHandlers();
    if(currentLevel < levels.length - 1){
        newNextButton.innerHTML = "Next Level";
        newNextButton.addEventListener("click", () => {
            currentLevel++;
            currentQuestionIndex = 0;
            loadLevel(currentLevel);
            newNextButton.innerHTML = "Next";
            // Reattach handleNextButton for normal question navigation
            newNextButton.removeEventListener("click", handleNextButton);
            newNextButton.addEventListener("click", handleNextButton);
            showQuestion();
        });
    } else {
        // Last level reached, show final score
        showFinalScore();
    }
}

function showFinalScore(){
    resetState();
    questionElement.innerHTML = `Quiz completed! Your final score is ${score}.`;
    nextButton.style.display = "block";
    // Remove all click listeners by replacing the button
    let newNextButton = clearNextButtonHandlers();
    newNextButton.innerHTML = "Restart";
    newNextButton.addEventListener("click", () => {
        currentLevel = 0;
        currentQuestionIndex = 0;
        score = 0;
        loadLevel(currentLevel);
        newNextButton.innerHTML = "Next";
        // Reattach handleNextButton for normal question navigation
        newNextButton.removeEventListener("click", handleNextButton);
        newNextButton.addEventListener("click", handleNextButton);
        showQuestion();
    });
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < shuffledQuestions.length){
        showQuestion();
    } else {
        currentQuestionIndex = 0; // Reset for next level
        showScore();
    }
}

nextButton.removeEventListener("click", handleNextButton);
nextButton.addEventListener("click", handleNextButton);

function clearNextButtonHandlers(){
    const newNextButton = nextButton.cloneNode(true);
    nextButton.parentNode.replaceChild(newNextButton, nextButton);
    return newNextButton;
}

startQuiz();
