/*----- constants -----*/ 
const darkMode = document.querySelector("#dark-mode-button")
const colorScheme = {
    dark: "",
    change: function() {
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
    }
}

const countdownEl = document.querySelector("#timer")
const mainMessageEl = document.querySelector("#main-menu")
const resetButton = document.querySelector("#reset-button")
const mainPage = document.querySelector("#front-container")
const button1 = document.querySelector("#fifa")
const nflButton = document.querySelector("#nfl")
const olympicButton = document.querySelector("#olympics")
const movieButton = document.querySelector("#movie")
const importantMessage = document.querySelector("#important-message")
const tickTock = new Audio('../audio/mixkit-bell-tick-tock-timer-1046.wav')
let timer 
let countDown
// main page query selectors above!
const soccerQuestionElement = document.querySelector("#question-message")
const soccer1 = document.querySelector("#soccer1")
const soccer2 = document.querySelector("#soccer2")
const soccer3 = document.querySelector("#soccer3")
const soccer4 = document.querySelector("#soccer4")
const soccerQuiz = document.querySelector("#soccer-quiz")
const soccerScoreEl = document.querySelector("#soccer-score-message")
// Soccer quiz query selectors above
const nflQuestionElement = document.querySelector("#nfl-question-message")
const nfl1 = document.querySelector("#nfl1")
const nfl2 = document.querySelector("#nfl2")
const nfl3 = document.querySelector("#nfl3")
const nfl4 = document.querySelector("#nfl4")
const nflQuiz = document.querySelector("#nfl-quiz")
const nflScoreEl = document.querySelector("#nfl-score-message")
// nfl quiz query selectors above
const olympicQuestionElement = document.querySelector("#olympic-question-message")
const olympic1 = document.querySelector("#olympic1")
const olympic2 = document.querySelector("#olympic2")
const olympic3 = document.querySelector("#olympic3")
const olympic4 = document.querySelector("#olympic4")
const olympicQuiz = document.querySelector("#olympic-quiz")
const olympicMessageEl = document.querySelector("#olympic-score-message")
// olympic quiz query selectors above
const movieQuestionElement = document.querySelector("#movie-question-message")
const movie1 = document.querySelector("#movie1")
const movie2 = document.querySelector("#movie2")
const movie3 = document.querySelector("#movie3")
const movie4 = document.querySelector("#movie4")
const movieQuiz = document.querySelector("#movie-quiz")
const movieScoreEl = document.querySelector("#movie-score-message")
// movie quiz query selectors above

// --------Variables---------


let currentSoccerQuestion = {}
let soccerScore = ""
let soccerQuestionsAsked = 0
let availableSoccerQuestions = []
let soccerQuestions = [
    {
    number: 1,
    question: "Which country has won the most World Cups?",
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
    },
    {
    number: 5,
    question: "Which country won the 2006 World Cup?",
    answer: 4,
    choice1:"USA",
    choice2:"Germany",
    choice3:"France",
    choice4:"Italy",
    },
    {
    number: 6,
    question: "How many World Cups has the U.S. Womens soccer team won?",
    answer: 1,
    choice1:"4",
    choice2:"6",
    choice3:"2",
    choice4:"8",
    },

]

