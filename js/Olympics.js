
// ------ Constants ------

// ----- variables -----
const olympicQuestionElement = document.querySelector("#question-message");
const olympicOptions = Array.from(document.getElementsByClassName(".opt-btn"));

let currentOlympicQuestion = {};
let olympicScore = 0;
let questionsAsked = 0;
let availableOlympicQuestions = [];
const pointsAdded = 10;
const maxQuestions = 4;

let olympicQuestions = [
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
    number: 2,
    question: "An Olympic gold medal is made mostly of what metal?",
    answer: "Silver",
    choice1: "Nickel",
    choice2: "Gold",
    choice3: "Copper",
    choice4: "Silver",
    },
    {
    number: 3,
    question: "Which of these animals were used in the 1900 Olympics?",
    answer: "Pigeons",
    choice1: "Camels",
    choice2: "Pigeons",
    choice3: "Bears",
    choice4: "Elephants",
    },
    {
    number: 4,
    question: "Which color is NOT one of the rings on the Olympic flag?",
    answer: "Orange",
    choice1: "Yellow",
    choice2: "Green",
    choice3: "Black",
    choice4: "Orange",
    },
]
// ------Event Listeners -------
// -----functions ------

function olympicQuizInit () {
    questionsAsked = 0;
    olympicScore = 0;
    availableOlympicQuestions = [...olympicQuestions];
    nextOlympicQuestion();
}

function nextOlympicQuestion () {
    questionsAsked++;
    const olympicArray = Math.floor(Math.random() * availableOlympicQuestions.length);
    currentOlympicQuestion = availableOlympicQuestions[olympicArray];
    newOlympicQuestion = currentOlympicQuestion.question
    olympicQuestionElement.innerHTML = newOlympicQuestion
}

//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

olympicQuizInit()