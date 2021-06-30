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

checkUserColorSchemePreference();

function checkUserColorSchemePreference() {
    if (
        window.matchMedia("(prefers-color-scheme:dark)").matches && !colorScheme.dark
    ) {
        colorScheme.change()
    }
};

const resetButton = document.querySelector("#reset-button");
const mainPage = document.querySelector("#front-container");
const button1 = document.querySelector("#fifa");
const nflButton = document.querySelector("#nfl");
const olympicButton = document.querySelector("#olympics");
const movieButton = document.querySelector("#movie");
const importantMessage = document.querySelector("#important-message")
// main page query selectors above!
const soccerQuestionElement = document.querySelector("#question-message");
const soccerOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const soccer1 = document.querySelector("#soccer1");
const soccer2 = document.querySelector("#soccer2");
const soccer3 = document.querySelector("#soccer3");
const soccer4 = document.querySelector("#soccer4");
const soccerQuiz = document.querySelector("#soccer-quiz");
const soccerScoreMessage = document.querySelectorAll("#soccer-score-message");
// Soccer quiz query selectors above
const nflQuestionElement = document.querySelector("#nfl-question-message");
const nflOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const nfl1 = document.querySelector("#nfl1");
const nfl2 = document.querySelector("#nfl2");
const nfl3 = document.querySelector("#nfl3");
const nfl4 = document.querySelector("#nfl4");
const nflQuiz = document.querySelector("#nfl-quiz");
// nfl quiz query selectors above
const olympicQuestionElement = document.querySelector("#olympic-question-message");
const olympicOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const olympic1 = document.querySelector("#olympic1");
const olympic2 = document.querySelector("#olympic2");
const olympic3 = document.querySelector("#olympic3");
const olympic4 = document.querySelector("#olympic4");
const olympicQuiz = document.querySelector("#olympic-quiz");
// olympic quiz query selectors above
const movieQuestionElement = document.querySelector("#movie-question-message");
const movieOptions = Array.from(document.getElementsByClassName(".opt-btn"));
const movie1 = document.querySelector("#movie1");
const movie2 = document.querySelector("#movie2");
const movie3 = document.querySelector("#movie3");
const movie4 = document.querySelector("#movie4");
const movieQuiz = document.querySelector("#movie-quiz");
const movieScoreEl = document.querySelector("#movie-score-message")
// movie quiz query selectors above

