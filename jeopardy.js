/*Pseudocode
- start game
1. Click "Start" in the directions box to start game. Start will dissapear in the directions box after game starts. 
2. Enter names for player 1 and player 2
    - create a start game function
- start player 1 turn
1. Directions for player 1 to choose a category and amount
2. Pull up question screen
3. Will have 25 seconds to answer the question
4. If player 1 answers the question correctly by clicking on the correct answer, they will receive the points
5. If player 1 answers the question incorrectly, they will have those points deducted
6. Screen goes back to the score board with player 1's scores updated
- start player 2 turn
1. Directions for player 2 to choose a category and amount
2. Pull up question screen
3. Will have 25 seconds to answer the question. 
4. If player 2 answers the question correctly by clicking on the correct answer, they will receive the points
5. If player 2 answers the question incorrectly, they will have those points deducted
6. Screen goes back to the score board with player 2's scores updated
- End round
When all questions have been answered, go into final jeopardy where they have to type out the question. 
- final jeopardy
Will go to the questions screen. Will have category and prompt user to make their wager. 
Have one question and they have to type it out with no misspellings. Make sure you have the who is, what is, what are. 
- End game
Winner is the person who has the most points at the end will win! 
- Buttons
1. There's a reset game button that will make the score 0, delete player's names, and reset all questions
2. There's a reset round that will reset the game to the beginning of the round. Will use if I think there should be two rounds
3. There's a start game button that will be in the player's directions box. Start will disspear after the start button is pressed
- Two classes
1. player turn
2. generate questions
    question
    answer
    value
    level
stretches: 
1. Have two rounds
2. Daily Double
3. If you get question wrong, the other player choose question and amount
4. Add an interface to submit questions to go into the array
5. Maybe have a page where I can see all the questions? 
*/

const playerOneName = document.getElementById("playerOneName");
const playerOneScore = document.getElementById("playerOneScore");
const playerTwoName = document.getElementById("playerTwoName");
const playerTwoScore = document.getElementById("playerTwoScore");
const categoryBoard = document.getElementById("category-board");
const displayQuestion = document.getElementById("display-questions");

//create player class
class Player {
  constructor(name) {
    this.name = name;
  }
}

const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");
const cat4 = document.getElementById("cat4");
const cat5 = document.getElementById("cat5");

const jeopardyQuestions = [
  {
    categoryName: "Javascript",
    questions: [
      {
        question: "What is JavaScript?",
        answers: [
          "A. JavaScript is an assembly language used to make the website interactive",
          "B. JavaScript is a scripting language used to make the website interactive",
          "C. JavaScript is a compiled language used to make the website interactive.",
          "D. None of the mentioned.",
        ],
        correct:
          "B. JavaScript is a scripting language used to make the website interactive",
        value: 100,
        level: 1,
      },
      {
        question: "Which of the following is correct about JavaScript?",
        answers: [
          "A. JavaScript is an Object-Based language",
          "B. JavaScript is Assembly-language",
          "C. JavaScript is an Object-Oriented language",
          "D. JavaScript is a High-level language",
        ],
        correct: "A. JavaScript is an Object-Based language",
        value: 200,
        level: 2,
      },
      {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: [
          "A. It is an ordered list of objects",
          "B. It is an ordered list of string",
          "C. It is an ordered list of functions",
          "D. It is an ordered list of values.",
        ],
        correct: "D. It is an ordered list of values.",
        value: 300,
        level: 3,
      },
      {
        question: "What is the basic difference between JavaScript and Java?",
        answers: [
          "A. Functions are considered as fields",
          "B. Functions are values, and there is no hard distinction between methods and fields.",
          "C. Variables are specific",
          "D. There is no difference",
        ],
        correct: "B. Functions are values, and there is no hard distinction between methods and fields.",
        value: 400,
        level: 4,
      },
      {
        question: "Why event handlers is needed in Javascript?",
        answers: [
          "A. Adds innerHTML page to the code",
          "B. Change the server location",
          "C. Allows JavaScript code to alter the behaviour of windows",
          "D. Performs handling of exceptions and occurrences",
        ],
        correct: "C. Allows JavaScript code to alter the behaviour of windows",
        value: 500,
        level: 5,
      },
    ],
  },
  {
    categoryName: "Loops",
    questions: [
      {
        question: "2What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 100,
        level: 1,
      },
      {
        question: "2What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 200,
        level: 2,
      },
      {
        question: "2What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 300,
        level: 3,
      },
      {
        question: "2What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 400,
        level: 4,
      },
      {
        question: "2What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 500,
        level: 5,
      },
    ],
  },
  {
    categoryName: "Javascript General",
    questions: [
      {
        question: "3What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 100,
        level: 1,
      },
      {
        question: "3What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 200,
        level: 2,
      },
      {
        question: "3What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 300,
        level: 3,
      },
      {
        question: "3What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 400,
        level: 4,
      },
      {
        question: "3What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 500,
        level: 5,
      },
    ],
  },
  {
    categoryName: "React",
    questions: [
      {
        question: "4What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 100,
        level: 1,
      },
      {
        question: "4What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 200,
        level: 2,
      },
      {
        question: "4What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 300,
        level: 3,
      },
      {
        question: "4What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 400,
        level: 4,
      },
      {
        question: "4What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 500,
        level: 5,
      },
    ],
  },
  {
    categoryName: "CS Fundamentals",
    questions: [
      {
        question: "5What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 100,
        level: 1,
      },
      {
        question: "5What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 200,
        level: 2,
      },
      {
        question: "5What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 300,
        level: 3,
      },
      {
        question: "5What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 400,
        level: 4,
      },
      {
        question: "5What is the answer to question one? The answer is B.",
        answers: [
          "A. Incorrect choice, answer A",
          "B. Correct Choice. Answer B.",
          "C. Incorrect choice, answer C.",
          "D. Incorrect choice, answer D.",
        ],
        correct: "B. Correct Choice. Answer B.",
        value: 500,
        level: 5,
      },
    ],
  },
];
console.log(jeopardyQuestions);
//filter to make a div of each category
let categoryOne = jeopardyQuestions.filter(function (jeopardyQuestions) {
  const catOne = document.createElement("div");
  return jeopardyQuestions.categoryName === "Category One";
});
console.log(categoryOne);
let categoryTwo = jeopardyQuestions.filter(function (jeopardyQuestions) {
  const catTwo = document.createElement("div");
  return jeopardyQuestions.categoryName === "Category Two";
});
console.log(categoryTwo);
let categoryThree = jeopardyQuestions.filter(function (jeopardyQuestions) {
  const catThree = document.createElement("div");
  return jeopardyQuestions.categoryName === "Category Three";
});
console.log(categoryThree);
let categoryFour = jeopardyQuestions.filter(function (jeopardyQuestions) {
  const catFour = document.createElement("div");
  return jeopardyQuestions.categoryName === "Category Four";
});
console.log(categoryFour);
let categoryFive = jeopardyQuestions.filter(function (jeopardyQuestions) {
  const catFive = document.createElement("div");
  return jeopardyQuestions.categoryName === "Category Five";
});
console.log(categoryFive);

