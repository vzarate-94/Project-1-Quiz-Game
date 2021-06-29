// ------ Constants ------

// ----- variables -----
const soccerQuestionElement = document.querySelector("#question-message");
const soccerOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");


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
    choice4: "Messi - Argentina",
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
    nextSoccerQuestion();
}

function nextSoccerQuestion () {
    questionsAsked++;
    const soccerArray = Math.floor(Math.random() * availableSoccerQuestions.length);
    currentSoccerQuestion = availableSoccerQuestions[soccerArray];
    newSoccerQuestion = currentSoccerQuestion.question
    soccerQuestionElement.innerHTML = newSoccerQuestion

    newSoccerQuestionChoice1= currentSoccerQuestion.choice1;
    choice1.innerHTML = newSoccerQuestionChoice1;

    newSoccerQuestionChoice2 = currentSoccerQuestion.choice2;
    choice2.innerHTML = newSoccerQuestionChoice2;

    newSoccerQuestionChoice3 = currentSoccerQuestion.choice3;
    choice3.innerHTML = newSoccerQuestionChoice3;

    newSoccerQuestionChoice4 = currentSoccerQuestion.choice4
    choice4.innerHTML = newSoccerQuestionChoice4
}

//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

SoccerQuizInit()

