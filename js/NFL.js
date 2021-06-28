// -----Constants-----

let soccerQuestions = [
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
];

let totalSoccerQuestions = soccerQuestions.length;
// -----Variable-----



let currentSoccerQuestion = 0;
let score = 0;


// -----cached Elementss-----
let quizBoard = document.querySelector("#quiz-box");
let questionElement = document.querySelector("#question");
let firstChoice = document.querySelector("#choice1");
let secondChoice = document.querySelector("#choice2");
let thirdChoice = document.querySelector("#choice3");
let fourthChoice = document.querySelector("#choice4");
let nextButton = document.querySelector("#next");
let resultElement = document.querySelector("#result-message")

// ----- Event Listeners------


// -----Functions-------

function newSoccerQuestion (soccerIndex) {
    let soccerQ = soccerQuestions[soccerIndex];
    questionElement.textContent = (soccerIndex + 1) + ". " + soccerQ.question;
    choice1.textContent = soccerQ.choice1;
    choice2.textContent = soccerQ.choice2;
    choice3.textContent = soccerQ.choice3;
    choice4.textContent = soccerQ.choice4;
};

function nextSoccerQuestion () {
    let choiceSelected = document.querySelector("input[type=radio]:checked");
    if (!choiceSelected) {
        alert("please choose an option");
        return
    }
    let soccerAnswer = choiceSelected.Value;
    if(soccerQuestions[currentSoccerQuestion].answer == answer) {
        score +=25;
    }
    choiceSelected.checked = false;
    currentSoccerQuestion++;
    if(currentSoccerQuestion == totalSoccerQuestions - 1)
    nextButton.innerHTML = "Finished"
}
