/*----- constants -----*/ 
const colorScheme = {
    dark: "",
    change: function() {
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
    }
};

checkUserColorSchemePreference();

function checkUserColorSchemePreference() {
    if (
        window.matchMedia("(prefers-color-scheme:dark)").matches && !colorScheme.dark
    ) {
        colorScheme.change()
    }
};

// ------ Constants ------

// ----- variables -----
const soccerQuestionElement = document.querySelector("#question-message");
const soccerOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");

const button1 = document.querySelector("#fifa")

button1.addEventListener("click", SoccerQuizInit)


let currentSoccerQuestion = {};
let soccerScore = 0;
let soccerQuestionsAsked = 0;
let availableSoccerQuestions = [];
const soccerPointsAdded = 10;
const maxSoccerQuestions = 4;

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
    soccerQuestionsAsked = 0;
    soccerScore = 0;
    availableSoccerQuestions = [...soccerQuestions];
    nextSoccerQuestion();
}

function nextSoccerQuestion () {
    soccerQuestionsAsked++;
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

const nflQuestionElement = document.querySelector("#nfl-question-message");
const nflOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const nfl1 = document.querySelector("#nfl1");
const nfl2 = document.querySelector("#nfl2");
const nfl3 = document.querySelector("#nfl3");
const nfl4 = document.querySelector("#nfl4");

let currentNflQuestion = {};
let nflScore = 0;
let nflQuestionsAsked = 0;
let availableNflQuestions = [];
const nflPointsAdded = 10;
const nflMaxQuestions = 4;

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
    nflquestionsAsked = 0;
    nflScore = 0;
    availableNflQuestions = [...nflQuestions];
    nextNflQuestion();
}

function nextNflQuestion () {
    nflQuestionsAsked++;
    const nflArray = Math.floor(Math.random() * availableNflQuestions.length);
    currentNflQuestion = availableNflQuestions[nflArray];
    newNflQuestion = currentNflQuestion.question
    nflQuestionElement.innerHTML = newNflQuestion

    newNflQuestionChoice1= currentNflQuestion.choice1;
    nfl1.innerHTML = newNflQuestionChoice1;

    newNflQuestionChoice2= currentNflQuestion.choice2;
    nfl2.innerHTML = newNflQuestionChoice2;

    newNflQuestionChoice3= currentNflQuestion.choice3;
    nfl3.innerHTML = newNflQuestionChoice3;

    newNflQuestionChoice4= currentNflQuestion.choice4;
    nfl4.innerHTML = newNflQuestionChoice4;
}


//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

nflQuizInit()

const olympicQuestionElement = document.querySelector("#olympic-question-message");
const olympicOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const Olympic1 = document.querySelector("#olympic1");
const Olympic2 = document.querySelector("#olympic2");
const Olympic3 = document.querySelector("#olympic3");
const Olympic4 = document.querySelector("#olympic4");

let currentOlympicQuestion = {};
let olympicScore = 0;
let OlympicQuestionsAsked = 0;
let availableOlympicQuestions = [];
const OlympicPointsAdded = 10;
const OlympicMaxQuestions = 4;

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
    olympicQuestionsAsked = 0;
    olympicScore = 0;
    availableOlympicQuestions = [...olympicQuestions];
    nextOlympicQuestion();
}

function nextOlympicQuestion () {
    olympicQuestionsAsked++;
    const olympicArray = Math.floor(Math.random() * availableOlympicQuestions.length);
    currentOlympicQuestion = availableOlympicQuestions[olympicArray];
    newOlympicQuestion = currentOlympicQuestion.question
    olympicQuestionElement.innerHTML = newOlympicQuestion

    newOlympicQuestionChoice1= currentOlympicQuestion.choice1;
    Olympic1.innerHTML = newOlympicQuestionChoice1;

    newOlympicQuestionChoice2= currentOlympicQuestion.choice2;
    Olympic2.innerHTML = newOlympicQuestionChoice2;

    newNflQuestionChoice3= currentNflQuestion.choice3;
    Olympic3.innerHTML = newOlympicQuestionChoice3;

    newNflQuestionChoice4= currentNflQuestion.choice4;
    Olympic4.innerHTML = newOlympicQuestionChoice4;
}

//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

olympicQuizInit()

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
    choice2: "Michael Jordan",
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
    question: "Which NBA player is featured in a Super Nintendo game called Combat Basketball?",
    answer: "Bill Laimbeer",
    choice1: "Dennis Rodman",
    choice2: "Bill Laimbeer",
    choice3: "Shaq",
    choice4: "Michael Jordan",
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