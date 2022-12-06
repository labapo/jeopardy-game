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
const categoryBoard = document.getElementById("category-board")

const jeopardyQuestions =[
    {
        categoryName: "One",
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
        categoryName: "Two",
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
        categoryName: "Three",
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
        categoryName: "Four",
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
        categoryName: "Five",
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
//Add create columns from array using a for each loop
function addCategory (category) {
    const column = document.createElement('div'); 
    column.classList.add("genre-column")//classlist = modify the list of classes attached to a html element

    const genreTitle = document.createElement('div');
    genreTitle.classList.add("genre-title")
    genreTitle.innerText = category.categoryName
    
    column.appendChild(genreTitle)
    categoryBoard.append(column)
}
jeopardyQuestions.forEach(category => addCategory(category))