// --------Variables---------
let currentSoccerQuestion = {};
let soccerScore = 0;
let soccerQuestionsAsked = 0;
let availableSoccerQuestions = [];
const soccerPointsAdded = 0;
const maxSoccerQuestions = 4;
let soccerQuestions = [
    {
    number: 1,
    question: "What country has won the most World Cups?",
    answer: 2,
    choice1: "Germany",
    choice2: "Brazil",
    choice3: "Italy",
    choice4: "Argentina",
    },

    {
    number: 2,
    question: "Who won the first ever World Cup in 1930?",
    answer: 4,
    choice1: "Brazil",
    choice2: "England",
    choice3:"Germany",
    choice4: "Uruguay",
    },

    {
    number: 3,
    question: "Which player has scored a record 15 goals in his World Cup career?",
    answer: 1,
    choice1: "Miroslav Klose - Germany",
    choice2: "Ronaldo - Brazil",
    choice3: "Christiano Ronoaldo - Portugal",
    choice4: "Messi - Argentina",
    },

    {
    number: 4,
    question: "Which country will host the 2022 World Cup?",
    answer: 3,
    choice1:"United Arab Emirates",
    choice2:"Kuwait",
    choice3:"Qatar",
    choice4:"Saudi Arabia",
    }
];
// soccer quiz variables above
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
    answer: 3,
    choice1: "Broncos",
    choice2: "49ers",
    choice3: "Cowboys",
    choice4: "Patriots",
    },
    {
    number: 2,
    question: "What is the oldest NFL franchise in continuous operation with the same name in the same location?",
    answer: 1,
    choice1: "Green Bay Packers",
    choice2: "New York Giants",
    choice3: "Chicago Bears",
    choice4: "Cleveland Browns",
    },
    {
    number: 3,
    question: "Which NFL player legally changed his name to match his jersey number?",
    answer: 4,
    choice1: "Dez Bryant",
    choice2: "Terrell Owens",
    choice3: "Deion Sanders",
    choice4: "Chad Johnson",
    },
    {
    number: 4,
    question: "What is the only NFL team to complete a perfect season?",
    answer: 3,
    choice1: "Seatle Seahawks",
    choice2: "New England Patriots",
    choice3: "Miami Dolphins",
    choice4: "New Orleans Saints",
    }
]
// NFL quiz variables above
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
    answer: 3,
    choice1: "Refuse To Lose",
    choice2: "Dare To Be Great",
    choice3: "Faster, Higher, Stronger",
    choice4: "Man's Reach Exceeds His Grasp",
    },
    {
    number: 2,
    question: "An Olympic gold medal is made mostly of what metal?",
    answer: 4,
    choice1: "Nickel",
    choice2: "Gold",
    choice3: "Copper",
    choice4: "Silver",
    },
    {
    number: 3,
    question: "Which of these animals were used in the 1900 Olympics?",
    answer: 2,
    choice1: "Camels",
    choice2: "Pigeons",
    choice3: "Bears",
    choice4: "Elephants",
    },
    {
    number: 4,
    question: "Which color is NOT one of the rings on the Olympic flag?",
    answer: 4,
    choice1: "Yellow",
    choice2: "Green",
    choice3: "Black",
    choice4: "Orange",
    },
]
// Olympic quiz variables above
let currentMovieQuestion = {};
let movieScore = "";
let movieQuestionsAsked = 0;
let availableMovieQuestions = [];
const moviePointsAdded = 10;
const movieMaxQuestions = 4;
let movieQuestions = [
    {
    number: 1,
    question: "Who introduced us to the flying V?",
    answer: 3,
    choice1: "The Anaheim Ducks",
    choice2: "The Detriot Ducklings",
    choice3: "The Mighty Ducks",
    choice4: "The Philadelphia Flyers",
    },
    {
    number: 2,
    question: "What fast food chain did Happy Gilmore make a commercial for?",
    answer: 3,
    choice1: "Mcdonalds",
    choice2: "Pizza Hut",
    choice3: "Subway",
    choice4: "Taco Bell",
    },
    {
    number: 3,
    question: "In The Sandlot, what is the name of The Beast?",
    answer: 1,
    choice1: "Hercules",
    choice2: "The Sultan of Swat",
    choice3: "Titan",
    choice4: "The Great Bambino",
    },
    {
    number: 4,
    question: "What was the name of the high school in Remember The Titans?",
    answer: 4,
    choice1: "Loudoun County High",
    choice2: "Jefferson High School",
    choice3: "Montgomery High",
    choice4: "T.C. Williams",
    }
]
// Movie quiz variables above

// ------Event Listeners -------
resetButton.addEventListener("click", init)
darkMode.addEventListener("click", colorScheme.change)
button1.addEventListener("click", SoccerQuizInit)
nflButton.addEventListener("click", nflQuizInit)
olympicButton.addEventListener("click", olympicQuizInit)
movieButton.addEventListener("click", movieQuizInit)
// main page event listeners above
soccer1.addEventListener("click", checkSoccerAnswer)
soccer2.addEventListener("click", checkSoccerAnswer)
soccer3.addEventListener("click", checkSoccerAnswer)
soccer4.addEventListener("click", checkSoccerAnswer)
// soccer quiz event listeners!
nfl1.addEventListener("click", checkNflAnswer)
nfl2.addEventListener("click", checkNflAnswer)
nfl3.addEventListener("click", checkNflAnswer)
nfl4.addEventListener("click", checkNflAnswer)
// nfl quiz event listeners
olympic1.addEventListener("click", checkOlympicAnswer)
olympic2.addEventListener("click", checkOlympicAnswer)
olympic3.addEventListener("click", checkOlympicAnswer)
olympic4.addEventListener("click", checkOlympicAnswer)
// olympic quiz event listeners
movie1.addEventListener("click", checkMovieAnswer)
movie2.addEventListener("click", checkMovieAnswer)
movie3.addEventListener("click", checkMovieAnswer)
movie4.addEventListener("click", checkMovieAnswer)

