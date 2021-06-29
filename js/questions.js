
// ------ Constants ------

// ----- variables -----
const nflQuestionElement = document.querySelector("#question-message");
const nflOptions = Array.from(document.getElementsByClassName(".opt-btn"));

let currentNflQuestion = {};
let NflScore = 0;
let questionsAsked = 0;
let availableNflQuestions = [];
const pointsAdded = 10;
const maxQuestions = 4;

let OlympicsQuestions = [
    {
    number: 1,
    question: "What is the Olympic motto?",
    answer: "Faster, Higher Stronger",
    choice1: "Refuse To Lose",
    choice2: "Dare To Be Great",
    choice3: "Faster, Higher Stronger",
    choice4: "Man's Reach Exceeds His Grasp",
    },
    {
    number: 1,
    question: "What is the Olympic motto?",
    answer: "Faster, Higher Stronger",
    choice1: "Refuse To Lose",
    choice2: "Dare To Be Great",
    choice3: "Faster, Higher Stronger",
    choice4: "Man's Reach Exceeds His Grasp",
    },
    {
    number: 1,
    question: "What is the Olympic motto?",
    answer: "Faster, Higher Stronger",
    choice1: "Refuse To Lose",
    choice2: "Dare To Be Great",
    choice3: "Faster, Higher Stronger",
    choice4: "Man's Reach Exceeds His Grasp",
    },
    {
    number: 1,
    question: "What is the Olympic motto?",
    answer: "Faster, Higher Stronger",
    choice1: "Refuse To Lose",
    choice2: "Dare To Be Great",
    choice3: "Faster, Higher Stronger",
    choice4: "Man's Reach Exceeds His Grasp",
    },
]
// ------Event Listeners -------
// -----functions ------

function NflQuizInit () {
    questionsAsked = 0;
    NflScore = 0;
    availableNflQuestions = [...NflQuestions];
    nextNflQuestion();
}

function nextNflQuestion () {
    questionsAsked++;
    const nflArray = Math.floor(Math.random() * availableNflQuestions.length);
    currentNflQuestion = availableNflQuestions[nflArray];
    newNflQuestion = currentNflQuestion.question
    nflQuestionElement.innerHTML = newNflQuestion
}

//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

NflQuizInit()