// soccer quiz variables above
let currentNflQuestion = {}
let nflScore = ""
let nflQuestionsAsked = 0
let availableNflQuestions = []
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
    },
    {
    number: 5,
    question: "What Minnesota Vikings player was the 2007 AP Offensive Rookie of the Year?",
    answer: 2,
    choice1: "Marshawn Lynch",
    choice2: "Adrian Peterson",
    choice3: "Aqib Talib",
    choice4: "Jamaal Charles",
    },
    {
    number: 6,
    question: "Who was the first pick in the 2020 NFL Draft?",
    answer: 1,
    choice1: "Joe Burrow",
    choice2: "Chase Young",
    choice3: "Trevor Lawrence",
    choice4: "Justin Herbert",
    },
    {
    number: 7,
    question: "The LA Rams were previously in what city?",
    answer: 3,
    choice1: "San Diego",
    choice2: "Oakland",
    choice3: "St.louis",
    choice4: "Detriot",
    },
    {
    number: 8,
    question: "Where did Tom Brady go to college?",
    answer: 1,
    choice1: "Michigan",
    choice2: "Stanford",
    choice3: "Boston College",
    choice4: "Ohio State",
    },
    {
    number: 9,
    question: "Who won the most recent Super Bowl?",
    answer: 2,
    choice1: "New England Patriots",
    choice2: "Tampa Bay Buccaneers",
    choice3: "Kansas City Chiefs",
    choice4: "San Francisco 49rs",
    },
    {
    number: 10,
    question: "Who is Victor's favorite football team?",
    answer: 3,
    choice1: "New England Patriots",
    choice2: "Baltimore Ravens",
    choice3: "LA Chargers",
    choice4: "New York Giants",
    },
    {
    number: 11,
    question: "How many Super Bowls has there been",
    answer: 1,
    choice1: "52",
    choice2: "112",
    choice3: "21",
    choice4: "49",
    },
    {
    number: 12,
    question: "Which Team Lost The Super Bowl Four Consecutive Times?",
    answer: 2,
    choice1: "Washington Football Team",
    choice2: "Buffalo Bills",
    choice3: "Oakland Raiders",
    choice4: "Chicago Bears",
    },
    {
    number: 13,
    question: "Which team won the first ever Super Bowl?",
    answer: 1,
    choice1: "Green Bay Packers",
    choice2: "New York Giants",
    choice3: "Kansas City Chiefs",
    choice4: "Chicago Bears",
    },
    {
    number: 14,
    question: "Which NFL team has no logo on their helmet??",
    answer: 3,
    choice1: "Green Bay Packers",
    choice2: "New York Giants",
    choice3: "Cleveland Browns",
    choice4: "Houston Texans",
    },
]

// NFL quiz variables above
let currentOlympicQuestion = {}
let olympicScore = ""
let olympicQuestionsAsked = 0
let availableOlympicQuestions = []
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
    {
    number: 5,
    question: "In which year was the first Winter Olympics held?",
    answer: 1,
    choice1: "1924",
    choice2: "1896",
    choice3: "1954",
    choice4: "1932",
    },
    {
    number: 6,
    question: "How many rings does the Olympics flag contain?",
    answer: 3,
    choice1: "4",
    choice2: "6",
    choice3: "5",
    choice4: "8",
    },
    {
    number: 7,
    question: "How often do the summer Olympics happen?",
    answer: 2,
    choice1: "2 Years",
    choice2: "4 Years",
    choice3: "3 Years",
    choice4: "6 Years",
    },
    {
    number: 8,
    question: "In which of the Olympic games did the torch relay start for the first time?",
    answer: 4,
    choice1: "1720",
    choice2: "1950",
    choice3: "1902",
    choice4: "1936",
    },
    {
    number: 9,
    question: "How often do the summer Olympics happen?",
    answer: 2,
    choice1: "2 Years",
    choice2: "4 Years",
    choice3: "3 Years",
    choice4: "6 Years",
    },
    {
    number: 10,
    question: "When were the first modern Olympics hels?",
    answer: 1,
    choice1: "1896",
    choice2: "1920",
    choice3: "1840",
    choice4: "1952",
    },
    {
    number: 11,
    question: "Which Olympian hired a hitman to hurt Nancy Kerrigan's knee?",
    answer: 3,
    choice1: "Michael Phelps",
    choice2: "Gabby Douglas",
    choice3: "Tonya Harding",
    choice4: "Mary Lou Retton",
    },
    {
    number: 12,
    question: "Where will the Olympics be held this year?",
    answer: 4,
    choice1: "London",
    choice2: "Singapore",
    choice3: "Berlin",
    choice4: "Tokyo",
    },
    {
    number: 13,
    question: "Where will the 2022 Winter Olympics be held?",
    answer: 1,
    choice1: "Beijing",
    choice2: "Geneva",
    choice3: "Tokyo",
    choice4: "Berlin",
    },
]

