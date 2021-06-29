// ------ Constants ------

// ----- variables -----
const bballQuestionElement = document.querySelector("#question-message");
const bballOptions = Array.from(document.getElementsByClassName(".opt-btn"));

let currentBballQuestion = {};
let BballScore = 0;
let questionsAsked = 0;
let availableBballQuestions = [];
const pointsAdded = 10;
const maxQuestions = 4;

let bballQuestions = [
    {
    number: 1,
    question: "Who was the youngest player to score 10,000 points in the NBA?",
    answer: "Lebron James",
    choice1: "Kobe Bryant",
    choice2: "Micheal Jordan",
    choice3: "Lebron James",
    choice4: "Wilt Chamberlain",
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

function bballQuizInit () {
    questionsAsked = 0;
    bballScore = 0;
    availableBballQuestions = [...bballQuestions];
    nextBballQuestion();
}

function nextBballQuestion () {
    questionsAsked++;
    const bballArray = Math.floor(Math.random() * availableBballQuestions.length);
    currentBballQuestion = availableBballQuestions[bballArray];
    newBballQuestion = currentBballQuestion.question
    bballQuestionElement.innerHTML = newBballQuestion
}

//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

bballQuizInit()