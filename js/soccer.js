// ------ Constants ------

// ----- variables -----
const soccerQuestionElement = document.querySelector("#question-message");
const soccerOptions = Array.from(document.getElementsByClassName(".opt-btn"));

let currentSoccerQuestion = {};
let soccerScore = 0;
let questionsAsked = 0;
let availableSoccerQuestions = [];
const pointsAdded = 10;
const maxQuestions = 4;

let soccerQuestions = [
    {
    number: 1,
    question: "What country has won the most World Cups?",
    answer: "choice2",
    choice1: "Germany",
    choice2: "Brazil",
    choice3: "Italy",
    choice4: "Argentina",
    },

    {
    number: 2,
    question: "Who won the first ever World Cup in 1930?",
    answer: "choice4",
    choice1: "Brazil",
    choice2: "England",
    choice3:"Germany",
    choice4: "Uruguay",
    },

    {
    number: 3,
    question: "Which player has scored a record 15 goals in his World Cup career?",
    answer: "choice1",
    choice1: "Miroslav Klose - Germany",
    choice2: "Ronaldo - Brazil",
    choice3: "Christiano Ronoaldo - Portugal",
    choice4: "Messi - Argintina",
    },

    {
    number: 4,
    question: "Which country will host the 2022 World Cup?",
    answer: "Qatar",
    choice1:"United Arab Emirates",
    choice2:"Kuwait",
    choice3:"Qatar",
    choice4:"Saudi Arabia",
    }
];
// ------Event Listeners -------
// -----functions ------

function SoccerQuizInit () {
    questionsAsked = 0;
    soccerScore = 0;
    availableSoccerQuestions = [...soccerQuestions];

    console.log(availableSoccerQuestions)
}
SoccerQuizInit()

let randomSoccerQuestion = [];

function giveSoccerQuestion () {
    while(randomSoccerQuestion.length <= 4) {
        const soccerRandom = soccerQuestions[Math.floor(Math.random() * soccerQuestions.length)]
        if (!randomSoccerQuestion.includes(soccerRandom)) {
            giveSoccerQuestion.push(soccerRandom)
        }
    }
};