// Olympic quiz variables above
let currentMovieQuestion = {}
let movieScore = ""
let movieQuestionsAsked = 0
let availableMovieQuestions = []
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
    },
    {
    number: 5,
    question: "In the movie Cool Runnings, what country is the bobsled team from?",
    answer: 2,
    choice1: "USA",
    choice2: "Jamaica",
    choice3: "Costa Rica",
    choice4: "South Africa",
    },
    {
    number: 6,
    question: "What breed of dog is Buddy from AirBud?",
    answer: 2,
    choice1: "Labrador",
    choice2: "Golden Retriever",
    choice3: "Golden Doodle",
    choice4: "Dalmation",
    },
    {
    number: 7,
    question: "What university did Rudy play for?",
    answer: 4,
    choice1: "USC",
    choice2: "Ohio State",
    choice3: "Michigan",
    choice4: "Notre Dame",
    },
    {
    number: 8,
    question: "Which Olympics did the USA hockey team beat the Russians in the movie Miracle?",
    answer: 3,
    choice1: "Sapporo 1972 ",
    choice2: "Innsbruck 1976",
    choice3: "Lake Placid 1980",
    choice4: "Sarajevo 1984",
    },
    {
    number: 9,
    question: "Jackie Robinson's baseball journey is depicted in this movie?",
    answer: 3,
    choice1: "49",
    choice2: "Jackie",
    choice3: "42",
    choice4: "NY Dodgers",
    },
    {
    number: 10,
    question: "This buildings steps in Philadelphia were made famous in the movie Rocky?",
    answer: 1,
    choice1: "Philadelphia Muesuem of Art",
    choice2: "Philadelphia City Hall",
    choice3: "Liberty Bell",
    choice4: "30th St Grand Station",
    },
    {
    number: 11,
    question: "Finish the title of this movie `Bend it like ____` ",
    answer: 3,
    choice1: "Messi",
    choice2: "Mia Hamm",
    choice3: "Beckham",
    choice4: "Christiano",
    },
    {
    number: 12,
    question: "What is the name of the football team of criminals in The Longest Yard?",
    answer: 4,
    choice1: "Oakland Raiders",
    choice2: "Winning Inmates",
    choice3: "Tough Lions",
    choice4: "Mean Machine",
    },
    {
    number: 13,
    question: "This 1993 movie proved that a child could be an MLB player. What is it?",
    answer: 1,
    choice1: "Rookie of the Year",
    choice2: "Angels in the Outfield",
    choice3: "The Sandlot",
    choice4: "The Big Green",
    },
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
checkUserColorSchemePreference()

function checkUserColorSchemePreference() {
    if (
        window.matchMedia("(prefers-color-scheme:dark)").matches && !colorScheme.dark
    ) {
        colorScheme.change()
    }
}
// Above code changes the dark mode setting.

