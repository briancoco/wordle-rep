//Array variable that holds a lot of 5 letter words.
/*let words = ['HELLO', 'BROWN', 'CRAZY', 'QUICK', 'JIGGY'];


//Randomly select a word and prompt the user to guess the word. 
let randWord = words[Math.floor(Math.random()*words.length)];
let guess = prompt('Enter your guess: ').toUpperCase();

//If the guess is wrong, up the counter and ask user to guess again
for(let i = 0; i < 6; i++) {
    if(guess != randWord) {
        matchingLetters(randWord, guess);
        console.log(guess + ' is wrong guess, try again');
        guess = prompt('Enter your guess: ').toUpperCase();
    }
    else {
        console.log(guess + ' is correct, you win!');
    }
}
//if still havent guessed, and no more tries then return this
if(guess != randWord) {
    console.log('out of tries, play again');
}


function matchingLetters(randWord, guess) {
    //Variable that holds matching letters in the wrong place
    //Variable that holds matching letters in the right place
    let matchWrongPlace = [];
    let matchRightPlace = [];

    //For each letter in the attempt, see if it is in the word you’re trying to guess.
    //If it is
    //Check if the letter is in the right place, if it is then add to var holding right places
    //else Add to var holding wrong places
    for(let i = 0; i < 6; i++) {
        if(randWord.includes(guess[i])) {
            if(guess[i] === randWord[i]) {
                matchRightPlace.push(guess[i]);
            }
            else {
                matchWrongPlace.push(guess[i]);
            }
        }
    }

    //turns array results into a comma seperated string
    let wrongString = matchWrongPlace.join(', ');
    let rightString = matchRightPlace.join(', ');

    //prints to console the results
    console.log('Right letters, right place: ' + rightString);
    console.log('Right letters, wrong place: ' + wrongString);
}
*/

const body = document.querySelector('body');
const container = document.querySelector('.container');

for(let i = 0; i < 6; i++) {

    for(let j = 0; j < 5; j++) {
        const div = document.createElement('div');
        div.classList.add('box')
        div.classList.add(`${i}${j}`)
        container.appendChild(div);
    }
}