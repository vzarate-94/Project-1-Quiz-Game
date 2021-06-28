let question = document.querySelector("#categories");
const choices = Array.from(document.querySelector(".choice"));
const fifaWorldCup = document.querySelector("#choice1")

fifaWorldCup.addEventListener("click", startGame);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Which country has won the most World Cups?",
        choice1: "Brazil" ,
        choice2: "Germany",
        choice3: "Brazil",
        choice4: "Italy",
        answer: 1,
    },
    {
        question: "Who won the first ever World Cup in 1930?",
        choice1: "Brazil'>",
        choice2: "England",
        choice3: "Germany",
        choice4: "Uruguay",
        answer: 4,
    },
    {
        question: "Which player has scored a record 15 goals in his  World Cup career?",
        choice1: "Miroslav Klose - Germany",
        choice2: "Ronaldo - Brazil",
        choice3: "Christiano Ronoaldo - Portugal",
        choice4: "Messi - Argintina",
        answer: 1,
    },
    {
        question: "Which country will host the 2022 World Cup?",
        answer: "Qatar",
        choice1:"United Arab Emirates",
        choice2:"Kuwait",
        choice3:"Qatar",
        choice4:"Saudi Arabia",
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;
init ()

function init () {
    question = ""
}

function startGame ()  {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

function getNewQuestion ()  {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();