//Array variable that holds a lot of 5 letter words.
let words = ['HELLO', 'BROWN', 'CRAZY', 'QUICK', 'JIGGY'];
let win = false;
//Randomly select a word and prompt the user to guess the word. 
let randWord = words[Math.floor(Math.random()*words.length)];

//object that holds game data 
let stats = {
    //holds current box values
    board : Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    row : 0,//current row
    column : 0,//current column
}

const body = document.querySelector('body');
const container = document.querySelector('.container');
let letter;


//updates board by iteration through all boxes changing their text content according to game data
function updateBoard() {
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 5; j++){
            const div = document.querySelector(`.b${i}${j}`);
            div.textContent = stats.board[i][j];
        }
    }
}
//creates 5 x 6 grid for the wordle game
function createBoard() {
    for(let i = 0; i < 6; i++) {

        for(let j = 0; j < 5; j++) {
            
            const div = document.createElement('div');
            div.classList.add('box');
            //each box is given a specific class based on it's position in the grid
            //so we can reference each individual box
            div.classList.add(`b${i}${j}`);
            container.appendChild(div);
        }
    }
}

function winner(board) {
    //combines letters in the current row into word
    let word = board.join('');
    //iterates over each letter in the current row checking for conditions
    for(let i = 0; i < 5; i++) {
        const div = document.querySelector(`.b${stats.row}${i}`);
        //if letter matches and is in the right position, add matching styling
        if(word[i] == randWord[i]) {
            div.classList.add('match');
        }
        //if letter matches and is in the wrong position, add wrong-place styling
        else if(randWord.includes(word[i])) {
            div.classList.add('wrong-place');
        }
        //if no match add indicated styling
        else {
            div.classList.add('no-match');
        }
    }

    if(word == randWord) {
        return true;
    }

    return false;
}

createBoard();

body.addEventListener('keydown', (e) => {
    //deletes last inputted letter from row
    if(e.key == 'Backspace') {
        if(stats.column > 0) {
            stats.column--;
            stats.board[stats.row][stats.column] = '';
            updateBoard();
        }
        
    }
    //if valid letter then add to board
    if(e.code.includes('Key') ){
        letter = e.key.toUpperCase();
        //checks if the row is full and changes if it is
        if(stats.column == 5) {
            stats.column = 0;
            stats.row++;
        }
        //adds letter to game data and updates board if no winner
        if(!win) {
            stats.board[stats.row][stats.column] = letter;
            stats.column++;
    
            updateBoard();
        }
        //checks for winner and stops game from running if so
        if(stats.column == 5) {
            win = winner(stats.board[stats.row]);
            
        }
    }

   
})