//Add create columns from array using a for each loop
function addCategory(category) {
  //create categories on the board
  const column = document.createElement("div");
  column.classList.add("category-column"); //classlist = modify the list of classes attached to a html element
  const categoryTitle = document.createElement("div");
  categoryTitle.classList.add("category-title");
  categoryTitle.innerHTML = category.categoryName;
  //show genre title on the category board
  column.appendChild(categoryTitle);
  categoryBoard.append(column);
  //create questions grid
  category.questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("fullscreen");
    column.append(card);
    card.addEventListener("click", function () {
      this.requestFullscreen();
    });
    if (question.level === 1) {
      card.innerHTML = 100;
    }
    if (question.level === 2) {
      card.innerHTML = 200;
    }
    if (question.level === 3) {
      card.innerHTML = 300;
    }
    if (question.level === 4) {
      card.innerHTML = 400;
    }
    if (question.level === 5) {
      card.innerHTML = 500;
    }
    card.setAttribute("question-text", question.question);
    card.setAttribute("correct-answer", question.correct);
    card.setAttribute("answer-choiceA", question.answers[0]);
    card.setAttribute("answer-choiceB", question.answers[1]);
    card.setAttribute("answer-choiceC", question.answers[2]);
    card.setAttribute("answer-choiceD", question.answers[3]);
    card.setAttribute("value-amount", question.value);
    card.setAttribute("level", question.level);
    card.addEventListener("click", showQuestionsAndChoices);
  });
}
jeopardyQuestions.forEach((category) => addCategory(category));

function showQuestionsAndChoices() {
  //card.disabled = true
  // startButton().then(() => {
  //     // When the function has finished running, enable the button
  //     card.disabled = false;
  //   });
  //creates a string
  this.innerHTML = "";
  //create a div and give it a class of card-text
  const textDisplay = document.createElement("div");
  textDisplay.classList.add("card-text");
  //create buttons for each answer choice
  const choiceA = document.createElement("button");
  const choiceB = document.createElement("button");
  const choiceC = document.createElement("button");
  const choiceD = document.createElement("button");
  // add a class to each answer choice
  choiceA.classList.add("choice-a");
  choiceB.classList.add("choice-b");
  choiceC.classList.add("choice-c");
  choiceD.classList.add("choice-d");
  //display question and answer choices
  textDisplay.innerHTML = this.getAttribute("question-text");
  choiceA.innerHTML = this.getAttribute("answer-choicea");
  choiceB.innerHTML = this.getAttribute("answer-choiceb");
  choiceC.innerHTML = this.getAttribute("answer-choicec");
  choiceD.innerHTML = this.getAttribute("answer-choiced");
  //
  choiceA.addEventListener("click", getResult1);
  choiceB.addEventListener("click", getResult1);
  choiceC.addEventListener("click", getResult1);
  choiceD.addEventListener("click", getResult1);

  // choiceA.addEventListener('click', getResult2)
  // choiceB.addEventListener('click', getResult2)
  // choiceC.addEventListener('click', getResult2)
  // choiceD.addEventListener('click', getResult2)

  //attach attributes to the button to display
  this.append(textDisplay, choiceA, choiceB, choiceC, choiceD);

  const allQuestions = Array.from(document.querySelectorAll(".card"));
  allQuestions.forEach((card) =>
    card.removeEventListener("click", showQuestionsAndChoices)
  );
}

