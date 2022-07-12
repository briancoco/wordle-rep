//Array variable that holds a lot of 5 letter words.
let words = ['HELLO', 'BROWN', 'CRAZY', 'QUICK', 'JIGGY'];
let win = false;
//Randomly select a word and prompt the user to guess the word. 
let randWord = words[Math.floor(Math.random()*words.length)];

let stats = {
    board : Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    row : 0,
    column : 0,
}

const body = document.querySelector('body');
const container = document.querySelector('.container');
let letter;



function updateBoard() {
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 5; j++){
            const div = document.querySelector(`.b${i}${j}`);
            div.textContent = stats.board[i][j];
        }
    }
}
function createBoard() {
    for(let i = 0; i < 6; i++) {

        for(let j = 0; j < 5; j++) {
            const div = document.createElement('div');
            div.classList.add('box');
            div.classList.add(`b${i}${j}`);
            container.appendChild(div);
        }
    }
}

function winner(board) {
    let word = board.join('');
    for(let i = 0; i < 5; i++) {
        const div = document.querySelector(`.b${stats.row}${i}`);
        if(word[i] == randWord[i]) {
            div.classList.add('match');
        }
        else if(randWord.includes(word[i])) {
            div.classList.add('wrong-place');
        }
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
    console.log(e);
    if(e.key == 'Backspace') {
        stats.column--;
        stats.board[stats.row][stats.column] = '';
        updateBoard();
    }
    if(e.code.includes('Key')){
        letter = e.key.toUpperCase();
        if(stats.column == 5) {
            stats.column = 0;
            stats.row++;
        }
        if(!win) {
            stats.board[stats.row][stats.column] = letter;
            stats.column++;
    
            updateBoard();
        }
        if(stats.column == 5) {
            win = winner(stats.board[stats.row]);
            
        }
    }

   
})
