/*----- constants -----*/ 
const soccerQuestions = [
    {
    number: 1,
    question: "What country has won the most World Cups?",
    answer: "Brazil",
    choice1: "Germany",
    choice2: "Brazil",
    choice3: "Italy",
    choice4: "Argentina",
    },

    {
    number: 2,
    question: "Who won the first ever World Cup in 1930?",
    answer: "Uruguay",
    choice1: "Brazil",
    choice2: "England",
    choice3:"Germany",
    choice4: "Uruguay",
    },

    {
    number: 3,
    question: "Which player has scored a record 15 goals in his  World Cup career?",
    answer: "Miroslav Klose - Germany",
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
]

const colorScheme = {
    dark: "",
    change: function() {
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
    }
}



/*----- (variables) -----*/ 

let isWinner, wrongAnswer, timeLeft 



/*----- cached element references -----*/ 
const darkMode = document.querySelector("#dark-mode-button")
const importantMessage = document.querySelector("#important-message")
const questionElement = document.querySelector("#question")
const fifaWorldCup = document.querySelector("#choice1")
const nfl = document.querySelector("#choice2")
const olympics = document.querySelector("#choice3")
const basketball = document.querySelector("#choice4")

/*----- event listeners -----*/ 
darkMode.addEventListener("click", colorScheme.change)
fifaWorldCup.addEventListener("click", fifaQuiz)
nfl.addEventListener = ("click", nflQuiz)
olympics.addEventListener = ("click", olympicsQuiz)
basketball.addEventListener = ("click", basketballQuiz)

// function fifaQuiz (i) {
//     importantMessage.innerHTML = "GOOD LUCK!"
//     let soccerQuestion = soccerQuestions[i]
//     questionElement.innerHTML = soccerQuestion.question
//     console.log(fifaQuiz[1])
    
// }

let randomSoccerQuestion = []

function fifaQuiz () {
    while (randomSoccerQuestion.length <= 3) {
        importantMessage.innerHTML = "Good Luck!"
        const random = soccerQuestions[Math.floor(Math.random() * soccerQuestions.length)]
        if (!randomSoccerQuestion.includes(random)) {
            randomSoccerQuestion.push(random)
        }
        questionElement.innerHTML = soccerQuestions.question
    }
}

function nflQuiz(){

}

function olympicsQuiz () {

}

function basketballQuiz () {

}

// function addNewQuestion (i) {
//     newQuestion = soccerQuestions[question]

// }

/*----- functions -----*/
checkUserColorSchemePreference()

function checkUserColorSchemePreference() {
    if (
        window.matchMedia("(prefers-color-scheme:dark)").matches && !colorScheme.dark
    ) {
        colorScheme.change()
    }
}