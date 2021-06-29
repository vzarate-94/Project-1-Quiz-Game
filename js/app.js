/*----- constants -----*/ 
const darkMode = document.querySelector("#dark-mode-button")
const colorScheme = {
    dark: "",
    change: function() {
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
    }
};
darkMode.addEventListener("click", colorScheme.change)



checkUserColorSchemePreference();

function checkUserColorSchemePreference() {
    if (
        window.matchMedia("(prefers-color-scheme:dark)").matches && !colorScheme.dark
    ) {
        colorScheme.change()
    }
};
console.log()
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
const olympic2 = document.querySelector("#olympic2");
const olympic3 = document.querySelector("#olympic3");
const olympic4 = document.querySelector("#olympic4");

let currentOlympicQuestion = {};
let olympicScore = 0;
let olympicQuestionsAsked = 0;
let availableOlympicQuestions = [];
const olympicPointsAdded = 10;
const olympicMaxQuestions = 4;

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
    olympic1.innerHTML = newOlympicQuestionChoice1;

    newOlympicQuestionChoice2= currentOlympicQuestion.choice2;
    olympic2.innerHTML = newOlympicQuestionChoice2;

    newOlympicQuestionChoice3= currentOlympicQuestion.choice3;
    olympic3.innerHTML = newOlympicQuestionChoice3;

    newOlympicQuestionChoice4= currentOlympicQuestion.choice4;
    olympic4.innerHTML = newOlympicQuestionChoice4;
}

//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

olympicQuizInit()

const movieQuestionElement = document.querySelector("#movie-question-message");
const movieOptions = Array.from(document.getElementsByClassName(".opt-btn"));

let currentMovieQuestion = {};
let MovieScore = 0;
let MovieQuestionsAsked = 0;
let availableMovieQuestions = [];
const moviePointsAdded = 10;
const movieMaxQuestions = 4;

let movieQuestions = [
    {
    number: 1,
    question: "Who introduced us to the flying V?",
    answer: "The Mighty Ducks",
    choice1: "The Anaheim Ducks",
    choice2: "The Detriot Ducklings",
    choice3: "The Mighty Ducks",
    choice4: "The Philadelphia Flyers",
    },
    {
    number: 2,
    question: "What fast food chain did Happy Gilmore make a commercial for?",
    answer: "Subway",
    choice1: "Mcdonalds",
    choice2: "Pizza Hut",
    choice3: "Subway",
    choice4: "Taco Bell",
    },
    {
    number: 3,
    question: "In The Sandlot, what is the name of The Beast?",
    answer: "Hercules",
    choice1: "Hercules",
    choice2: "The Sultan of Swat",
    choice3: "Titan",
    choice4: "The Great Bambino",
    },
    {
    number: 4,
    question: "What was the name of the high school in Remember The Titans?",
    answer: "T.C. Williams",
    choice1: "Loudoun County High",
    choice2: "Jefferson High School",
    choice3: "Montgomery High",
    choice4: "T.C. Williams",
    }
]
// ------Event Listeners -------
// -----functions ------

function movieQuizInit () {
    movieQuestionsAsked = 0;
    movieScore = 0;
    availableMovieQuestions = [...movieQuestions];
    nextMovieQuestion();
}

function nextMovieQuestion () {
    movieQuestionsAsked++;
    const movieArray = Math.floor(Math.random() * availableMovieQuestions.length);
    currentMovieQuestion = availableMovieQuestions[movieArray];
    newMovieQuestion = currentMovieQuestion.question
    movieQuestionElement.innerHTML = newMovieQuestion

    newMovieQuestionChoice1= currentMovieQuestion.choice1;
    movie1.innerHTML = newMovieQuestionChoice1;

    newMovieQuestionChoice2= currentMovieQuestion.choice2;
    movie2.innerHTML = newMovieQuestionChoice2;

    newMovieQuestionChoice3= currentMovieQuestion.choice3;
    movie3.innerHTML = newMovieQuestionChoice3;

    newMovieQuestionChoice4= currentMovieQuestion.choice4;
    movie4.innerHTML = newMovieQuestionChoice4;
}

//     soccerOptions.forEach(choice => {
//         const soccerNumber = choice.dataset["number"]
//         choice.innerHTML = newSoccerQuestion["choice" + number]
//         console.log(newSoccerQuestion["choice" + number])
//     });
// };

movieQuizInit()