// -----functions ------
function init () {
    mainPage.classList.remove("front-container");
    soccerQuiz.classList.add("soccer-quiz-box");
    nflQuiz.classList.add("nfl-quiz-box");
    olympicQuiz.classList.add("olympic-quiz-box");
    movieQuiz.classList.add("movie-quiz-box")
    soccerScore = 0
    nflScore = 0
    olympicScore = 0
    movieScore = 0
}
// resets to  main menu-adding class that removes the quiz boxs

function SoccerQuizInit () {
    soccerQuiz.classList.remove("soccer-quiz-box");
    mainPage.classList.add("front-container");
    soccerQuestionsAsked = 0;
    soccerScore = 0;
    availableSoccerQuestions = [...soccerQuestions];
    nextSoccerQuestion();
}

function nextSoccerQuestion () {
    const soccerArray = Math.floor(Math.random() * availableSoccerQuestions.length);
    currentSoccerQuestion = availableSoccerQuestions[soccerArray];
    newSoccerQuestion = currentSoccerQuestion.question
    soccerQuestionElement.innerHTML = newSoccerQuestion

    newSoccerQuestionChoice1= currentSoccerQuestion.choice1;
    soccer1.innerHTML = newSoccerQuestionChoice1;

    newSoccerQuestionChoice2 = currentSoccerQuestion.choice2;
    soccer2.innerHTML = newSoccerQuestionChoice2;

    newSoccerQuestionChoice3 = currentSoccerQuestion.choice3;
    soccer3.innerHTML = newSoccerQuestionChoice3;

    newSoccerQuestionChoice4 = currentSoccerQuestion.choice4
    soccer4.innerHTML = newSoccerQuestionChoice4
}



function nflQuizInit () {
    nflQuiz.classList.remove("nfl-quiz-box");
    mainPage.classList.add("front-container");
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

function checkNflAnswer (e) {
    if (e.target.value == currentNflQuestion.answer) {
    nflScore++
    nextNflQuestion()
    }
}

function olympicQuizInit () {
    olympicQuiz.classList.remove("olympic-quiz-box");
    mainPage.classList.add("front-container");
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

function checkOlympicAnswer (e) {
    if (e.target.value == currentOlympicQuestion.answer) {
    olympicScore++
    console.log("correct")
    } else if (e.target.value !== currentOlympicQuestion.answer) {
    console.log("wrong")
    }
    nextOlympicQuestion()
}

function movieQuizInit () {
    movieQuiz.classList.remove("movie-quiz-box");
    mainPage.classList.add("front-container");
    movieQuestionsAsked = 0;
    movieScore = 0;
    availableMovieQuestions = [...movieQuestions];
    nextMovieQuestion();
}

function nextMovieQuestion () {
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

function checkMovieAnswer (e) {
    if (e.target.value == currentMovieQuestion.answer) {
    movieScore += 25
    movieQuestionsAsked +=1
    } else if (e.target.value !== currentMovieQuestion.answer) {
    movieQuestionsAsked +=1
    }
    checkEndQuiz()
    nextMovieQuestion()
    movieScoreEl.innerText = `${movieScore} /100`
    console.log(movieScore)
    console.log(movieQuestionsAsked)
}

function checkEndMovieQuiz () {
    if (movieQuestionsAsked === 4){
    init()
}
// }
// function renderMovieScore (){
//     importantMessage.innerHTML = `Good job! You got ${movieScore} points`
// }


//         if (e.target.value !== currentMovieQuestion.answer)
//     }
    
//     movieQuestionsAsked++
//     } else if (e.target.value !== currentMovieQuestion.answer) {
//     console.log("wrong!")
//     movieQuestionsAsked++
//     }
//     nextMovieQuestion()
// }console.log(movieScore)