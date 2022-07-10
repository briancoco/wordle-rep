//Array variable that holds a lot of 5 letter words.
let words = ['HELLO', 'BROWN', 'CRAZY', 'QUICK', 'JIGGY'];

//Counter variable to hold the # of attempts thus far
let attempts = 0;

//Randomly select a word and prompt the user to guess the word. 
let randWord = words[Math.floor(Math.random()*words.length)];
let guess = prompt('Enter your guess: ').toUpperCase();

//If the guess is wrong, up the counter and ask user to guess again
for(let i = 0; i < 6; i++) {
    if(guess != randWord) {
        console.log(guess + ' is wrong guess, try again');
        guess = prompt('Enter your guess: ').toUpperCase();
    }
    else {
        console.log(guess + ' is correct, you win!');
    }
}
if(guess != randWord) {
    console.log('out of tries, play again');
}

//If right, break; 
//If user cannot guess in 6 tries, end game