let playerOneTurn = 0;
let playerTwoTurn = 0;

function getResult1() {
  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) =>
    card.addEventListener("click", showQuestionsAndChoices)
  );
  const cardOfButton = this.parentElement;
  if (cardOfButton.getAttribute("correct-answer") === this.innerHTML) {
    // score = score + parseInt(cardOfButton.getAttribute('value-amount'))
    // scoreDisplay.innerHTML = score
    // cardOfButton.classList.add('correct-answer')
    playerOneTurn =
      playerOneTurn + parseInt(cardOfButton.getAttribute("value-amount"));
    console.log(playerOneTurn);
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML =
        "You received " +
        cardOfButton.getAttribute("value-amount") +
        " points!";
    }, 100);
    setTimeout(() => {
      exitFullScreen();
    }, 2000);
    playerOneScore.innerHTML = playerOneTurn;
  } else {
    playerOneTurn =
      playerOneTurn - parseInt(cardOfButton.getAttribute("value-amount"));
    console.log(playerOneTurn);
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML =
        "You lost " + cardOfButton.getAttribute("value-amount") + " points";
    }, 100);
    setTimeout(() => {
      exitFullScreen();
    }, 2000);
    playerOneScore.innerHTML = playerOneTurn;
  }
  cardOfButton.removeEventListener("click", showQuestionsAndChoices);
}
// function getResult2 () {
//     const allCards = Array.from(document.querySelectorAll('.card'))
//     allCards.forEach(card => card.addEventListener('click', showQuestionsAndChoices))
//     const cardOfButton = this.parentElement;
//     if (cardOfButton.getAttribute('correct-answer') === this.innerHTML) {
//         // score = score + parseInt(cardOfButton.getAttribute('value-amount'))
//         // scoreDisplay.innerHTML = score
//         // cardOfButton.classList.add('correct-answer')
//         playerTwoTurn = playerTwoTurn + parseInt(cardOfButton.getAttribute('value-amount'))
//         console.log(playerTwoTurn)
//         setTimeout(()=> {
//             while (cardOfButton.firstChild){
//                 cardOfButton.removeChild(cardOfButton.lastChild)
//             } cardOfButton.innerHTML = "You received " +cardOfButton.getAttribute('value-amount') + " points!";
//         }, 100)
//         setTimeout (()=>{
//             exitFullScreen()
//         }, 2000)
//         playerTwoScore.innerHTML = playerTwoTurn
//     } else {
//         playerTwoTurn = playerTwoTurn - parseInt(cardOfButton.getAttribute('value-amount'))
//         console.log(playerTwoTurn)
//         setTimeout(()=> {
//             while (cardOfButton.firstChild){
//                 cardOfButton.removeChild(cardOfButton.lastChild)
//             } cardOfButton.innerHTML = "You lost " + cardOfButton.getAttribute('value-amount') + " points";
//         }, 100)
//         setTimeout (()=>{
//             exitFullScreen()
//         }, 2000)
//         playerTwoScore.innerHTML = playerTwoTurn
//     }
//     cardOfButton.removeEventListener('click', showQuestionsAndChoices)
// }

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

//Start Game and buttons
const startButton = document.getElementById("start-game");
const resetGameButton = document.getElementById("reset-game");
startButton.addEventListener("click", (event) => {
  //button dissapears
  startButton.style.display = "none";
  //create new player
  let enterPlayerOne = new Player();
  //player 1 enter name
  enterPlayerOne = prompt("Enter Player 1's Name");
  if (enterPlayerOne != null) {
    playerOneName.innerHTML = enterPlayerOne;
  }
  console.log(enterPlayerOne);
  let enterPlayerTwo = new Player();
  //player 2 enter name
  enterPlayerTwo = prompt("Enter Player 2's Name");
  if (enterPlayerTwo != null) {
    playerTwoName.innerHTML = enterPlayerTwo;
  }
  console.log(enterPlayerTwo);
  //start player one text in directions box
  let startPlayerOne = `${playerOneName.innerText}'s turn. Choose a category and value`;
  document.getElementById("directions-text").innerHTML = startPlayerOne;
  //reset buttons appear
  document.getElementById("reset-game-button").style.visibility = "visible";
  doubleJeopardy();
});

const restartButton = document.getElementById("reset-game-button");
restartButton.addEventListener("click", restart);
function restart() {
  window.location.reload();
}

// function doubleJeopardy () {
//     let question = jeopardyQuestions
//     let doubleJeopardy1 = jeopardyQuestions[Math.floor(Math.random() * jeopardyQuestions.length)]
//     let doubleJeopardy2 = jeopardyQuestions[Math.floor(Math.random() * jeopardyQuestions.question.length)]
//     console.log(doubleJeopardy1);
//     console.log(doubleJeopardy2);
// }
