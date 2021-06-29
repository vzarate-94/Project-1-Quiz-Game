// ------ Constants ------

// ----- variables -----
const nflQuestionElement = document.querySelector("#question-message");
const nflOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const newSoccerQuestionChoice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");

let currentNflQuestion = {};
let nflScore = 0;
let questionsAsked = 0;
let availableNflQuestions = [];
const pointsAdded = 10;
const maxQuestions = 4;

let nflQuestions = [
    {
    number: 1,
    question: "What team won 3 Super Bowls in the 1990s?",
    answer: "Cowboys",
    choice1: "Broncos",
    choice2: "49ers",
    choice3: "Cowboys",
    choice4: "Patriots",
    },
    {
    number: 2,
    question: "What is the oldest NFL franchise in continuous operation with the same name in the same location?",
    answer: "Green Bay Packers",
    choice1: "Green Bay Packers",
    choice2: "New York Giants",
    choice3: "Chicago Bears",
    choice4: "Cleveland Browns",
    },
    {
    number: 3,
    question: "Which NFL player legally changed his name to match his jersey number?",
    answer: "Chad Johnson",
    choice1: "Dez Bryant",
    choice2: "Terrell Owens",
    choice3: "Deion Sanders",
    choice4: "Chad Johnson",
    },
    {
    number: 4,
    question: "What is the only NFL team to complete a perfect season?",
    answer: "Miami Dolphins",
    choice1: "Seatle Seahawks",
    choice2: "New England Patriots",
    choice3: "Miami Dolphins",
    choice4: "New Orleans Saints",
    }
]
// ------Event Listeners -------
// -----functions ------

function nflQuizInit () {
    questionsAsked = 0;
    nflScore = 0;
    availableNflQuestions = [...nflQuestions];
    nextNflQuestion();
}

function nextNflQuestion () {
    questionsAsked++;
    const nflArray = Math.floor(Math.random() * availableNflQuestions.length);
    currentNflQuestion = availableNflQuestions[nflArray];
    newNflQuestion = currentNflQuestion.question
    nflQuestionElement.innerHTML = newNflQuestion

    newNflQuestionChoice1= currentNflQuestion.choice1;
    choice1.innerHTML = newNflQuestionChoice1;

    newNflQuestionChoice2= currentNflQuestion.choice2;
    choice2.innerHTML = newNflQuestionChoice2;

    newNflQuestionChoice3= currentNflQuestion.choice3;
    choice3.innerHTML = newNflQuestionChoice3;

    newNflQuestionChoice4= currentNflQuestion.choice4;
    choice4.innerHTML = newNflQuestionChoice4;
}


//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

nflQuizInit()