function init () {
    mainMessageEl.innerHTML = "Welcome to Sports Trivia Central"
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
// Resets to  main menu-adding class that removes the quiz boxs

function SoccerQuizInit () {
    soccerQuiz.classList.remove("soccer-quiz-box")
    mainPage.classList.add("front-container")
    soccerQuestionsAsked = 1
    soccerScore = 0
    availableSoccerQuestions = [...soccerQuestions]
    nextSoccerQuestion()
    setTimeout(function(){
        tickTock.play()
    },10)
    countDown = 60
    timer = setInterval(function(){
        countDown -= 1
        countdownEl.innerHTML = countDown
        if (countDown <= 0) {
            timesUp()
            clearInterval(timer)
        }
    }, 1000)
}
// Initializes the quiz board, makes the main menu display:none. starts the tick tock sound and starts timer for soccer quiz

function nextSoccerQuestion () {
    const soccerArray = Math.floor(Math.random() * availableSoccerQuestions.length)
    currentSoccerQuestion = availableSoccerQuestions[soccerArray]
    newSoccerQuestion = currentSoccerQuestion.question
    soccerQuestionElement.innerHTML = `${soccerQuestionsAsked}: ${newSoccerQuestion}`

    newSoccerQuestionChoice1= currentSoccerQuestion.choice1
    soccer1.innerHTML = newSoccerQuestionChoice1

    newSoccerQuestionChoice2 = currentSoccerQuestion.choice2
    soccer2.innerHTML = newSoccerQuestionChoice2

    newSoccerQuestionChoice3 = currentSoccerQuestion.choice3
    soccer3.innerHTML = newSoccerQuestionChoice3

    newSoccerQuestionChoice4 = currentSoccerQuestion.choice4
    soccer4.innerHTML = newSoccerQuestionChoice4
}
// gets random Soccer question and puts the question and choices on to the quiz board.

function checkSoccerAnswer (e) {
    if (e.target.value == currentSoccerQuestion.answer) {
    soccerScore += 20
    soccerQuestionsAsked +=1
    } else if (e.target.value !== currentSoccerQuestion.answer) {
    soccerQuestionsAsked +=1
    }
    checkEndSoccerQuiz()
    nextSoccerQuestion()
    soccerScoreEl.innerText = `${soccerScore} /100`
}
// Checking for the correct answer. Will also go to checkEndSoccerQuiz function to see if all 5 questions have been asked

function checkEndSoccerQuiz () {
    if (soccerQuestionsAsked == 6){
        mainMessageEl.innerText = `GREAT JOB! YOU GOT ${soccerScore} / 100 in ${60 -countDown} seconds!`
        clearInterval(timer)
        setTimeout (function() {
            init()
        },3000)
        soccerQuiz.classList.add("soccer-quiz-box");
        confetti.start(2000)
    }
}
// if all 5 questions have been asked, the quiz board disappears and a score will show up. Identical functions for all other quiz categories.

function nflQuizInit () {
    nflQuiz.classList.remove("nfl-quiz-box")
    mainPage.classList.add("front-container")
    nflQuestionsAsked = 1
    nflScore = 0
    availableNflQuestions = [...nflQuestions]
    nextNflQuestion()
    setTimeout(function(){
        tickTock.play()
    },10)
    countDown = 60
    timer = setInterval(function(){
        countDown -= 1
        countdownEl.innerHTML = countDown
        if (countDown <= 0) {
            timesUp()
            clearInterval(timer)
        }
    }, 1000)
}

function nextNflQuestion () {
    const nflArray = Math.floor(Math.random() * availableNflQuestions.length)
    currentNflQuestion = availableNflQuestions[nflArray]
    newNflQuestion = currentNflQuestion.question
    nflQuestionElement.innerHTML = `${nflQuestionsAsked}: ${newNflQuestion}`

    newNflQuestionChoice1= currentNflQuestion.choice1
    nfl1.innerHTML = newNflQuestionChoice1

    newNflQuestionChoice2= currentNflQuestion.choice2
    nfl2.innerHTML = newNflQuestionChoice2

    newNflQuestionChoice3= currentNflQuestion.choice3
    nfl3.innerHTML = newNflQuestionChoice3

    newNflQuestionChoice4= currentNflQuestion.choice4
    nfl4.innerHTML = newNflQuestionChoice4
}

function checkNflAnswer (e) {
    if (e.target.value == currentNflQuestion.answer) {
    nflScore += 20
    nflQuestionsAsked +=1
    } else if (e.target.value !== currentNflQuestion.answer) {
    nflQuestionsAsked +=1
    }
    checkEndNflQuiz()
    nextNflQuestion()
    nflScoreEl.innerText = `${nflScore} / 100`
}

function checkEndNflQuiz () {
    if (nflQuestionsAsked == 6){
        mainMessageEl.innerText = `GREAT JOB! YOU GOT ${nflScore} / 100 in ${60 - countDown} seconds!`
        clearInterval(timer)
            setTimeout (function() {
                init()
            },3000)
        nflQuiz.classList.add("nfl-quiz-box")
        confetti.start(2000)
        }
    }

function olympicQuizInit () {
    olympicQuiz.classList.remove("olympic-quiz-box")
    mainPage.classList.add("front-container")
    olympicQuestionsAsked = 1
    olympicScore = 0
    availableOlympicQuestions = [...olympicQuestions]
    nextOlympicQuestion()
    setTimeout(function(){
        tickTock.play()
    },10)
    countDown = 60
    timer = setInterval(function(){
        countDown -= 1
        countdownEl.innerHTML = countDown
        if (countDown <= 0) {
            timesUp()
            clearInterval(timer)
        }
    }, 1000)
}

function nextOlympicQuestion () {
    const olympicArray = Math.floor(Math.random() * availableOlympicQuestions.length)
    currentOlympicQuestion = availableOlympicQuestions[olympicArray]
    newOlympicQuestion = currentOlympicQuestion.question
    olympicQuestionElement.innerHTML = `${olympicQuestionsAsked}: ${newOlympicQuestion}`

    newOlympicQuestionChoice1= currentOlympicQuestion.choice1
    olympic1.innerHTML = newOlympicQuestionChoice1

    newOlympicQuestionChoice2= currentOlympicQuestion.choice2
    olympic2.innerHTML = newOlympicQuestionChoice2

    newOlympicQuestionChoice3= currentOlympicQuestion.choice3
    olympic3.innerHTML = newOlympicQuestionChoice3

    newOlympicQuestionChoice4= currentOlympicQuestion.choice4
    olympic4.innerHTML = newOlympicQuestionChoice4
}

function checkOlympicAnswer (e) {
    if (e.target.value == currentOlympicQuestion.answer) {
        olympicScore += 20
        olympicQuestionsAsked += 1
    } else if (e.target.value !== currentOlympicQuestion.answer) {
        olympicQuestionsAsked +=1
    }
    checkEndOlympicQuiz()
    nextOlympicQuestion()
    olympicMessageEl.innerHTML = `${olympicScore} / 100`
}

function checkEndOlympicQuiz () {
    if (olympicQuestionsAsked == 6){
        mainMessageEl.innerText = `GREAT JOB! YOU GOT ${olympicScore} / 100 in ${60 - countDown} seconds!`
        clearInterval(timer)
        setTimeout (function() {
            init()
        },3000)
        olympicQuiz.classList.add("olympic-quiz-box")
        confetti.start(2000)
    }
}

function movieQuizInit () {
    movieQuiz.classList.remove("movie-quiz-box")
    mainPage.classList.add("front-container")
    movieQuestionsAsked = 1
    movieScore = 0
    availableMovieQuestions = [...movieQuestions]
    nextMovieQuestion()
    setTimeout(function(){
        tickTock.play()
    },10)
    countDown = 60
    timer = setInterval(function(){
        countDown -= 1
        countdownEl.innerHTML = countDown
        if (countDown <= 0) {
            timesUp()
            clearInterval(timer)
        }
    }, 1000)
}

function nextMovieQuestion () {
    const movieArray = Math.floor(Math.random() * availableMovieQuestions.length)
    currentMovieQuestion = availableMovieQuestions[movieArray]
    newMovieQuestion = currentMovieQuestion.question
    movieQuestionElement.innerHTML = `${movieQuestionsAsked}: ${newMovieQuestion}`

    newMovieQuestionChoice1= currentMovieQuestion.choice1
    movie1.innerHTML = newMovieQuestionChoice1

    newMovieQuestionChoice2= currentMovieQuestion.choice2
    movie2.innerHTML = newMovieQuestionChoice2

    newMovieQuestionChoice3= currentMovieQuestion.choice3
    movie3.innerHTML = newMovieQuestionChoice3

    newMovieQuestionChoice4= currentMovieQuestion.choice4
    movie4.innerHTML = newMovieQuestionChoice4
}

function checkMovieAnswer (e) {
    if (e.target.value == currentMovieQuestion.answer) {
        movieScore += 20
        movieQuestionsAsked +=1
    } else if (e.target.value !== currentMovieQuestion.answer) {
        movieQuestionsAsked +=1
    }
    checkEndMovieQuiz()
    nextMovieQuestion()
    movieScoreEl.innerText = `${movieScore} / 100`
}

function checkEndMovieQuiz () {
    if (movieQuestionsAsked == 6){
        mainMessageEl.innerText = `GREAT JOB! YOU GOT ${movieScore} / 100 in ${60 - countDown} seconds!`
        clearInterval(timer)
        setTimeout (function() {
            init()
        },3000)
    movieQuiz.classList.add("movie-quiz-box")
    confetti.start(2000)
    }
}

function timesUp () {
    mainMessageEl.innerHTML = "You Lose! Way too slow, try again..."
    soccerQuiz.classList.add("soccer-quiz-box")
    nflQuiz.classList.add("nfl-quiz-box")
    olympicQuiz.classList.add("olympic-quiz-box")
    movieQuiz.classList.add("movie-quiz-box")
    setTimeout (function (){
        init()
    }, 3000)
}
// Function to check the timer! if timer is up the game will finish!
