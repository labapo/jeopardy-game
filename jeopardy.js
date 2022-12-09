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

const jeopardyQuestions =[
    {
        categoryName: "Category One",
        questions: [
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 100, 
            level: 1
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 200, 
            level: 2
        }, 
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 300, 
            level: 3
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 400, 
            level: 4
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 5
        }
    ]
    },
    {
        categoryName: "Category Two",
        questions: [
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 100, 
            level: 1
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 200, 
            level: 2
        }, 
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 300, 
            level: 3
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 4
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 5
        }
    ]
    }, 
    {
        categoryName: "Category Three",
        questions: [
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 100, 
            level: 1
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 200, 
            level: 2
        }, 
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 300, 
            level: 3
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 4
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 5
        }
    ]
    }, 
    {
        categoryName: "Category Four",
        questions: [
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 100, 
            level: 1
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 200, 
            level: 2
        }, 
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 300, 
            level: 3
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 4
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 5
        }
    ]
    }, 
    {
        categoryName: "Category Five",
        questions: [
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 100, 
            level: 1
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 200, 
            level: 2
        }, 
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 300, 
            level: 3
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 4
        },
        {
            question: "What is the answer to question one? The answer is B.", 
            answers: ["A. Incorrect choice, answer A", "B. Correct Choice. Answer B.", "C. Incorrect choice, answer C.", "D. Incorrect choice, answer D."],
            correct: "B. Correct Choice. Answer B.",
            value: 500, 
            level: 5
        }
    ]
    }
]
console.log(jeopardyQuestions)

//Add create columns from array using a for each loop
function addCategory (category) {
    //create categories on the board
    const column = document.createElement('div'); 
    column.classList.add("category-column")//classlist = modify the list of classes attached to a html element
    const categoryTitle = document.createElement('div');
    categoryTitle.classList.add("category-title")
    categoryTitle.innerHTML = category.categoryName
    //show genre title on the category board
    column.appendChild(categoryTitle)
    categoryBoard.append(column)
    //create questions grid
        category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        const questionsGrid = document.getElementById('questions-grid')
        questionsGrid.append(card)
        // //Event listener
        // let categoryQuestion=document.getElementsByClassName('card')
        // card.addEventListener("click",()=> {
        //    alert("HI")
        //  })
        if (question.level===1) { 
         card.innerHTML = 100
        }
        if (question.level===2) { 
            card.innerHTML = 200
        }
        if (question.level===3) { 
            card.innerHTML = 300
           }
        if (question.level===4) { 
            card.innerHTML = 400
        }
        if (question.level===5) { 
            card.innerHTML = 500
           }
        card.setAttribute("question-text", question.question);
        card.setAttribute('correct-answer', question.correct);
        card.setAttribute('answer-choiceA', question.answers[0]);
        card.setAttribute('answer-choiceB', question.answers[1]);
        card.setAttribute('answer-choiceC', question.answers[2]);
        card.setAttribute('answer-choiceD', question.answers[3]);
        card.setAttribute('value-amount', question.value);
        card.setAttribute('level', question.level);

        card.addEventListener("click", showQuestionsAndChoices)
   })
}

jeopardyQuestions.forEach(category => addCategory(category))

function showQuestionsAndChoices (){
    //creates a string
    this.innerHTML = ""; 
    //create a div and give it a class of card-text
    const textDisplay = document.createElement('div');
    textDisplay.classList.add('card-text');
    //create buttons for each answer choice
     const choiceA = document.createElement('button');
     const choiceB = document.createElement('button');
     const choiceC = document.createElement('button');
     const choiceD = document.createElement('button');
    // add a class to each answer choice
     choiceA.classList.add('choice-a')
     choiceB.classList.add('choice-b')
     choiceC.classList.add('choice-c')
     choiceD.classList.add('choice-d')
    //display question and answer choices
    textDisplay.innerHTML = this.getAttribute("question-text")
    choiceA.innerHTML = this.getAttribute('answer-choiceA')
    choiceB.innerHTML = this.getAttribute('answer-choiceB')
    choiceC.innerHTML = this.getAttribute('answer-choiceC')
    choiceD.innerHTML = this.getAttribute('answer-choiceD')
    //attach attributes to the button to display
    this.append(textDisplay, choiceA, choiceB, choiceC, choiceD)

    const allQuestions = Array.from(document.querySelectorAll('.card'));
    allQuestions.forEach(card => card.removeEventListener('click', showQuestionsAndChoices))
}

//Start Game and buttons
const startButton = document.getElementById('start-game');
const resetGameButton = document.getElementById('reset-game'); 
startButton.addEventListener('click', (event) => {
    //button dissapears
    startButton.style.display = "none";
    //player 1 enter name
    let enterPlayerOne = prompt("Enter Player 1's Name");
    if (enterPlayerOne !=null) {
        playerOneName.innerHTML = enterPlayerOne
    };
    //player 2 enter name
    let enterPlayerTwo = prompt("Enter Player 2's Name");
    if (enterPlayerTwo !=null) {
        playerTwoName.innerHTML = enterPlayerTwo
    };
    //start player one text in directions box
    let startPlayerOne = "Player 1's Turn. Click on a category and value.";
    document.getElementById("directions-text").innerHTML = startPlayerOne;
    //reset buttons appear
    document.getElementById("reset-game-button").style.visibility="visible";
    
});



