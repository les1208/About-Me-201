'use strict';

var correctAnswer = 0;


alert('Wizards Welcome (Muggles Tolerated!) What is your name?');
console.log('User typed: ' + username);

function questionOne() {
    var game = prompt('Are you ready to guess who I am?')

    if(questionOne.toLowerCase() === 'yes') {
        alert('Great, lets get started');
    } else if(questionOne.toLowerCase() === 'no') {
        alert('Error');
    }
} questionOne();

function questionTwo() {
    var identity = prompt('Am I a female?');

    if (questionTwo.toLowerCase() === 'yes') {
        alert('You are correct, five points for Slytherin!');
    } else if(questionTwo.toLowerCase() === 'no') {
        alert('Try again');
    }
} questionTwo();

function questionThree() {
    var myHeight = prompt('Am I tall?');
if (questionThree.toLowerCase() === 'yes') {
    alert('Another five points for Slytherin');
    correctAnswer++;
} else if (questionThree.toLowerCase() === 'no') {
    alert('you lose 10 points')

}
} questionThree();


var whatLanguage = prompt('Do I speak another language?');
if (whatLanguage.toLowerCase() === 'yes') {
    alert('More points for Slytherin');
    correctAnswer++;
} else if (whatLanguage.toLowerCase() === 'no') {
    alert('You are on a role losing points!')
    
}

var whatDoI  = prompt('Is spanish the language I speak?');
if (whatDoI.toLowerCase() === 'yes') {
    alert('Ding, ding, ding!');
    correctAnswer++;
} else if (whatLanguage.toLowerCase() === 'no') {
    alert('Try again!');
    
}

// guessing game

var guessNumber = prompt('Guess the correct number. 1-10');

var answer= 6;

for (var i=0; i<4; i++) {
    var guess = parseInt(prompt('Whats your guess?'));
     if(guess === answer) {
        alert('Your answer was correct');
        correctAnswer++;
        break;
     } else if(guess > answer) {
        alert('Sorry too high'); 
     } else if(guess < answer) {
        alert('Sorry too low');
     }
}

// 7th question

var guessedHouse = prompt('Guess the houses that are a part of Hogwarts?');

var hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin'];
console.log('Full Array: ' + hogwartsHouses);

if(guessedHouse === hogwartsHouses[0].toLowerCase() || hogwartsHouses[1].toLowerCase() || hogwartsHouses[2].toLowerCase()) {
    alert('Your answer is correct, all the Hogwarts houses are Gryffindor, Slytherin, and Hufflepuff');  
    correctAnswer++; 
} else {
    alert('You guessed incorrectly, no all the Hogwarts houses are Gryffindor, Slytherin, and Hufflepuff');
   
    correctAnswer + ' out of ' + questions.length;
}
