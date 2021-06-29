// let soccerQuestions = [
//     {
//     prompt: "What country has won the most World Cups?\n(a) Germany\n\(b) Brazil\n(c) Italy",
//     answer: "b",
//     },

//     {
    
//     prompt: "Who won the first ever World Cup in 1930?\n(a) Brazil\n\(b) England\n (c) Uruguay",
//     answer: "c",
//     },

//     {
//     prompt: "Which player has scored a record 15 goals in his  World Cup career?\n(a) Miroslav Klose - Germany \n\(b) Ronaldo - Brazil\n (c) Christiano Ronoaldo - Portugal",
//     answer: "a",
//     },

//     {
//     prompt: "Which country will host the 2022 World Cup?\n(a) Qatar\n\(b) Saudi Arabia\n (c) United Arab Emirates",
//     answer: "a",
//     }
// ];

// let messageElement = document.querySelector("#categories")



// let score = 0;

// for(let i = 0; i < soccerQuestions.length; i++) {
//     let response = window.prompt(soccerQuestions[i].prompt)
//     if(response == soccerQuestions[i].answer){
//         score++;
//         alert("Correct");
//         messageElement.innerHTML = response
//     } else {
//         alert("Wrong")
//     }
// }
// alert("you got " + score + "out of " + soccerQuestions.length)